import React, { useState, useEffect } from "react"
import { View, FlatList, Text, TouchableOpacity } from 'react-native'
import getPeople from "../services/get"
import ActionModal from "./modal/ActionModal"
import { listStyles } from "../styles/listStyle"
import { btnStyles } from "../styles/btnStyle"
import { useNavigation } from "@react-navigation/native" 


const API_URL = "http://192.168.0.7"

export default function HomeScreen() {

    const navigation = useNavigation()

    const [people, setPeople] = useState([])
    const [visible, setVisible] = useState(false)
    const [selectedPerson, setSelectedPerson] = useState(null)

    useEffect(() => {
        async function loadPeople() {
            const data = await getPeople(API_URL)
            setPeople(data)
        }
        loadPeople()
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={people}
                keyExtractor={(item) => item.id.toString()}
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
                onEdit={() => navigation.navigate('Edit')}
                onDelete={() => console.log("delete")}// adicionar o modal 2 de confirmação de delete
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