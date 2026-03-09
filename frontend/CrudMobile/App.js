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

