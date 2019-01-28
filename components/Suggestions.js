import React from "react";
import { connect } from "react-redux";
import { StyleSheet, View, Text } from "react-native";
import SuggestionCard from "./SuggestionCard";
import data from "./../data";

class Suggestions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Search history</Text>
          {this.props.location ? (
            <SuggestionCard
              icon="gps_fixed"
              title="Current location"
              subtitle={`lat: ${this.props.location.coords.latitude}, long: ${this.props.location.coords.longitude}`}
              value="Current location"
            />
          ) : null}

          {this.props.history
            ? this.props.history.map((item, index) => {
                return (
                  <SuggestionCard key={index} customStyle={styles.history} icon="history" title={item} value={item} />
                );
              })
            : null}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  location: state.location.location,
  history: state.search.history
});

export default connect(mapStateToProps)(Suggestions);

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
  history: {
    paddingVertical: 16
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 2
  }
});
