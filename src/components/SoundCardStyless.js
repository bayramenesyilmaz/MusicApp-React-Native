import { StyleSheet } from "react-native";

export default styless = StyleSheet.create({
        container:{
            backgroundColor:"white",
            flex:1,
            flexDirection:"row",
            padding:10,
            alignItems:"center"
        },
        image:{
            width:100,
            height:100,
            borderRadius:50,
        },
        container_info:{
            padding:10,
            flex:1
        },
        title:{
            fontSize:27,
            fontWeight:"bold",
            color:"black"
        },
        container_album:{
            flexDirection:"row",
            flex:1
        },
        artist:{
            fontSize:15,
            marginRight:15,
            color:"black"
        },
        year:{
            fontSize:12,
            fontWeight:"bold",
            color:"gray"
        },
        redbox:{
            borderWidth:1,
            borderColor:"red",
            padding:2,
            borderRadius:5
        },
        redTitle:{
            color:"red"
        },
        container_bottom:{
            flexDirection:"row"
        },
        album:{
            padding:4,
            color:"orange",
            borderRadius:10,
            fontWeight:"bold"
        }

})