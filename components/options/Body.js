import React from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, ScrollView, Slider, Switch, Picker } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { updateOptions, updatePreferences } from "../../actions/optionActions";
import Icon from "./../Icon";
import data from "./../../data";

class OptionsBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      options: {
        preference: "cheap",
        center: false,
        distance: 350
      },
      locations: [
        {
          title: "Home",
          location: data[1].subtitle
        },
        {
          title: "Work",
          location: data[2].subtitle
        }
      ],
      forecast: true,
      quick: true,
      items: [
        {
          label: "Cheap",
          value: "price"
        },
        {
          label: "Close",
          value: "distance"
        }
      ]
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(name, value) {
    switch (name) {
      case "preference":
      case "center":
      case "distance":
        let options = { ...this.state.options };

        options[name] = value;
        this.setState({ options });
        return this.props.updateOptions(this.state.options, this.props.input);
      case "quick":
      case "forecast":
        let preferences = { ...this.props.displayPreferences };

        preferences[name] = value;
        return this.props.updatePreferences(preferences);
    }
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.body}
        automaticallyAdjustContentInsets={false}
        contentInset={{ top: 0, bottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Search Card */}
        <View style={styles.card}>
          <Text style={styles.subtitle}>Search</Text>
          <View style={styles.toggleContainer}>
            <Text style={styles.text}>Parking preference</Text>
            <RNPickerSelect
              placeholder={{}}
              items={this.state.items}
              onValueChange={value => {
                this.onChange("preference", value);
              }}
              value={this.state.options.preference}
              hideIcon={false}
              style={pickerSelectStyles}
            />
          </View>
          <View style={styles.toggleContainer}>
            <View>
              <Text style={styles.text}>Avoid city center</Text>
              <Text style={styles.light}>Park &amp; Ride with public transportation</Text>
            </View>
            <Switch
              name="center"
              value={this.state.options.center}
              onValueChange={value => {
                this.onChange("center", value);
              }}
            />
          </View>
          <View style={styles.toggleContainer}>
            <Text style={styles.text}>Maximum walking distance from destination</Text>
            <Text style={styles.light}>{this.state.options.distance}m</Text>
          </View>
          <Slider
            thumbTintColor="#61D0E1"
            minimumTrackTintColor="#61D0E1"
            maximumTrackTintColor="#61D0E1"
            step={50}
            name="distance"
            value={this.state.options.distance}
            minimumValue={50}
            maximumValue={1500}
            onValueChange={value => {
              this.onChange("distance", value);
            }}
          />
        </View>

        {/* Personal data Card */}
        <View style={styles.card}>
          <Text style={styles.subtitle}>Custom locations</Text>
          <View style={styles.customContainer}>
            <Icon icon="home" style={styles.icon} />
            <View>
              <Text style={styles.locationTitle}>Home</Text>
              <Text style={styles.text}>{this.state.locations[0].location}</Text>
            </View>
          </View>
          <View style={styles.customContainer}>
            <Icon icon="work" style={styles.icon} />
            <View>
              <Text style={styles.locationTitle}>Work</Text>
              <Text style={styles.text}>{this.state.locations[1].location}</Text>
            </View>
          </View>
        </View>

        {/* Homepage Card */}
        <View style={styles.card}>
          <Text style={styles.subtitle}>Homepage</Text>
          <View style={styles.toggleContainer}>
            <Text style={styles.text}>Display weather forecast</Text>
            <Switch
              value={this.props.displayPreferences.forecast}
              onValueChange={value => {
                this.onChange("forecast", value);
              }}
            />
          </View>
          <View style={styles.toggleContainer}>
            <Text style={styles.text}>Display quick access</Text>
            <Switch
              value={this.props.displayPreferences.quick}
              onValueChange={value => {
                this.onChange("quick", value);
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
    paddingVertical: 10
  },
  text: {
    color: "#737373"
  },
  customContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8
  },
  icon: {
    fontSize: 20,
    paddingRight: 8,
    color: "#A1A1A1"
  },
  title: {
    fontWeight: "700",
    fontSize: 16,
    color: "#303030"
  },
  locationTitle: {
    fontWeight: "700",
    fontSize: 14,
    color: "#737373"
  }
});

const pickerSelectStyles = {
  icon: {
    borderTopWidth: 4,
    borderBottomWidth: 0,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    position: "absolute",
    top: 10
  },
  inputAndroid: {
    width: 150
  }
};

const mapStateToProps = state => ({
  input: state.search.input,
  displayPreferences: state.option.displayPreferences
});

export default connect(
  mapStateToProps,
  { updateOptions, updatePreferences }
)(OptionsBody);
