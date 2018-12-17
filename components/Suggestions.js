import React from "react";
import { StyleSheet, View, Text } from "react-native";
import SuggestionCard from "./SuggestionCard";

export default class Suggestions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBFBFB',
    paddingTop: 32,
    position: "relative",
    top: -24,
    borderRadius: 8
  }
});
