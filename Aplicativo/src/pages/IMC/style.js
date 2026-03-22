import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    gap:18
  },
  
  content:{
    width:'100%',
    height:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    paddingRight: 18,  // Padding à direita
    paddingBottom: 0, // Padding na parte inferior
    paddingLeft: 18,   // Padding à esquerda  
    gap:18


  },

  form: {
    height: 250,
    backgroundColor: '#fff',
    width: '91%',
    paddingTop: 15,
    paddingRight: 18,
    paddingBottom: 0,
    paddingLeft: 18,
    borderRadius: 18,
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5, // Para Android
    marginBottom: 2,
},

form1: {
    height: 450,
    width: '91%',
    backgroundColor: '#fff',
    paddingTop: 5,
    paddingRight: 18,
    paddingBottom: 0,
    paddingLeft: 18,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5, // Para Android
    gap: 10,
    
},

  title: {
    marginBottom: 18,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:'center',
  },

  text1: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  text2: {
    fontSize: 15,
    color:'#b8b8b8',
    marginBottom: 12,

  },

  border:{
    alignItems:'center',
    borderBottomColor: '#ccc',  
    borderBottomWidth: 1,       
    borderBottomStyle: 'solid',  
    width:'100%',
    padding: 2,
    marginBottom: 3,
  },
  
  text_input:{
    textAlign:'left',
    fontWeight:'600'
    
  },

  infoValue:{
    marginTop: 12,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems:'center',
    color: '#041436',
    fontSize: 18,
    marginBottom: 4,
    backgroundColor: '#f5f5f5',
    width: '100%',
    height: 33,
    borderRadius: 15,
    
  },

  inputs: {
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',

  },

  inputs2: {
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  
  },

  inputField: {
    height: 45,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: 80,
    paddingLeft: 10,
    width:"100%",
    borderRadius:18

  },

  button:{
    borderRadius:18,
    height:50,
    justifyContent:'center',
    marginBottom:2,
  },


  buttonText:{
    textAlign:'center',
    fontSize:16,
    fontWeight:'600',
    color: 'white',

  },
  
  conteudo: {
        padding: 20,
    },
    text1: {
        fontSize: 18,
        fontWeight: "bold",
        
    },
    linha: {
        flexDirection: "row", 
        alignItems: "center", 
        marginBottom: 8,
    },
    texto: {
        fontSize: 16,
        marginLeft: 10, 
    },
    p1: { width: 18, height: 18, backgroundColor: "#87CEEB", borderRadius: 15 },
    p2: { width: 18, height: 18, backgroundColor: "#32CD32", borderRadius: 15 },
    p3: { width: 18, height: 18, backgroundColor: "#FFD700", borderRadius: 15 },
    p4: { width: 18, height: 18, backgroundColor: "#FF8C00", borderRadius: 15 },
    p5: { width: 18, height: 18, backgroundColor: "#FF4500", borderRadius: 15 },
    p6: { width: 18, height: 18, backgroundColor: "#8B0000", borderRadius: 15 },

    result:{
      alignItems: 'center',
      
    },

    resultText: {
      fontSize: 23.3,
      color: '#faf5f5', // Cor suave para o texto
      fontFamily: 'Roboto', // Fonte elegante
      textShadowColor: '#000', // Sombra do texto
      textShadowOffset: { width: 0, height: 0.1 }, // Leve deslocamento para um efeito suave
      textShadowRadius: 0.5, // Raio menor para uma sombra mais sutil
    },

    
    
    resultCircle: {
      height: 90,
      width: 90,
      borderRadius: 45, // Círculo perfeito
      alignItems: 'center',
      justifyContent: 'center', 
      backgroundColor: '#FFFFFF', // Fundo branco suave
      
      borderColor: '#DDDDDD', // Cor de borda suave
    },
    
    
// footer

footer:{
  backgroundColor:'#2175b5',
  width:'100%',
  height:80,
  padding:20
  
},

content_footer:{
  flex:1,
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center',
},

footerIcon:{
  width:40,
  height:40
},



modalContainer: {
  flex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // fundo escurecido
  justifyContent: 'center',
  alignItems: 'center',
},

modalContent: {
  width: '85%',
  backgroundColor: '#fff',
  borderRadius: 20,
  padding: 25,
  alignItems: 'center',
  elevation: 10, // sombra Android
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
},

modalTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 20,
  color: '#333',
},

modalInput: {
  width: '100%',
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 12,
  padding: 12,
  marginBottom: 15,
  fontSize: 16,
  backgroundColor: '#F9F9F9',
},

modalButton: {
  width: '100%',
  padding: 14,
  borderRadius: 12,
  backgroundColor: '#4489c9', 
  marginTop: 10,
  alignItems: 'center',
},

modalButtonCancel: {
  backgroundColor: '#a3a2a2', 
},

modalButtonText: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#333',
},
  footer: {
  position: 'absolute',       // fixa no fundo
  bottom: 0,                  // posiciona na parte inferior da tela
  left: 0,
  right: 0,
  height: 60,                 // defina uma altura adequada
  backgroundColor: '#4C9BE5',
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  justifyContent: 'center',
  paddingHorizontal: 20,
  paddingVertical: 10,
  zIndex: 10,                 // garante que fique acima do conteúdo
},
  contentFooter: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  footerIcon: {
    width: 24,
    height: 24,
  },

listaResultados: {
  maxHeight: 200, // Altura máxima antes do scroll começar
  marginTop: 20,
  paddingHorizontal: 10,
},

});