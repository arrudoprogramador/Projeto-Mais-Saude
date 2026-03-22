import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 60) / 2;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdfdfd",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#222",
    textAlign: "center",
  },

  list: {
    alignItems: "center",
    width: "100%",
    paddingBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    width: CARD_WIDTH,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    borderWidth: 0.5,
    borderColor: "#ddd",
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginBottom: 12,
  },

  text: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    color: "#333",
  },

  text_frutas: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    paddingBottom: 20,
    color: "#333",
  },

  frutas: {
    width: "100%",
    alignItems: "center",
  },

searchInput: {
  backgroundColor: "#fff",
  width: "100%",
  maxWidth: 340,
  borderRadius: 25,
  paddingHorizontal: 20,
  paddingVertical: 10,
  marginTop: 10,
  marginBottom: 20,
  fontSize: 16,
  elevation: 2,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 3,
  borderWidth: 1,
  borderColor: "#ddd",
},

// Botão de busca com design aprimorado
searchButton: {
  backgroundColor: "#3498db", // Cor de fundo
  paddingVertical: 14,
  paddingHorizontal: 25,
  borderRadius: 30,
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  maxWidth: 340,
  marginTop: 15,
  elevation: 5, // Sombra sutil
  shadowColor: "#007bb5",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.15,
  shadowRadius: 8,
  borderWidth: 0, // Remove borda para foco no design limpo
  transition: "all 0.3s ease-in-out", // Transição suave
},

searchButtonText: {
  color: "#fff",
  fontSize: 18,
  fontWeight: "600",
  textAlign: "center",
  textTransform: "uppercase",
},

// Efeito de hover/pressionamento no botão
searchButtonPressed: {
  backgroundColor: "#2980b9", // Cor de fundo mais escura quando pressionado
  shadowOpacity: 0.3, // Aumenta o efeito de sombra ao pressionar
},


  buttonContainer: {
    marginTop: 10,
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
  },

  // Modal
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },

  modalContent: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 15,
    width: "85%",
    alignItems: "center",
  },

  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 15,
    textAlign: "center",
  },

  modalText: {
    fontSize: 17,
    color: "#444",
    marginBottom: 10,
    textAlign: "center",
  },

  modalImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 15,
  },

  modalButton: {
    backgroundColor: "#3498db",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },

  modalButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
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
