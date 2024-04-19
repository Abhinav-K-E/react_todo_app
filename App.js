import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";

//importing styles
import styles from './App.styles'

export default function App(){
  return(
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.header}>
          <Text>Header</Text>
        </View>
        <View style={styles.body}>
          <Text>Body</Text>
        </View>
        <View style={styles.footer}>
          <Text>Footer</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}