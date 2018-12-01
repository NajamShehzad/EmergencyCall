
import React from "react";
import { View, Text, Button, TextInput, Alert } from "react-native";
import { StackActions, NavigationActions } from 'react-navigation';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

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

                <FormLabel>Name</FormLabel>
                <FormInput onChangeText={(e) => { Alert.alert(e) }} />
                <FormValidationMessage>Error message</FormValidationMessage>
                <TextInput
                    style={{ height: 40, width: "80%", borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />
                <Button
                    title="Sign In"
                    color="#841584"
                    onPress={() => { Alert.alert(this.state.text) }} />

            </View>
        );
    }
}