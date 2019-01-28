import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import Suggestions from "./Suggestions";

class SearchPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.focus) {
      return (
        <View>
          <Suggestions />
        </View>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  focus: state.search.focus,
  history: state.search.history
});

export default connect(mapStateToProps)(SearchPage);
