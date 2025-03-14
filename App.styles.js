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
        width:'100%',
        height:70,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderTopEndRadius:20,
        backgroundColor:'white',
        borderTopStartRadius:20,
        position:'absolute',
        bottom:0,
        paddingLeft:70,
    },
    tab:{
        alignItems:'center',
        justifyContent:'center'
    }
})