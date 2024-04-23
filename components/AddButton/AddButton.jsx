import { TouchableOpacity, Text } from "react-native"
import { styles } from "./AddButton.styles"

export const AddButton = ({showAdd}) => {
  return (
    <TouchableOpacity 
    onPress={()=>showAdd()}
    style={styles.AddBtn}
    >
        <Text
        style={styles.btnTxt}
        >
            Add Todo
        </Text>
    </TouchableOpacity>
  )
}
