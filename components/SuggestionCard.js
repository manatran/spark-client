import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "./Icon";

export default class SuggestionCard extends React.Component {
  constructor(props) {
    super(props);
  }

  onPress() {
    console.log(this.props.title);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.onPress.bind(this)}>
        <View style={styles.container}>
          <Icon icon={this.props.icon} style={styles.icon} />
          <View style={{ flex: 1 }}>
            {/* Title */}
            {this.props.title ? (
              <Text style={styles.title}>{this.props.title}</Text>
            ) : null}
            {/* Subtitle */}
            {this.props.subtitle ? (
              <Text style={styles.subtitle}>{this.props.subtitle}</Text>
            ) : null}
          </View>
          {this.props.button ? (
            <Icon icon="directions" style={styles.button} />
          ) : null}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0"
  },
  icon: {
    color: "#A1A1A1",
    marginRight: 16,
    fontSize: 20
  },
  button: {
    padding: 8,
    color: "white",
    borderRadius: 50,
    fontSize: 18,
    backgroundColor: "#61D0E1"
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
