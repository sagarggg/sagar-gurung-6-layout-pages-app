import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Routes } from './Routes';

export default function App() {
  return (
   <Routes></Routes>
  );
};
