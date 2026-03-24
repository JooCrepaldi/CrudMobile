import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context"
import { formStyles } from "../styles/formStyles"
import createPeople from "../services/post";
import { API_URL } from "../../config/urlConfig";
import { useNavigation } from "@react-navigation/native"

export default function AddScreen() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [origin, setOrigin] = useState("")

    const navigation = useNavigation()

    const handleSubmit = async () => {
        if (!nome.trim() || !email.trim() || !origin.trim()) {
            Alert.alert(
                "Campos obrigatórios", 
                "Por favor, preencha todos os campos antes de continuar.",
                [{ text: "OK" }] 
            );
            return; 
        }
        await createPeople(nome, email, origin, API_URL);
        navigation.goBack();
    };

    return (
        <SafeAreaView style={formStyles.container}>
            <View style={formStyles.content}>

                <View style={formStyles.inputGroup}>
                    <Text style={formStyles.label}>Name</Text>
                    <TextInput
                        onChangeText={setNome}
                        value={nome}
                        placeholder="name"
                        style={formStyles.input}
                    />
                </View>

                <View style={formStyles.inputGroup}>
                    <Text style={formStyles.label}>Email</Text>
                    <TextInput
                        onChangeText={setEmail}
                        value={email}
                        placeholder="email"
                        keyboardType="email-address"
                        style={formStyles.input}
                    />
                </View>

                <View style={formStyles.inputGroup}>
                    <Text style={formStyles.label}>Origin</Text>
                    <TextInput
                        onChangeText={setOrigin}
                        value={origin}
                        placeholder="origin"
                        style={formStyles.input}
                    />
                </View>

                <TouchableOpacity
                    style={formStyles.submitButton}
                    onPress={handleSubmit}
                >
                    <Text style={formStyles.submitButtonText}>Create</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}