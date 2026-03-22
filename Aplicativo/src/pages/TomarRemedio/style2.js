import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
   
    paddingTop: 50,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#2175b5",
  },

  listContainer: {
    paddingBottom: 20,
  },

  doseItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  doseInfo: {
    flex: 1,
  },

  doseNome: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },

  doseHorario: {
    fontSize: 16,
    color: "#555",
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
