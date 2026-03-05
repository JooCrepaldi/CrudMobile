import React, { useState, useEffect } from "react"
import { View, FlatList, Text, TouchableOpacity, Button } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import getPeople from "../services/get"
import { listStyles } from "../styles/style"
import ActionModal from "./modal/ActionModal"

const API_URL = "http://192.168.0.7"

export default function HomeScreen() {

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
        <SafeAreaView style={{ flex: 1 }}>
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
                onEdit={() => console.log("edit")}
                onDelete={() => console.log("delete")}
                personName={selectedPerson?.name}
            />

            <TouchableOpacity
                style={listStyles.fab}
                onPress={() => console.log("add")}
                activeOpacity={0.8}
            >
                <Text style={listStyles.fabText}>+</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}