// src/components/GradientHeader.js
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function GradientHeader() {
  return (
    <LinearGradient
      colors={['#4C9BE5', '#87CEEB']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1 }}
    />
  );
}
