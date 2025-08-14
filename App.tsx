/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-map-clustering';
// import MapView from '@allisonadam81/react-native-super-clusters';
// import MapView, { Marker } from 'react-native-maps';
import { Marker } from 'react-native-maps';

function getRandomLatitude(min = 40, max = 48) {
  return Math.random() * (max - min) + min;
}

function getRandomLongitude(min = -95, max = -75) {
  return Math.random() * (max - min) + min;
}

const INITIAL_REGION = {
  latitude: 40,
  longitude: -95,
  latitudeDelta: 8,
  longitudeDelta: 20,
};

function App(): React.JSX.Element {
  const _generateMarkers = (count: number) => {
    const markers = [];

    for (let i = 0; i < count; i++) {
      markers.push(
        <Marker
          key={i}
          coordinate={{
            latitude: getRandomLatitude(),
            longitude: getRandomLongitude(),
          }}
        >
          <View style={styles.customMarker}>
            <Text style={styles.bold}>{i}</Text>
          </View>
        </Marker>
      );
    }

    return markers;
  };

  return (
    <MapView initialRegion={INITIAL_REGION} style={styles.map}>
      {_generateMarkers(50)}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  customMarker: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ca5cdd",
    height: 30,
    width: 30,
    borderRadius: 30,
  },
  bold: {
    fontWeight: 800,
  },
});

export default App;
