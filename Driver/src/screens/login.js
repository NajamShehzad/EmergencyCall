import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native';
import { TextInput } from 'react-native';
import Global from './../components/global';
import Styles from './../components/Styles';
export default class Home extends React.Component {
    state={
        email:"",
        password:""
    }


    onLogin = () => {
        // const {email, password} = this.state;
        // if(email.length>5 && password.length>3){
            // Global.LoginHandler(email, password).then(()=>{
                //this.props.navigation.navigate('Home');
                // console.log("Added Email in Object of in Async");
            // }).catch(()=>{
                // console.log("Error While Adding Email in Object of in Async");
            // });
        // }else{
        //     alert("Please Write Proper Email And Password");
        // }

        //Dummy
            this.props.navigation.navigate('Home');
        //Dummy
    }
    render() {
        return (
            <View style={Styles.container}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(email) => this.setState({ email })}
                    keyboardType="email-address"
                    value={this.state.email}
                />
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                    secureTextEntry={true}
                />
                <Button
                    onPress={this.onLogin}
                    title="Login"
                    color="#ce0e00"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}