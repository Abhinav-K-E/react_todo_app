import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

//importing styles
import styles from './App.styles'

export default function App(){
  return(
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper}>
        <Text>Hey ⚡</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}