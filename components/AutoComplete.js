import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export class Autocomplete extends Component {
  render() {
    return (
      <View>
        <GooglePlacesAutocomplete
          placeholder="Search here..."
          minLength={2}
          autoFocus={false}
          returnKeyType={"default"}
          fetchDetails={false}
          onPress={data => {
            console.log(data);
          }}
          styles={styles}
          currentLocation={false}
          query={{
            key: "AIzaSyC6kAXLVq0TKXNOo1igxuya0ySiz6jiN_8",
            language: "nl",
            types: "(regions)"
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInputContainer: {
    zIndex: 10,
    position: "relative",
    backgroundColor: "white",
    borderRadius: 50,
    elevation: 10,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#FAFAFA",
    borderBottomWidth: 1
  },
  textInput: {
    marginLeft: 0,
    marginRight: 0,
    height: 38,
    color: "#5d5d5d",
    fontSize: 16
  },
  predefinedPlacesDescription: {
    color: "#1faadb"
  }
});

export default Autocomplete;
