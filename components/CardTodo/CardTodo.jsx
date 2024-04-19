import { TouchableOpacity, Text, View, Image } from 'react-native';
import { styles } from './CardTodo.styles';

import CHECK from '../../assets/check.png';
const CardTodo = ({ todo }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View>
        <Text
          style={todo.isCompleted ? [styles.txt, styles.strike] : styles.txt}
        >
          {todo?.title}
        </Text>
      </View>
      <View>
        <Image 
        style={todo.isCompleted ? styles.check : {display:'none'}}
        source={CHECK} />
      </View>
    </TouchableOpacity>
  );
};

export default CardTodo;
