import { useState, useCallback, useMemo } from "react"
import { View, FlatList, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
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
    const [query, setQuery] = useState('')

    useFocusEffect(
        useCallback(() => {
            async function loadPeople() {
                const data = await getPeople(API_URL)
                setPeople(data)
            }
            loadPeople()
        }, [])
    )

    const filteredData = useMemo(() => {
        if (!query.trim()) return people
        const lower = query.toLowerCase()
        return people.filter(person =>
            person.name?.toLowerCase().includes(lower)
        )
    }, [query, people])

    return (
        <View style={{ flex: 1 }}>
            <TextInput
                placeholder="Buscar por nome, e-mail ou origem..."
                value={query}                       
                onChangeText={text => setQuery(text)}
                style={styles.input}
            />

            <FlatList
                data={filteredData}                  
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ paddingBottom: 90 }}
                ListEmptyComponent={
                    <Text style={styles.empty}>Nenhum resultado encontrado.</Text>
                }
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

const styles = StyleSheet.create({
    input: {
        margin: 12,
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        fontSize: 15,
    },
    empty: {
        textAlign: 'center',
        marginTop: 40,
        color: '#999',
        fontSize: 15,
    }
})