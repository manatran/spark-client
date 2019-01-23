import React from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, Image } from "react-native";
import { getLocation } from "./../actions/locationActions";
import { STYLES } from "./../config/";
import { utils, weatherImages } from "../utils";

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: null,
      description: null,
      city: null,
      country: null,
      date: null,
      weatherImg: ""
    };
  }

  componentWillMount() {
    this.props.getLocation();
    this.fetchWeather(this.props.location);
  }

  fetchWeather(position) {
    const key = `5be01da189bdced422ff739abbc71481`;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=Ghent,BE&appid=${key}`;

    if (position) {
      url = `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${
        position.coords.longitude
      }&appid=${key}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({ temperature: res.main.temp });
        this.setState({ description: res.weather[0].main });
        this.setState({ city: res.name });
        this.setState({ weatherImg: res.weather[0].icon });

        // Get country name by code
        fetch(`https://restcountries.eu/rest/v2/alpha/${res.sys.country}?fields=name`)
          .then(res => res.json())
          .then(res => {
            this.setState({ country: `, ${res.name}` });
          });

        const date = new Date();
        let today = `${utils.getDay(date.getDay())}, ${date.getDate()} ${utils.getMonth(
          date.getMonth()
        )} ${date.getFullYear()}`;
        this.setState({ date: today });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.props.preferences.forecast);
    if (!this.props.results && this.props.preferences.forecast) {
      return (
        <View style={styles.container}>
          {this.state.temperature ? (
            <View style={STYLES.card}>
              {/* Weather */}
              <View style={styles.forecast}>
                {/* Icon */}
                <Image style={styles.image} source={weatherImages[this.state.weatherImg]} />
                <View>
                  {/* Temperature and condition */}
                  <Text style={styles.title}>{utils.convertKtoC(this.state.temperature)}° C</Text>
                  <Text style={styles.subtitle}>{this.state.description}</Text>
                </View>
              </View>

              {/* Location and date */}
              <View>
                <Text style={[styles.title, styles.location]}>
                  {this.state.city}
                  {this.state.country}
                </Text>
                <Text style={styles.subtitle}>{this.state.date}</Text>
              </View>
            </View>
          ) : null}
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
  preferences: state.option.displayPreferences
});

export default connect(
  mapStateToProps,
  { getLocation }
)(Forecast);

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
