import React from "react";
import { StyleSheet, Text, View, TouchableHighlight, Slider, Switch, ScrollView } from "react-native";

export default class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      preference: false,
      center: false,
      distance: 350,
      forecast: true,
      quick: true
    };
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <View style={[styles.container, this.state.open ? styles.open : null]}>
        <View style={[styles.options, styles.roundTop, this.state.open ? styles.elevated : null]}>
          {/* Header */}
          <TouchableHighlight style={styles.roundTop} onPress={this.toggleOpen.bind(this)}>
            <View style={[styles.roundTop, styles.header]}>
              <View style={styles.drag} />
              <Text style={styles.title}>{'options'.toUpperCase()}</Text>
            </View>
          </TouchableHighlight>

          {/* Body */}
          <ScrollView style={styles.body}>
            {/* Search Card */}
            <View style={styles.card}>
              <Text style={styles.subtitle}>Search</Text>
              <View style={styles.toggleContainer}>
                <Text style={styles.text}>Parking preference</Text>
                <Switch
                  value={this.state.preference}
                  onValueChange={(val) => {
                    this.setState({ preference: val })
                  }}
                />
              </View>
              <View style={styles.toggleContainer}>
                <View>
                  <Text style={styles.text}>Avoid city center</Text>
                  <Text style={styles.light}>Park &amp; Ride with public transportation</Text>
                </View>
                <Switch
                  value={this.state.center}
                  onValueChange={(val) => {
                    this.setState({ center: val })
                  }}
                />
              </View>
              <View style={styles.toggleContainer}>
                <Text style={styles.text}>Maximum walking distance from destination</Text>
                <Text style={styles.light}>{this.state.distance}m</Text>
              </View>
              <Slider
                thumbTintColor="#61D0E1"
                minimumTrackTintColor="#61D0E1"
                maximumTrackTintColor="#61D0E1"
                step={50}
                value={this.state.distance}
                minimumValue={0}
                maximumValue={1500}
                onValueChange={(val) => {
                  this.setState({ distance: val })
                }}
              />
            </View>

            {/* Personal data Card */}
            <View style={styles.card}>
              <Text style={styles.subtitle}>Personal data</Text>
              <View style={styles.toggleContainer}>
                <Text style={styles.text}>Cheeto</Text>
                <Switch />
              </View>
              <View style={styles.toggleContainer}>
                <Text style={styles.text}>Cheeto</Text>
                <Switch />
              </View>
            </View>

            {/* Homepage Card */}
            <View style={styles.card}>
              <Text style={styles.subtitle}>Homepage</Text>
              <View style={styles.toggleContainer}>
                <Text style={styles.text}>Display weather forecast</Text>
                <Switch
                  value={this.state.forecast}
                  onValueChange={(val) => {
                    this.setState({ forecast: val })
                  }}
                />
              </View>
              <View style={styles.toggleContainer}>
                <Text style={styles.text}>Display quick access</Text>
                <Switch
                  value={this.state.quick}
                  onValueChange={(val) => {
                    this.setState({ quick: val })
                  }}
                />
              </View>
            </View>

          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    bottom: -600,
    paddingHorizontal: 8,
  },
  open: {
    bottom: 0,
  },
  options: {
    elevation: 1,
    backgroundColor: "#FAFAFA",
    height: 650,
  },
  elevated: {
    elevation: 6
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
    fontWeight: 'bold'
  },
  subtitle: {
    fontWeight: 'bold',
    color: "#303030"
  },
  light: {
    fontSize: 12,
    color: "#A1A1A1"
  },
  card: {
    padding: 16,
    borderTopWidth: 2,
    borderTopColor: "#EEEEEE",
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  text: {
    color: "#737373"
  }
});
