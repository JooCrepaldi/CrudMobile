import { useState, useCallback } from "react"
import { View, FlatList, Text, TouchableOpacity } from 'react-native'
import getPeople from "../services/get"
import ActionModal from "./modal/ActionModal"
import { listStyles } from "../styles/listStyle"
import { btnStyles } from "../styles/btnStyle"
import { useNavigation, useFocusEffect } from "@react-navigation/native"
import DeleteModal from "./modal/deleteModal"
import deletePeople from "../services/delete"

import { API_URL } from "../../config/urlConfig"

export default function HomeScreen() {

    const navigation = useNavigation()

    const [people, setPeople] = useState([])
    const [visible, setVisible] = useState(false)
    const [selectedPerson, setSelectedPerson] = useState(null)
    const [deleteVisible, setDeleteVisible] = useState(false)

    useFocusEffect(
        useCallback(() => {
            async function loadPeople() {
                const data = await getPeople(API_URL)
                setPeople(data)
            }
            loadPeople()
        }, [])
    )

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={people}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ paddingBottom: 90 }}
                renderItem={({ item }) => (
                    <View style={listStyles.row}>

                        <View style={listStyles.avatar}>
                            <Text style={listStyles.avatarText}>
                                {item.name.charAt(0)}
                            </Text>
                        </View>

                        <View style={listStyles.info}>
                            <Text style={listStyles.name}>{item.name}</Text>
                            <Text style={listStyles.subtitle}>
                                {item.origin} • {item.email}
                            </Text>
                        </View>

                        <TouchableOpacity
                            style={listStyles.menuButton}
                            onPress={() => {
                                setSelectedPerson(item)
                                setVisible(true)
                            }}
                        >
                            <Text style={listStyles.menuText}>•••</Text>
                        </TouchableOpacity>

                    </View>
                )}
            />

            <ActionModal
                visible={visible}
                onClose={() => setVisible(false)}
                onEdit={() => navigation.navigate('Edit', { id: selectedPerson?.id })}
                onDelete={() => {
                    setVisible(false)
                    setDeleteVisible(true)
                }}
                personName={selectedPerson?.name}
            />

            <DeleteModal
                visible={deleteVisible}
                onClose={() => setDeleteVisible(false)}
                onConfirm={async () => {
                    await deletePeople(selectedPerson?.name, selectedPerson?.id, API_URL)
                    setDeleteVisible(false)
                }}
                personName={selectedPerson?.name}
            />

            <TouchableOpacity
                style={btnStyles.fab}
                onPress={() => navigation.navigate('Add')}
                activeOpacity={0.8}
            >
                <Text style={btnStyles.fabText}>+</Text>
            </TouchableOpacity>
        </View>
    )
}