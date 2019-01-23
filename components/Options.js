import React from "react";
import { StyleSheet, View, TouchableHighlight, Animated } from "react-native";
import OptionsHeader from "./options/Header";
import OptionsBody from "./options/Body";
import GestureRecognizer from "react-native-swipe-gestures";
import { connect } from "react-redux";
import { height } from "../config";
import { updateOptions } from "../actions/optionActions";

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 200,
      offset: height + 150,
      bottom: new Animated.Value(-(height + 150))
    };
  }

  openOptions() {
    this.setState({ open: true });
    Animated.timing(this.state.bottom, {
      toValue: -315,
      duration: this.state.duration
    }).start();
  }

  closeOptions() {
    this.setState({ open: false });
    Animated.timing(this.state.bottom, {
      toValue: -this.state.offset,
      duration: this.state.duration
    }).start();
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
        <View style={[styles.options, styles.roundTop]}>
          <TouchableHighlight style={styles.roundTop} onPress={this.toggleOpen.bind(this)}>
            <GestureRecognizer onSwipeUp={() => this.openOptions()} onSwipeDown={() => this.closeOptions()}>
              <OptionsHeader />
            </GestureRecognizer>
          </TouchableHighlight>

          <OptionsBody style={{ paddingBottom: 200 }} />
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    position: "absolute",
    width: "100%",
    paddingHorizontal: 8
  },
  options: {
    backgroundColor: "#FAFAFA",
    height: height + 200,
    flex: 1
  },
  roundTop: {
    borderTopStartRadius: 8,
    borderTopEndRadius: 8
  }
});

const mapStateToProps = state => ({
  options: state.option.options
});

export default connect(mapStateToProps)(Options);
