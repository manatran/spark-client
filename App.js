import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MapView } from 'expo';
import SearchBar from './components/searchbar';

export default class App extends React.Component {
  render() {
    return (
      <>
      <StatusBar hidden={true} />
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 51.0534578,
            longitude: 3.7202534,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
        </MapView>
        
        <SearchBar />
      </>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  }
});
