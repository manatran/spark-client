import React from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Keyboard, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import {
  getSearchResults,
  removeSearchResults,
  updateSearchHistory,
  setSearchInput,
  setFocus
} from "./../actions/searchActions";
import Suggestions from "./Suggestions";
import Icon from "./Icon";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false
    };
  }

  componentDidMount() {
    this.onBlur();
    this.keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => {
      if (this.props.focus) {
        this.refs.search.blur();
      }
    });
  }

  componentWillUnmount() {
    this.keyboardDidHide.remove();
  }

  search() {
    this.refs.search.blur();
    if (this.props.input) {
      this.props.getSearchResults(this.props.input, this.props.options);
      this.props.updateSearchHistory(this.props.input);
    }
  }

  clear() {
    this.props.removeSearchResults();
    this.props.setSearchInput("");
    this.refs.search.blur();
  }

  onFocus() {
    this.props.setFocus(true);
  }

  onBlur() {
    this.props.setFocus(false);
  }

  componentDidUpdate() {
    if (this.props.searching) {
      this.refs.search.blur();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          {this.props.searching ? (
            // Loader
            <ActivityIndicator style={styles.icon} size="small" color="#61D0E1" />
          ) : (
            // Search Icon
            <TouchableOpacity onPress={this.search.bind(this)}>
              <Icon icon="search" style={styles.icon} />
            </TouchableOpacity>
          )}

          {/* Search Input */}
          <TextInput
            ref="search"
            style={styles.input}
            placeholder="Search here..."
            value={this.props.input}
            onChangeText={text => this.props.setSearchInput(text)}
            onSubmitEditing={this.search.bind(this)}
            onFocus={this.onFocus.bind(this)}
            onBlur={this.onBlur.bind(this)}
          />

          {/* Close Icon */}
          {this.props.input ? (
            <TouchableOpacity onPress={this.clear.bind(this)}>
              <Icon icon="close" style={styles.icon} />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  results: state.search.results,
  input: state.search.input,
  history: state.search.history,
  searching: state.search.searching,
  options: state.option.options,
  focus: state.search.focus
});

export default connect(
  mapStateToProps,
  { getSearchResults, removeSearchResults, setSearchInput, updateSearchHistory, setFocus }
)(SearchBar);

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    paddingHorizontal: 16,
    marginTop: 32
  },
  inputContainer: {
    zIndex: 10,
    position: "relative",
    backgroundColor: "white",
    borderRadius: 50,
    elevation: 10,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#FAFAFA",
    borderBottomWidth: 1
  },
  input: {
    fontSize: 16,
    color: "#8A8A8A",
    paddingVertical: 12,
    flex: 1,
    paddingLeft: 8
  },
  icon: {
    fontSize: 20,
    color: "#A1A1A1",
    padding: 16,
    borderRadius: 50
  },
  leftButton: {
    marginRight: 32
  }
});
