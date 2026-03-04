import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context"
import { SafeAreaView } from "react-native-safe-area-context"
import Navigation from './src/navigation/navigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>//tirar isso depois
        <Navigation/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

