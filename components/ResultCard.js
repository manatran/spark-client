import React from "react";
import { StyleSheet, View, Text, TouchableHighlight, Linking } from "react-native";
import { Permissions, Location } from "expo";
import Icon from "./Icon";
import { STYLES } from "./../config/";

class ResultCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null
    }
  }

  getAddressFromLatLong(pos) {
    Permissions.askAsync(Permissions.LOCATION).then(location => {
      if (location.status === "granted") {
        console.log(location.status);
        Location.reverseGeocodeAsync(pos).then(address => {
          console.log(address);
          address = address[0];
          this.setState({ name: address.name });
        }).catch(err => {
          console.log(err);
        })
      }
    })
  }

  componentDidMount() {
    this.getAddressFromLatLong(this.props.location);
  }

  openMap() {
    const address = 'http://maps.google.com/maps?daddr=';
    const url = `${address}${this.props.location.latitude}+${this.props.location.longitude}`;
    Linking.openURL(url);
  }

  render() {
    return (
      <TouchableHighlight style={styles.container} onPress={this.openMap.bind(this)}>
        <View style={[STYLES.card, styles.card]}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>{this.state.name}</Text>
            <View style={[styles.row, styles.body]}>
              <View>
                <View style={styles.row}>
                  <Icon icon="directions_car" style={styles.icon} />
                  <Text style={styles.bold}>{this.props.available}</Text>
                  <Text style={styles.text}>spaces available</Text>
                </View>
                <View style={styles.row}>
                  <Icon icon="directions_walk" style={styles.icon} />
                  <Text style={styles.bold}>{this.props.distance}m</Text>
                  <Text style={styles.text}>from destination</Text>
                </View>
              </View>

            </View>
          </View>
          <View style={[styles.row, styles.badge]}>
            <View style={[styles.zone, styles[this.props.zone]]} />
            <Text>{this.props.rate}</Text>
          </View>
          <Icon icon="directions" style={styles.button} />
        </View>
      </TouchableHighlight>
    );
  }
}

export default ResultCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    marginTop: 8,
  },
  card: {
    paddingVertical: 8,
    borderLeftWidth: 2,
    borderLeftColor: "#61D0E1",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    color: "#303030",
    fontSize: 16,
    fontWeight: "700"
  },
  body: {
    flex: 1,
    justifyContent: "space-between"
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  button: {
    padding: 8,
    fontSize: 20,
    borderRadius: 50,
    color: "white",
    backgroundColor: "#4285F4"
  },
  icon: {
    fontSize: 14,
    color: "#737373",
    marginRight: 8,
  },
  bold: {
    color: "#737373",
    fontWeight: "700",
    marginRight: 4,
  },
  text: {
    color: "#A1A1A1"
  },
  badge: {
    backgroundColor: "#EEEEEE",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 50,
    marginRight: 32,
  },
  green: {
    backgroundColor: '#61E161',
  },
  yellow: {
    backgroundColor: '#E6E63A',
  },
  red: {
    backgroundColor: '#E16161',
  },
  zone: {
    width: 8,
    height: 8,
    marginRight: 4,
    borderRadius: 50,
    backgroundColor: '#61E161'
  }
});
