import { StyleSheet } from 'react-native';

export default StyleSheet.create({
container: {
  flex: 1,
  padding: 20,
  backgroundColor: '#fff',
  position: 'relative', // necessário para o footer absoluto funcionar corretamente
},

  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#666',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  paiImg:{
    marginLeft:"auto",
    marginRight:"auto"
  },

  img:{
    width:200,
    height:200
  },

  inputs: {
    marginBottom: 10,
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
    justifyContent:'center'

  },
  buttonText:{
    textAlign:'center',
    fontSize:16,
    fontWeight:'600',
    color: 'white',

  },


  tabela: {
  marginTop: 30,
  padding: 10,
  backgroundColor: '#f0f8ff',
  borderRadius: 10,
  elevation: 2,
},

tituloTabela: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 10,
  textAlign: 'center',
  color: '#333',
},

linha: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingVertical: 6,
  borderBottomWidth: 1,
  borderColor: '#ccc',
},

celulaTitulo: {
  flex: 1,
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#000',
},

celula: {
  flex: 1,
  textAlign: 'center',
  color: '#333',
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
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:'center',
  },

  text1: {
    fontSize: 18,
    fontWeight: 'bold',
  },

    border:{
    alignItems:'center',
    borderBottomColor: '#ccc',  // Cor da borda inferior
    borderBottomWidth: 1,       // Largura da borda
    borderBottomStyle: 'solid',  // Estilo da borda (opcional)  }
    width:'100%',
    padding: 2,
    marginBottom: 3,
  },

      linha: {
        flexDirection: "row", // Alinha ícone e texto horizontalmente
        alignItems: "center", // Mantém alinhamento vertical
        marginBottom: 8,
    },
    texto: {
        fontSize: 16,
        marginLeft: 10, // Espaço entre o Pressable e o texto
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

    modalFundo: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.5)',
  justifyContent: 'center',
  alignItems: 'center',
},

modalContainer: {
  width: '90%',
  display:"flex",
  justifyContent:'center',
  alignItems:'center',
  backgroundColor: '#fff',
  borderRadius: 10,
  padding: 20,
  elevation: 5,
},

fecharModal: {
  alignSelf: 'flex-end',
  marginBottom: 10,
},

fecharBotao: {
  backgroundColor: '#ff4d4d', // vermelho claro
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 8,
  alignSelf: 'flex-end',
  marginBottom: 10,
},

fecharTexto: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 16,
  textAlign: 'center',
},

paibtn:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:20
},

botaoAbrirModal: {
  backgroundColor: '#545eff',
  padding: 12,
  borderRadius: 8,
  marginTop: 20,
  alignItems: 'center',
},

botaoTexto: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 16,
},

resultadoContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 20,
  gap: 10,
  justifyContent: 'center',
},

bolinha: {
  width: 20,
  height: 20,
  borderRadius: 10,
},

resultadoTexto: {
  fontSize: 18,
  fontWeight: 'bold',
},
cardResultado: {
  backgroundColor: '#fff',
  padding: 16,
  borderRadius: 10,
  marginTop: 20,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
  alignSelf: 'center',
  width: '85%',
},

resultadoInterno: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
},

bolinha: {
  width: 20,
  height: 20,
  borderRadius: 10,
},

resultadoTexto: {
  fontSize: 18,
  fontWeight: 'bold',
},

// footer


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


