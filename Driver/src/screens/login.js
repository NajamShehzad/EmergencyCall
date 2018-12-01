import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native';
import { TextInput } from 'react-native';

export default class Home extends React.Component {
    state={
        text:"",
        password:""
    }
    onLogin = () => {
        console.warn(this.props)
        // this.props.navigation.navigate("Home")
    }
    render() {
        return (
            <View>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ text })}
                    keyboardType="email-address"
                    value={this.state.text}
                />
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                    secureTextEntry={true}
                />
                <Button
                    onPress={()=>{onLogin}}
                    title="Login"
                    color="#ce0e00"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}