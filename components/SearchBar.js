import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import { getSearchTerm, removeSearchTerm } from "./../actions/searchActions";
import Suggestions from "./Suggestions";
import Icon from "./Icon";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      focus: false
    };
  }

  componentDidMount() {
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        if (this.state.focus) {
          this.refs.search.blur();
        }
      }
    );
  }

  componentWillUnmount() {
    this.keyboardDidHide.remove();
  }

  search() {
    this.refs.search.blur();
    if (this.state.input) {
      this.props.getSearchTerm(this.state.input);
    }
  }

  clear() {
    this.props.removeSearchTerm();
    this.setState({ input: "" });
    this.refs.search.blur();
  }

  onFocus() {
    this.setState({ focus: true });
  }

  onBlur() {
    this.setState({ focus: false });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          {this.props.searching ? (
            // Loader
            <ActivityIndicator
              style={styles.icon}
              size="small"
              color="#61D0E1"
            />
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
            value={this.state.input}
            onChangeText={text => this.setState({ input: text })}
            onSubmitEditing={this.search.bind(this)}
            onFocus={this.onFocus.bind(this)}
            onBlur={this.onBlur.bind(this)}
          />

          {/* Close Icon */}
          {this.state.input ? (
            <TouchableOpacity onPress={this.clear.bind(this)}>
              <Icon icon="close" style={styles.icon} />
            </TouchableOpacity>
          ) : null}
        </View>

        {/* Suggestions */}
        {this.state.focus ? <Suggestions /> : null}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  term: state.search.term,
  searching: state.search.searching
});

export default connect(
  mapStateToProps,
  { getSearchTerm, removeSearchTerm }
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
