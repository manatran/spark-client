import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "./Icon";

export default class SuggestionCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon icon="gps_fixed" style={styles.icon} />
        <View>
          <Text style={styles.title}>Hello</Text>
          <Text style={styles.subtitle}>Hello</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0"
  },
  icon: {
    color: "#A1A1A1",
    marginRight: 16,
    fontSize: 16
  },
  title: {
    fontWeight: "700",
    fontSize: 16,
    color: "#303030"
  },
  subtitle: {
    fontWeight: "300",
    fontSize: 14,
    color: "#303030"
  }
});
