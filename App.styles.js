import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    wrapper:{
        width:'100%',
        height:'100%',
        backgroundColor:'#f6f6f6',
        justifyContent:"space-between",
        position:'relative'
    },
    header:{
        flex:1,
    },
    body:{
        flex:5,
        padding:10,
    },
    footer:{
        height:70,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:20,
        paddingRight:40,
        paddingLeft:40,
        borderTopEndRadius:20,
        backgroundColor:'white',
        borderTopStartRadius:20,
    },
    tab:{
        alignItems:'center',
        justifyContent:'center'
    }
})