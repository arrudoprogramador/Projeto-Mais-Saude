import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  // CONTAINER PRINCIPAL
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  // CABEÇALHO COM GRADIENTE SUAVE
  cabecalho: {
    paddingTop: Platform.OS === 'ios' ? 15 : 40,
    paddingBottom: 5,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    shadowColor: '#4C9BE5',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 7,
  },

  // BOTÃO DEBUG DISCRETO
  debugButton: {
    marginTop: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },

  debugButtonText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '500',
    opacity: 0.9,
  },

  // CONTEÚDO PRINCIPAL
  content: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 60,
    paddingBottom: 30,
  },

  // TÍTULO ELEGANTE
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 45,
    textAlign: 'center',
    letterSpacing: -0.3,
  },

  // INPUTS MODERNOS
  input: {
    backgroundColor: '#FFFFFF',
    padding: Platform.OS === 'ios' ? 20 : 18,
    borderRadius: 14,
    marginBottom: 18,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    fontSize: 16,
    color: '#1E293B',
    fontWeight: '400',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 2,
  },

  // BOTÕES PRINCIPAIS
  buttons: {
    paddingHorizontal: 32,
    paddingBottom: Platform.OS === 'ios' ? 50 : 40,
    paddingTop: 20,
  },

  button: {
    backgroundColor: '#4C9BE5',
    padding: 20,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 25,
    shadowColor: '#4C9BE5',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 8,
  },

  buttonDisabled: {
    backgroundColor: '#93C5FD',
    shadowOpacity: 0.1,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 0.3,
  },

  // LINK SECUNDÁRIO
  linkButton: {
    alignItems: 'center',
    padding: 15,
  },

  linkButtonText: {
    color: '#64748B',
    fontSize: 15,
    fontWeight: '500',
  },

  linkText: {
    color: '#4C9BE5',
    fontWeight: '600',
  },

  // MODAL PROFISSIONAL
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingHorizontal: 20,
  },

  modalContent: {
    width: '100%',
    maxWidth: 320,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 28,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 15,
  },

  modalText: {
    fontSize: 16,
    marginBottom: 28,
    textAlign: 'center',
    lineHeight: 24,
    color: '#374151',
    fontWeight: '400',
  },

  modalButton: {
    backgroundColor: '#4C9BE5',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
    minWidth: 120,
    shadowColor: '#4C9BE5',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },

  modalButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: 0.3,
  },

  // ESTADOS DE FOCO (para melhor acessibilidade)
  inputFocused: {
    borderColor: '#4C9BE5',
    backgroundColor: '#FFFFFF',
    shadowOpacity: 0.1,
    transform: [{ scale: 1.02 }],
  },

  buttonPressed: {
    transform: [{ scale: 0.98 }],
    shadowOpacity: 0.2,
  },

  // PLACEHOLDER COLOR
  placeholderTextColor: '#94A3B8',
});
