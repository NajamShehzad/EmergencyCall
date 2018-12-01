import { MapView as Map12, Notifications, Permissions, Location } from 'expo';
import React, { Component } from "react";
import MapView, { Circle } from 'react-native-maps'
import { StyleSheet, Text, View } from 'react-native';



export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationResult: null,
            location: { coords: { latitude: 24.926294, longitude: 67.022095 } },
            marker: false
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
        this.setState({ locationResult: JSON.stringify(location), location, marker: true });
    };

    setMarkers() {
        return (
            < Circle
                draggable
                center={this.state.location.coords}
                title={"Current Location"}
                radius={100}
                strokeColor="#ffffff"
                fillColor="#e6f9ff"
                strokeWidth={2}
            >
            </ Circle>
        )
    }

    render() {
        const { location, marker } = this.state;
        console.log(Map12);
        return (
            <MapView
                style={{ flex: 1 }}
                region={{ latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
            >
                {
                    marker ?
                        this.setMarkers() :
                        < Circle
                            center={this.state.location.coords}
                            title={"Current Location"}
                            radius={100}
                            strokeColor="#4dd2ff"
                            fillColor="#e6f9ff"
                            strokeWidth={1}
                            zIndex={0}
                        >
                        </ Circle>
                }
            </MapView>
        )
    }
}