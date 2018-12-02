


//     onLogin = () => {
//         // const {email, password} = this.state;
//         // if(email.length>5 && password.length>3){
//         // Global.LoginHandler(email, password).then(()=>{
//         //this.props.navigation.navigate('Home');
//         // console.log("Added Email in Object of in Async");
//         // }).catch(()=>{
//         // console.log("Error While Adding Email in Object of in Async");
//         // });
//         // }else{
//         //     alert("Please Write Proper Email And Password");
//         // }

//         //Dummy
//         this.props.navigation.navigate('Home');
//         //Dummy
//     }
// <View style={Styles.container}>
// <TextInput
//     style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
//     onChangeText={(email) => this.setState({ email })}
//     keyboardType="email-address"
//     value={this.state.email}
// />
// <TextInput
//     style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
//     onChangeText={(password) => this.setState({ password })}
//     value={this.state.password}
//     secureTextEntry={true}
// />
// <Button
//     onPress={this.onLogin}
//     title="Login"
//     color="#ce0e00"
//     accessibilityLabel="Learn more about this purple button"
// />
// </View>




import React from "react";
import { View, Text, Image, TextInput, Alert, StyleSheet, Dimensions } from "react-native";
import { Button } from 'react-native-elements';


export default class Login extends React.Component {

    state = {
        email: "",
        password: ""
    }

    onLogin = () => {
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <View style={{ borderColor: 'blue', flex: 1, alignItems: "center", justifyContent: "center" }}>

                <View
                    style={{ flex: 1 }}
                >
                    <Image
                        style={{ height: 100, width: 130 }}
                        source={require('../../assets/abc.png')}
                    />
                    <Text
                        style={{ fontSize: 60, fontWeight: "bold", textAlign: "center", color: "#1b3815" }}
                    >
                        ERS
        </Text>

                </View>
                <View style={{ flex: 1 }}>
                    <TextInput
                        placeholder="Enter Your Name"
                        style={styles.loginInput}
                        onChangeText={(email) => this.setState({ email })}
                        keyboardType="email-address"
                        value={this.state.email}
                    />
                    <TextInput
                        placeholder="Enter Your Password"
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                        secureTextEntry={true}
                        style={styles.loginInput}
                    />

                    <Button
                        title="Sign In"
                        buttonStyle={styles.loginButton}
                        onPress={this.onLogin} />
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
        width: width * 0.8,
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
