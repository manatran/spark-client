import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

export default class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <View style={[styles.container, this.state.open ? styles.open : null]}>
        <View style={[styles.options,styles.roundTop]}>
          <TouchableHighlight style={styles.roundTop} onPress={this.toggleOpen.bind(this)}>
            <View style={[styles.roundTop, styles.header]}>
              <View style={styles.drag} />
              <Text style={styles.title}>{'options'.toUpperCase()}</Text>
            </View>
          </TouchableHighlight>

          <View style={styles.body}>
            <View style={styles.card}>
              <Text>Hello world</Text>
            </View>
            <View style={styles.card}>
              <Text>Hello world</Text>
            </View>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    bottom: -108,
    paddingHorizontal: 8,
  },
  open: {
    bottom: 0
  },
  options: {
    elevation: 1,
    backgroundColor: "#FAFAFA",
    paddingBottom: 108,
  },
  roundTop: {
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
  },
  header: {
    backgroundColor: "white",
    padding: 16,
  },
  drag: {
    top: 6,
    right: '50%',
    position: "absolute",
    borderRadius: 2,
    width: 32,
    height: 3,
    backgroundColor: "#DEDEDE"
  },
  title: {
    color: "#737373",
    fontWeight: 'bold',
    fontSize: 14
  },
  card: {
    padding: 16,
    borderTopWidth: 3,
    borderTopColor: "#EEEEEE",
  }
});
