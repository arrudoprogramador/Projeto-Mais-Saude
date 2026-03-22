import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",  // Cor de fundo mais suave
    alignItems: "center",
  },

  cabecalho: {
    position: 'absolute', // Fixa o cabeçalho no topo
    top: 0,  // Garante que fique no topo da tela
    left: 0,
    right: 0,
    backgroundColor: '#4C9BE5',
    height: 150, // Defina a altura do cabeçalho fixo
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: '40%',
    borderBottomRightRadius: '40%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    zIndex: 10, // Garantir que o cabeçalho fique acima dos outros elementos
  },

  perfil: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#ccc',
    borderColor: '#fff', // Cor da borda
    borderWidth: 2,
  },

  item: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#e9e9e9",
    textAlign: 'start',
    width: '100%',
    flex: 1
  },

  text_title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "start",
    color: "#fff",
    width: '100%',
  },

  text: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#555",
    marginVertical: 5, // Distância superior e inferior
    paddingTop: 10,
  },

  list: {
    flexDirection: 'row', // Ajusta o layout dos botões para linha
    flexWrap: 'wrap', // Permite que os botões se movam para a linha seguinte
    justifyContent: 'center',
    marginTop: 10,
  },

  button: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15, // Borda mais suave para o botão
    margin: 10,
    width: 150, // Ajusta o tamanho do botão
    height: 150,
    elevation: 4, // Sombra mais suave
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    transition: 'transform 0.2s ease-in-out',  // Animação para suavizar o efeito ao pressionar
  },

  buttonText: {
    fontSize: 16,
    color: "#003366",  // Cor do texto mais vibrante
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,  // Ajusta a posição do texto dentro do botão
  },

  icon: {
    width: "70%",  // Ajusta a imagem dentro do botão
    height: "70%",
    resizeMode: "contain",  // Garante que a imagem se encaixe sem cortar
  },

  buttonPressed: {
    transform: [{ scale: 0.98 }], // Efeito de clique mais suave
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
