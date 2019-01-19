import React from "react";
import { StyleSheet, View, TouchableHighlight, Animated } from "react-native";
import OptionsHeader from "./options/Header";
import OptionsBody from "./options/Body";
import GestureRecognizer from 'react-native-swipe-gestures';

export default class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 200,
      offset: 590,
      bottom: new Animated.Value(-590),
    };
  }

  openOptions() {
    this.setState({ open: true });
    Animated.timing(
      this.state.bottom,
      {
        toValue: 0,
        duration: this.state.duration,
      }
    ).start();
  }

  closeOptions() {
    this.setState({ open: false });
    Animated.timing(
      this.state.bottom,
      {
        toValue: -this.state.offset,
        duration: this.state.duration,
      }
    ).start();
  }

  toggleOpen() {
    if (this.state.open) {
      this.closeOptions();
    } else {
      this.openOptions();
    }
  }

  render() {
    return (
      <Animated.View style={[styles.container, { bottom: this.state.bottom }]}>
        <GestureRecognizer onSwipeUp={() => this.openOptions()} onSwipeDown={() => this.closeOptions()}>

          <View style={[styles.options, styles.roundTop]}>

            <TouchableHighlight style={styles.roundTop} onPress={this.toggleOpen.bind(this)}>
              <OptionsHeader />
            </TouchableHighlight>

            <OptionsBody />

          </View>

        </GestureRecognizer>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: "100%",
    paddingHorizontal: 8,
  },
  options: {
    elevation: 6,
    backgroundColor: "#FAFAFA",
    height: 640,
  },
  roundTop: {
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
  },
});
