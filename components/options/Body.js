import React from "react";
import { StyleSheet, Text, View, ScrollView, Slider, Switch, Picker } from "react-native";
import { connect } from "react-redux";
import { updateOptions, updatePreferences } from "../../actions/optionActions";

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

    this.onChange = this.onChange.bind(this);
  }

  onPrefChange(name, pref) {
    let preferences = Object.assign({}, this.props.displayPreferences);

    preferences[name] = pref;
    this.props.updatePreferences(preferences);
  }

  onChange(name, value) {
    let optionsObj = Object.assign({}, this.state.options);

    optionsObj[name] = value;
    this.setState({ options: optionsObj });
    this.props.updateOptions(optionsObj, this.props.input);
  }

  render() {
    console.log(this.props.displayPreferences);

    return (
      <ScrollView
        contentContainerStyle={styles.body}
        automaticallyAdjustContentInsets={false}
        contentInset={{ top: 0, bottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Search Card */}
        <View style={styles.card}>
          <Text style={styles.subtitle}>Search</Text>
          <View style={styles.toggleContainer}>
            <Text style={styles.text}>Parking preference</Text>
            <Picker
              selectedValue={this.state.options.preference}
              style={{ height: 50, width: 110 }}
              name="preference"
              onValueChange={value => {
                this.onChange("preference", value);
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
            <Text style={styles.title}>Home</Text>
            <Text style={styles.subtitle}>Oude Bruggestraat 33, 8750 Wingene</Text>
          </View>
          <View style={styles.customContainer}>
            <Text style={styles.title}>Work</Text>
            <Text style={styles.subtitle}>Industrieweg 232, 9300 Mariakerke</Text>
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
                this.onPrefChange("forecast", value);
              }}
            />
          </View>
          <View style={styles.toggleContainer}>
            <Text style={styles.text}>Display quick access</Text>
            <Switch
              value={this.props.displayPreferences.quick}
              onValueChange={value => {
                this.onPrefChange("quick", value);
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
  },
  customContainer: {
    flexDirection: "column",
    paddingVertical: 8
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

const mapStateToProps = state => ({
  input: state.search.input,
  displayPreferences: state.option.displayPreferences
});

export default connect(
  mapStateToProps,
  { updateOptions, updatePreferences }
)(OptionsBody);
