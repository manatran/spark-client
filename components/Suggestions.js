import React from "react";
import { connect } from "react-redux";
import { StyleSheet, View } from "react-native";
import SuggestionCard from "./SuggestionCard";
import data from "./../data";

class Suggestions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.location ? (
          <SuggestionCard
            icon="gps_fixed"
            title="Current location"
            subtitle={`lat: ${this.props.location.coords.latitude}, long: ${this.props.location.coords.longitude}`}
            value={`${this.props.location.coords.latitude}, ${this.props.location.coords.longitude}`}
          />
        ) : null}

        {this.props.history
          ? this.props.history.map((item, index) => {
              return <SuggestionCard key={index} icon="history" title={item} value={item} />;
            })
          : null}
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
    backgroundColor: "white",
    paddingTop: 24,
    position: "relative",
    top: -24,
    borderRadius: 8
  }
});
