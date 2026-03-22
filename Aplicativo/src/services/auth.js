// src/services/auth.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = async () => {
  return await AsyncStorage.getItem('authToken');
};

export const isAuthenticated = async () => {
  const token = await getToken();
  return !!token;
};
