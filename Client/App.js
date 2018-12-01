import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Phone from './src/firebase/firebasePhone';
import firebase from 'firebase';
import Navigation from './navigation/Navigation';
import { Permissions, Location } from 'expo';




export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text>
          SOme text here
        </Text>
      </View>
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
