import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Fundo suave inspirado nas cores do logo
    alignItems: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,

  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000', // Cor combinando com o logo (ajuste conforme necessário)
    textAlign: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
  content: {
    marginBottom: 40,
    alignItems: 'center',
    paddingHorizontal: 20,
    display:"flex",
    flexDirection:"column"
  },
  description: {
    fontSize: 18,
    fontWeight: '400',
    color: '#555',
    textAlign: 'center',
    marginBottom: 15,
    lineHeight: 24, // Aumenta o espaçamento entre linhas para melhor leitura
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#3a6f8f', // Cor complementar ao logo
    textAlign: 'center',
    marginTop: 10,
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: '#3a6f8f', // Cor de fundo do botão
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 20,
    elevation: 5,  // Sombra sutil para efeito de profundidade
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  buttonText: {
    color: '#fff', // Cor do texto do botão
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
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

  content2: {
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
