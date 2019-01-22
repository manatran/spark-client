import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import { MapView } from "expo";
import SearchBar from "./components/SearchBar";
import Forecast from "./components/Forecast";
import QuickAccess from "./components/QuickAccess";
import Options from "./components/Options";
import Results from "./components/Results";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialRegion: {
        latitude: 51.0534578,
        longitude: 3.7202534,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar hidden={true} />
          <MapView style={styles.map} initialRegion={this.state.initialRegion} />
          <View style={{ zIndex: 1 }}>
            <SearchBar />
            <Forecast />
            <QuickAccess />
          </View>

          <Results />

          <Options />
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  }
});
