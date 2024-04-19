import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card:{
        flexDirection:'row',
        width:'100%',
        height:80,
        backgroundColor:'#fff',
        borderRadius:10,
        elevation:4,
        alignItems:'center',
        justifyContent:'space-between',
        padding:20
    },
    check:{
        width:24,
        height:24
    },
    txt:{
        fontSize:20
    },
    strike:{
        textDecorationLine:'line-through',
        color:'grey'
    }
})