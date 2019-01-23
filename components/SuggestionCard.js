import React from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { getSearchResults, setSearchInput } from "./../actions/searchActions";
import Icon from "./Icon";

class SuggestionCard extends React.Component {
  constructor(props) {
    super(props);
  }

  onPress() {
    this.props.setSearchInput(this.props.value);
    this.props.getSearchResults(this.props.value);
  }

  render() {
    return (
      <TouchableHighlight
        onPress={this.onPress.bind(this)}
        style={[this.props.roundTop ? styles.roundTop : null, this.props.roundBottom ? styles.roundBottom : null]}
      >
        <View
          style={[
            styles.container,
            this.props.customStyle,
            this.props.roundTop ? styles.roundTop : null,
            this.props.roundBottom ? styles.roundBottom : null
          ]}
        >
          <Icon icon={this.props.icon} style={styles.icon} />
          <View style={{ flex: 1 }}>
            {/* Title */}
            {this.props.title ? <Text style={styles.title}>{this.props.title}</Text> : null}
            {/* Subtitle */}
            {this.props.subtitle ? <Text style={styles.subtitle}>{this.props.subtitle}</Text> : null}
          </View>
          {this.props.button ? <Icon icon="directions" style={styles.button} /> : null}
        </View>
      </TouchableHighlight>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { getSearchResults, setSearchInput }
)(SuggestionCard);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0"
  },
  roundTop: {
    borderTopStartRadius: 8,
    borderTopEndRadius: 8
  },
  roundBottom: {
    borderBottomStartRadius: 8,
    borderBottomEndRadius: 8,
    borderBottomWidth: 0
  },
  icon: {
    color: "#A1A1A1",
    marginRight: 16,
    fontSize: 20
  },
  button: {
    borderRadius: 50,
    padding: 8,
    // fontSize: 18,
    // color: "white",
    // backgroundColor: "#61D0E1",
    fontSize: 24,
    color: "#61D0E1"
  },
  title: {
    fontWeight: "700",
    fontSize: 16,
    color: "#303030"
  },
  subtitle: {
    fontWeight: "300",
    fontSize: 14,
    color: "#303030"
  }
});
