import React from "react";
import { connect } from "react-redux";
import { StyleSheet, View } from "react-native";
import ResultCard from "./ResultCard";

class Results extends React.Component {
  render() {
    if (this.props.results) {
      return (
        <View style={styles.container}>
          <ResultCard
            name="Sassevaartstraat"
            location={{ lat: 51.32423, long: 3.23423 }}
            available="3"
            distance="250"
            rate="$ 3/h"
            zone="green"
          />
          <ResultCard
            name="Dok Noord"
            location={{ lat: 51, long: 3 }}
            available="5"
            distance="150"
            rate="$ 6/h"
            zone="yellow"
          />
          <ResultCard
            name="Sint-Salvatorstraat"
            location={{ lat: 51, long: 3 }}
            available="12"
            distance="350"
            rate="$ 12/h"
            zone="red"
          />
        </View>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  results: state.search.results
})

export default connect(mapStateToProps)(Results);

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 80,
    paddingHorizontal: 8,
    width: "100%"
  }
});
