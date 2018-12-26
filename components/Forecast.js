import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { STYLES } from "./../config/";
import { utils } from "../utils";

export default class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: null,
      description: null,
      city: null,
      country: null,
      date: null
    };
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(position => {
      const key = `5be01da189bdced422ff739abbc71481`;
      const url = `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${key}`;

      fetch(url)
        .then(res => res.json())
        .then(res => {
          this.setState({ temperature: res.main.temp });
          this.setState({ description: res.weather[0].main });
          this.setState({ city: res.name });
          this.setState({ country: res.sys.country });

          const date = new Date();
          let today = `${utils.getDay(
            date.getDay()
          )}, ${date.getDate()} ${utils.getMonth(
            date.getMonth()
          )} ${date.getFullYear()}`;
          this.setState({ date: today });

        })
        .catch(err => {
          console.log(err);
        });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.temperature ? (
          <View style={STYLES.card}>
            {/* Weather */}
            <View style={styles.forecast}>
              <Image
                style={styles.image}
                source={require("./../assets/icons/weather/partly-cloudy.png")}
              />
              <View>
                <Text style={styles.title}>
                  {utils.convertKtoC(this.state.temperature)}° C
                </Text>
                <Text style={styles.subtitle}>{this.state.description}</Text>
              </View>
            </View>

            {/* Location */}
            <View>
              <Text style={[styles.title, styles.location]}>
                {this.state.city}, {this.state.country}
              </Text>
              <Text style={styles.subtitle}>{this.state.date}</Text>
            </View>
          </View>
        ) : null}
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
