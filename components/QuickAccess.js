import React from "react";
import { connect } from "react-redux";
import { StyleSheet, View, Text } from "react-native";
import SuggestionCard from "./SuggestionCard";
import data from "./../data";

class QuickAccess extends React.Component {
  render() {
    if (!this.props.results && this.props.preferences.quick && this.props.focus) {
      return (
        <View style={styles.container}>
          <View style={styles.card}>
            {this.props.focus ? <Text style={styles.title}>Custom Locations</Text> : null}
            {this.props.location ? (
              <SuggestionCard icon="gps_fixed" title="Current location" value="Current location" button roundTop />
            ) : null}

            <SuggestionCard
              roundTop={this.props.location ? false : true}
              icon={data[1].icon}
              title={data[1].title}
              subtitle={data[1].subtitle}
              value={data[1].subtitle}
              button
            />

            <SuggestionCard
              icon={data[2].icon}
              title={data[2].title}
              subtitle={data[2].subtitle}
              value={data[2].subtitle}
              button
              roundBottom
            />
          </View>
        </View>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  location: state.location.location,
  results: state.search.results,
  preferences: state.option.displayPreferences,
  focus: state.search.focus
});

export default connect(mapStateToProps)(QuickAccess);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    marginTop: 16
  },
  title: {
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 10
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 2
  }
});
