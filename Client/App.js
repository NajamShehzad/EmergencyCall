import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Phone from './src/firebase/firebasePhone';
import firebase from 'firebase';
import Navigation from './navigation/Navigation';
import MapView from './components/map/map';




export default class App extends React.Component {
  render() {
    return (
    <Navigation />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
