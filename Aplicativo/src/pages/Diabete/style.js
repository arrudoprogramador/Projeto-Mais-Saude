import { StyleSheet } from "react-native";

export default StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
    padding: 20,
  },
  conteudo: {
    marginBottom: 20,
  },

  inputContainer:{
    alignItems: 'center',

  },

  input1: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    height: 65,
    width: "65%",
    fontSize: 17.5,
    borderWidth: 1,
    borderColor: "#d1d5db",
    marginBottom: 10,
    textAlign: 'center'
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#d1d5db",
    marginBottom: 10,
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    flex: 1,
    backgroundColor: "#3498db",
    paddingVertical: 14,
    borderRadius: 12,
    marginHorizontal: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  resultado: {
    backgroundColor: "#e0f2fe",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    marginBottom: 40,
  },

  resultText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#0284c7",
    marginBottom: 10,
    textAlign: "center",
  },
  imageResult: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginTop: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    width: "85%",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    color: "#111827",
    textAlign: "center",
  },



  card: {
    marginTop: 12,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    borderWidth: 1,
    borderColor: "#e5e7eb", 
  },
  
  cardGroup: {
    alignItems: "center", // Alinhamento à esquerda
    marginRight: 15,
    flex: 1,
    justifyContent: "center", // Melhor espaçamento entre os elementos
    padding: 10,
  },
  
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f2937", // Cor mais forte para os títulos
    marginBottom: 5, // Aumentando o espaçamento para o texto ficar bem abaixo do título
  },
  
  cardText: {
    fontSize: 14,
    color: "#4b5563", // Cinza suave para o texto
    lineHeight: 20, // Para melhorar a legibilidade do texto
  },
  
  cardImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginLeft: 10, // Um pouco de espaçamento da imagem em relação ao texto
    borderRadius: 25, // Imagem circular para um look moderno
  },
  

  resultado: {
    marginTop: 20,
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 10,
  },
  resultText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff", // Texto branco para melhor contraste
  },
  imageResult: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  
  
  footer1: {
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

  content1: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },

  footerIcon1: {
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


});

