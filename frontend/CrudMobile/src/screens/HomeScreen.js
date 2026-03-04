import React from "react";
import { View, Button } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context"
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <Button
                    title="Ir para detalhes"
                    onPress={() => navigation.navigate("Details")}
                />
            </View>
        </SafeAreaView>
    );
}