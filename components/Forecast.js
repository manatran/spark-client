import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { STYLES } from "./../config/";

export default class Forecast extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log("mounting");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={STYLES.card}>
          {/* Weather */}
          <View style={styles.forecast}>
            <Image
              style={styles.image}
              source={require("./../assets/icons/weather/partly-cloudy.png")}
            />
            <View>
              <Text style={styles.title}>12° C</Text>
              <Text style={styles.subtitle}>Mostly cloudy</Text>
            </View>
          </View>

          {/* Location */}
          <View>
            <Text style={[styles.title, styles.location]}>
              Ghent, Oost-Vlaanderen
            </Text>
            <Text style={styles.subtitle}>Tuesday, 27 Nov 2018</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    marginTop: 32
  },
  forecast: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16
  },
  image: {
    height: 64,
    width: 64,
    marginRight: 16
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    color: "#737373"
  },
  subtitle: {
    fontWeight: "200",
    color: "#A1A1A1",
    fontSize: 18
  },
  location: {
    fontWeight: "100"
  }
});
