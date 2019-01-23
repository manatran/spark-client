import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Slider,
  Switch,
  Picker
} from "react-native";
import { connect } from "react-redux";

export default class OptionsBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      preference: "cheap",
      center: false,
      distance: 350,
      locations: [
        {
          title: "Home",
          location: "Oude Bruggestraat 33, Wingene"
        },
        {
          title: "Work",
          location: "Industrieweg 232, Mariakerke"
        }
      ],
      forecast: true,
      quick: true
    };
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.body}
        automaticallyAdjustContentInsets={false}
        contentInset={{ top: 0, bottom: 50 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Search Card */}
        <View style={styles.card}>
          <Text style={styles.subtitle}>Search</Text>
          <View style={styles.toggleContainer}>
            <Text style={styles.text}>Parking preference</Text>
            <Picker
              selectedValue={this.state.preference}
              style={{ height: 50, width: 110 }}
              onValueChange={val => {
                this.setState({ preference: val })
              }}
            >
              <Picker.Item label="Cheap" value="cheap" />
              <Picker.Item label="Close" value="close" />
            </Picker>
          </View>
          <View style={styles.toggleContainer}>
            <View>
              <Text style={styles.text}>Avoid city center</Text>
              <Text style={styles.light}>Park &amp; Ride with public transportation</Text>
            </View>
            <Switch
              value={this.state.center}
              onValueChange={val => {
                this.setState({ center: val });
              }}
            />
          </View>
          <View style={styles.toggleContainer}>
            <Text style={styles.text}>
              Maximum walking distance from destination
            </Text>
            <Text style={styles.light}>{this.state.distance}m</Text>
          </View>
          <Slider
            thumbTintColor="#61D0E1"
            minimumTrackTintColor="#61D0E1"
            maximumTrackTintColor="#61D0E1"
            step={50}
            value={this.state.distance}
            minimumValue={50}
            maximumValue={1500}
            onValueChange={val => {
              this.setState({ distance: val });
            }}
          />
        </View>

        {/* Personal data Card */}
        <View style={styles.card}>
          <Text style={styles.subtitle}>Custom locations</Text>
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
              onValueChange={val => {
                this.setState({ forecast: val });
              }}
            />
          </View>
          <View style={styles.toggleContainer}>
            <Text style={styles.text}>Display quick access</Text>
            <Switch
              value={this.state.quick}
              onValueChange={val => {
                this.setState({ quick: val });
              }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    paddingBottom: 20,
    flexGrow: 1
  },
  subtitle: {
    fontWeight: "bold",
    color: "#303030"
  },
  light: {
    fontSize: 12,
    color: "#A1A1A1"
  },
  card: {
    padding: 16,
    borderTopWidth: 2,
    borderTopColor: "#EEEEEE"
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 4
  },
  text: {
    color: "#737373"
  }
});
