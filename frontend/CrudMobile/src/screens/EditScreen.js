import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context"
import { formStyles } from "../styles/formStyles"

export default function AddScreen() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [origin, setOrigin] = useState("")

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

                <TouchableOpacity style={formStyles.submitButton}>  
                    <Text style={formStyles.submitButtonText}>Update</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}