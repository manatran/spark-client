import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import SuggestionCard from "./SuggestionCard";
import data from "./../data";
import { STYLES } from "./../config/";

export default class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: {}
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <SuggestionCard icon={data[0].icon} title={data[0].title} button />
          <SuggestionCard
            icon={data[1].icon}
            title={data[1].title}
            subtitle={data[1].subtitle}
            button
          />
          <SuggestionCard
            icon={data[2].icon}
            title={data[2].title}
            subtitle={data[2].subtitle}
            button
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    marginTop: 16
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 2
  }
});
