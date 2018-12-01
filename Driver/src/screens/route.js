import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native';
import {   Permissions, Location } from 'expo';

export default class Route extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationResult: null,
      location: { coords: { latitude: 24.926294, longitude: 67.022095 } },
    };
  }

  componentDidMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
        location,
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ locationResult: JSON.stringify(location), location});
  };


  render() {
    const { location } = this.state;

    return (
      <View>
        <Text>{location.coords.longitude}</Text>
        <Text>{location.coords.latitude}</Text>
        <Button
          onPress={() => {}}
          title="Route"
          color="#ce0e00"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

