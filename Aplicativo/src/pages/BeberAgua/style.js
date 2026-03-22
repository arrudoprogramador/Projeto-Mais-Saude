import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Azul clarinho de fundo
    padding: 20,
    alignItems: 'center',
  },
  
  title: {
    fontSize: 30,
    color: '#1E90FF',
    fontWeight: 'bold',
    marginBottom: 40, // Aumentado
    marginTop: 10, // Aumentado
    textAlign: 'center',
  },
  
  
  inputContainer: {
    marginBottom: 20,
    width: '100%',
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#1e90ff',
    borderRadius: 10,
    padding: 15,
    fontSize: 18,
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#fff',
  },

  statsContainer: {
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width:'100%',
    gap:10
  },
  
  sla: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Os itens ficam centralizados na direção horizontal
  },  

  text: {
    fontSize: 20,
    color: '#1e90ff',
    fontWeight:'bold',
    lineHeight: 20,  // Adicionar lineHeight para garantir que os textos fiquem com altura de linha consistente

  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dedede', // fundo suave avermelhado
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 14,
    marginTop: 50, // afastamento do item acima
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3, // para sombra no Android
    gap: 8, // espaçamento entre ícone e texto (opcional se usar React Native >= 0.71)
  },
  
  text_reiniciar: {
    fontSize: 17,
    marginLeft: 6,
    color: '#040f47', // vermelho mais elegante
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  
  

  img_reiniciar:{
    width:40,
    height:40
  },  

  cabeçalho:{
    width:'88%'
  },

  text_historico:{
    textAlign:'center',
    fontSize: 20,
    color:'#444'
  },

  box1:{
    width:'90%',
    height:'50vh',
    backgroundColor: '#f9f9f9', 
    borderRadius:15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    padding:20

  },

  resetButton: {
    backgroundColor: '#ff6347', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  feedback: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1E90FF',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 15,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  modalButton: {
    backgroundColor: '#5BB0FE',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
  },



  progressBarContainer: {
    height: 20,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },

  progressBarFill: {
    height: '100%',
    backgroundColor: '#87CEFA',
    borderRadius: 10,
  },

  progressText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },

  redondo: {
    width: 250,
    height: 250,
    backgroundColor: '#f9f9f9',
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  marginBottom: 40, // Aumentado para dar espaço pro botão

  },

  redondoBackground:{
    width:'100%'
  },

  circularText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#4C9BE5',

  },

  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginTop: 10,
  },
  
  card: {
    backgroundColor: '#4C9BE5',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    minWidth: 90,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  cardText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
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

    contentFooter: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
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
  

});
