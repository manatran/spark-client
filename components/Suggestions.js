import React from "react";
import { StyleSheet, View } from "react-native";
import SuggestionCard from "./SuggestionCard";
import data from "./../data";

export default class Suggestions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        {data.map(item => (
          <SuggestionCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FBFBFB",
    paddingTop: 24,
    position: "relative",
    top: -24,
    borderRadius: 8
  }
});
