import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native';

export default class Home extends React.Component {

  getRoute = () => {
    this.props.navigation.navigate('Route');
  }
  render() {

    return (
      <View>
        <Button
          onPress={this.getRoute}
          title="Home"
          color="#ce0e00"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

