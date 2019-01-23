import React from "react";
import { connect } from "react-redux";
import { StyleSheet, View } from "react-native";
import ResultCard from "./ResultCard";

class Results extends React.Component {

  render() {
    if (this.props.input && this.props.results) {
      return (
        <View style={styles.container}>
          {this.props.results.map(el => (
            <ResultCard
              key={el._id}
              location={{ latitude: el.geo_location.coordinates[1], longitude: el.geo_location.coordinates[0] }}
              available={el.capacity}
              distance={el.distance}
              rate={el.zone.rate}
              zone={el.zone.name}
            />
          ))}
        </View>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  results: state.search.results,
  input: state.search.input
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
