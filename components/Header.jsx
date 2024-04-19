import { View ,Image,Text } from 'react-native'

import { styles } from './Header.styles'
import LOGO from '../assets/logo.png'

const Header = () => {
  return (
    <View style={styles.header_container}>
        <Image 
        style={styles.img}
        source={LOGO}
        />
        <Text style={styles.sub_txt}>
            Hey , Mark your tasks 🚀
        </Text>
    </View>
  )
}

export default Header