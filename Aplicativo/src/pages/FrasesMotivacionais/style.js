import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff', // Azul suave
    marginBottom: 20,
    textAlign: 'center',
  },
  frase: {
    fontSize: 18,
    color: '#333',  // Cor de texto mais suave
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 30,
    color:'#fff'

  },
  botao: {
    backgroundColor: '#tranparent', // Cor quente de laranja
    borderWidth: 2,        // Largura da borda
    borderColor: '#fff',   // Cor da borda (branca, no caso)    
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,  // Efeito de sombra para Android
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  lista: {
    width: '100%',
    marginBottom: 30,  // Espaço entre as frases e o botão
  },
  card: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3,  // Efeito de sombra para Android
    width: '100%',
  },

  
  footer: {
    height: 60,
    backgroundColor: "#4C9BE5",
    borderTopWidth: 1,
    borderColor: "#357ABD",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },

  content: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },

  footerIcon: {
    width: 28,
    height: 28,
    tintColor: "#fff",
  },

  scrollContent: {
    padding: 16,
    paddingBottom: 80, // espaço para o footer
    alignItems: "center",
    marginTop: 170, // Espaçamento para compensar o cabeçalho fixo
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
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
