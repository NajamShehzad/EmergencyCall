import { MapView as Map12, Notifications, Permissions, Location } from 'expo';
import React, { Component } from "react";
import MapView, { Circle, Polyline } from 'react-native-maps'
import { StyleSheet, Text, View } from 'react-native';
//Your Api Here
import { api } from '../../Api/mapApi';
import MapViewDirections from 'react-native-maps-directions';
const origin = { latitude: 24.926294, longitude: 67.022095 };
const GOOGLE_MAPS_APIKEY = api;



export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationResult: null,
            location: { coords: { latitude: 24.926294, longitude: 67.022095 } },
            marker: false,
            routes: null,
            coords: null,
            origin: null,
            destination: { latitude: 24.946294, longitude: 67.032095 }
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
        console.log(location);
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
                fillColor="#3399ff"
                strokeWidth={2}
            >
            </ Circle>
        )
    }

    render() {
        const { location, marker } = this.state;
        console.log(" ====>>", location);
        return (
            <MapView
                showsUserLocation
                style={{ flex: 1 }}
                region={{ latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
            >
                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="lightblue"
                />
                {/* {
                    marker && this.setMarkers()
                } */}
                {/* {this.state.coords && <MapView.Polyline
                    coordinates={[
                        { latitude: 24.926294, longitude: 67.022095 },
                        ...this.state.coords,
                        { latitude: 24.813483, longitude: 67.073392 }
                    ]}
                />} */}
            </MapView>
        )
    }
}