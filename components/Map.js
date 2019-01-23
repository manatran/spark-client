import React from "react";
import { connect } from "react-redux";
import { StyleSheet } from "react-native";
import { Location, MapView } from "expo";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      receivedProps: false,
      searchLoc: null,
      region: null,
      initialRegion: {
        latitude: 51.0534578,
        longitude: 3.7202534,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }

  getLatLongFromString(address) {
    if (address !== "Current location") {
      Location.geocodeAsync(address).then(loc => {
        loc = loc[0];
        if (loc) {
          const location = {
            latitude: loc.latitude,
            longitude: loc.longitude
          };

          if (this.props.results) {
            this.setState({ searchLoc: location });
            this.setState({
              region: {
                latitude: loc.latitude,
                longitude: loc.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }
            });
          }
        }
        this.setState({ receivedProps: false });
      })
        .catch(err => console.log(err));

    } else {
      if (this.props.results) {
        this.setState({ searchLoc: this.props.location.coords });
        this.setState({
          region: {
            latitude: this.props.location.coords.latitude,
            longitude: this.props.location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }
        });
      }
      this.setState({ receivedProps: false });
    }
  }

  componentWillMount() {
    if (this.props.input) {
      this.getLatLongFromString(this.props.input);
    }
  }
  componentWillReceiveProps() {
    this.setState({ receivedProps: true });
  }

  componentDidUpdate() {
    if (this.state.receivedProps && this.props.input) {
      this.getLatLongFromString(this.props.input);
    }
  }

  render() {
    return (
      <MapView
        style={styles.map}
        initialRegion={this.state.initialRegion}
        region={this.state.region}
      >
        {(this.props.input && this.state.searchLoc) ? (
          <MapView.Marker
            coordinate={this.state.searchLoc}
            title={"Search result"}
            description={this.props.input}
          />
        ) : null}
      </MapView>
    );
  }
}

const mapStateToProps = state => ({
  location: state.location.location,
  input: state.search.input,
  results: state.search.results
})

export default connect(mapStateToProps)(Map);

const styles = StyleSheet.create({
  map: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  }
});
