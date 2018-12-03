import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class Home extends React.Component {

  getRoute = () => {
    this.props.navigation.navigate('Route');
  }
  render() {

    return (
      <View style={{ borderColor: 'blue', flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          title="Driver"
          buttonStyle={styles.loginButton}
          onPress={() => { }} />
        <Button
          title="Get Route"
          buttonStyle={styles.loginButton}
          onPress={this.getRoute} />
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
  }, loginButton: {
    fontSize: 15,
    color: "#1b3815",
    // color="#ce0e00"
    // width: width*0.8,
    height: 50,
    backgroundColor: "#d83634",
    borderRadius: 27,
    // padding: "0 35px 0 35px",
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 0,
    marginRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 35,
    paddingRight: 35,
    // borderStyle: "none",
    maxWidth: 400,
    // maxWidth: 400,
  }
})