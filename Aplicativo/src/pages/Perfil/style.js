import { StyleSheet } from "react-native";


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 24,
    paddingTop: 48,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 32,
    textAlign: 'center',
    fontFamily: 'System', // ou 'Roboto-Medium' para Android
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginBottom: 32,
    borderWidth: 3,
    borderColor: '#3498db',
  },
  noImageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 32,
    borderWidth: 3,
    borderColor: '#bdc3c7',
  },
  noImageText: {
    color: '#7f8c8d',
    fontSize: 14,
    textAlign: 'center',
  },
  infoContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoLabel: {
    color: '#7f8c8d',
    fontSize: 14,
    marginBottom: 4,
    fontWeight: '500',
  },
  infoValue: {
    color: '#2c3e50',
    fontSize: 16,
    marginBottom: 16,
    fontWeight: '600',
  },
  logoutButton: {
    backgroundColor: '#3498db',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#2980b9',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  errorText: {
    color: '#EF4444',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  
  modalContent: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    
  },

  imageModal:{
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginBottom: 0,
    borderWidth: 3,
    borderColor: '#3498db',
  },
  
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  
  
  imagePreviewContainer: {
    alignItems: 'center',
    marginBottom: 1,
    textAlign: 'center',
    justifyContent: 'center',
  },
  
  imagePreview: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 0,
    borderWidth: 2,
    borderColor: '#e1e1e1',
  },
  
  changeImageButton: {
    padding: 8,
    marginBottom: 21,
    alignItems: 'center',
  },
  
  changeImageButtonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
  },
  
  imageButton: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 12,
    width: 100,
    height: 100,
  },
  
  imageButtonText: {
    color: '#555',
    fontSize: 14,
    fontWeight: '500',
    
  },
  
  // Rest of your styles...
  inputField: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 14,
    backgroundColor: '#f9f9f9',
  },

  inputFieldContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: 12,
    borderColor: '#ddd',
    marginBottom: 12,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 14,
    height: 50,
    backgroundColor: '#f9f9f9',

  },
    
  saveButton: {
    backgroundColor: '#4a90e2',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 12,
  },
  
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  
  cancelButton: {
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  
  cancelButtonText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '500',
  },

});
