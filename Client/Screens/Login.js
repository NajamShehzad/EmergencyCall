
import React from "react";
import { View, Text,Image, TextInput, Alert,StyleSheet,Dimensions } from "react-native";
import { StackActions, NavigationActions } from 'react-navigation';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { Button } from 'react-native-elements';


export default class Login extends React.Component {

    state = {
        text: "",
    }
    //   navigate() {

    //     // this.props.navigation.navigate("Dashboard")
    //     const resetAction = StackActions.reset({
    //       index: 0,
    //       actions: [
    //         NavigationActions.navigate({ routeName: 'Dashboard' }),
    //       ],
    //     });
    //     this.props.navigation.dispatch(resetAction);
    //   }

    render() {
        return (
            <View style={{ borderColor: 'blue', flex: 1, alignItems: "center", justifyContent: "center" }}>

                {/* <FormLabel>Name</FormLabel>
                <FormInput onChangeText={(e) => { Alert.alert(e) }} />
                <FormValidationMessage>Error message</FormValidationMessage> */}
                <View
                style={{flex:1}}
                >
                <Image
        style={{height: 100,width: 130}}
          source={require('../assets/abc.png')}
        />
        <Text
        style={{fontSize: 60,fontWeight: "bold",textAlign: "center",color: "#1b3815"}}
        >
            ERS
        </Text>
        
        </View>
        <View style={{flex: 1}}>
                <TextInput
                    style={styles.loginInput}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder= "Enter Your Name"
                />
                <TextInput
                    style={styles.loginInput}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder= "Enter Your Name"
                />
                <Button
                    title="Sign In"
                    buttonStyle={styles.loginButton}
                    onPress={() => { Alert.alert(this.state.text) }} />
                    </View>

            </View>
        );
    }
}

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
loginInput: {
    fontSize: 15,
    color: "#1b3815",
    width: width*0.8,
    height: 50,
    backgroundColor: "#ebebeb",
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
    },
    loginButton: {
        fontSize: 15,
        color: "#1b3815",
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

  });
  