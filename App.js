import React from "react";
import { StatusBar, View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import Map from "./components/Map";
import SearchBar from "./components/SearchBar";
import Forecast from "./components/Forecast";
import QuickAccess from "./components/QuickAccess";
import Options from "./components/Options";
import Results from "./components/Results";

export default class App extends React.Component {
  
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar hidden={true} />
          <Map />
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
