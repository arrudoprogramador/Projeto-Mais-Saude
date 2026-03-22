import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      cabecalho: {
        backgroundColor: '#4C9BE5',
        width: '100%',
        height: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: '40%',
        borderBottomRightRadius: '40%',
        gap:10
      },

      content:{
        width:"100%",
      },

      text:{
        color:"#fff",
        fontSize:32,
        textAlign:'center',
        fontWeight:'bold',
        width:"100%"
      },

      textsub:{
        color:"#e9e9e9",
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold'

      },

      avatar:{
        width: 400,
        height: 400,
        marginLeft:"auto",
        marginRight:"auto"
      },


      buttons: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width:"100%",
        gap:20
      },

      button_azul:{
        backgroundColor: '#4C9BE5',
        width:"80%",
        height:40,
        borderRadius:10,
      },

      buttonTextAzul:{
        color:"#fff",
        textAlign:'center',
        fontSize:15,
        fontWeight:'bold',
        marginTop:'auto',
        marginBottom:'auto'
      },

      button_semiazul:{
        borderColor:"#4C9BE5",
        borderWidth:2,
        width:"80%",
        height:40,
        borderRadius:10,
      },

      buttonTextSemiAzul:{
        color:"#4C9BE5",
        textAlign:'center',
        fontSize:15,
        fontWeight:'bold',
        marginTop:'auto',
        marginBottom:'auto'
      }



});

