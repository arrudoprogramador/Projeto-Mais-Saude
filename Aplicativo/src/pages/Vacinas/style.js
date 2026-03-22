import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
    padding: 20,
    flex: 1,
    alignItems: "center",
    width: "100%",
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  vacinasContainer: {
    maxHeight: 600,
    width: 120,
    padding: 10,
    
  },
  flatListContainer: {
    width:'100%', // Garante que o FlatList ocupe toda a tela
    maxWidth:200,
    paddingHorizontal: 10, // Espaçamento lateral
  },
  card: {
    width: 300, // Garante que o card ocupe toda a largura disponível
    padding: 10, // Adiciona padding para dar espaçamento interno
    marginBottom: 10, // Espaço entre os cards
    backgroundColor: '#fff', // Cor de fundo do card
    borderRadius: 8, // Bordas arredondadas
    shadowColor: '#000', // Sombras para dar profundidade
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // Sombra no Android
    
  },
  cardHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#3498db',
    textAlign:'center'
  },
  cardBody: {
    marginVertical: 10,
    
  },
  bold: {
    fontWeight: 'bold',
  },
  cardButtons: {
    flexDirection: 'row', // Alinha os botões na horizontal
    justifyContent: 'center', // Distribui os botões igualmente
    gap:30,
    padding:10
  },

  addButton: {
    backgroundColor: "#2ac982",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    marginBottom:50,
    justifyContent: 'center'
  },

  buttomBlue: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 8,
  },

  buttomRed: {
    backgroundColor: '#FF0000',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 8,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },

  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10,
  },

  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
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

      contentFooter: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
