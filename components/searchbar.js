import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import Icon from "./Icon";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      focus: false
    };
  }

  search() {
    if (this.state.term) {
      console.log(this.state.term);
    }
  }

  clear() {
    this.setState({ term: "" });
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
          {/* Search Icon */}
          <TouchableOpacity onPress={this.search.bind(this)}>
            <Icon icon="search" style={styles.icon} />
          </TouchableOpacity>
          {/* Search Input */}
          <TextInput
            ref="search"
            style={styles.input}
            placeholder="Search here..."
            value={this.state.term}
            onChangeText={text => this.setState({ term: text })}
            onSubmitEditing={this.search.bind(this)}
            onFocus={this.onFocus.bind(this)}
            onBlur={this.onBlur.bind(this)}
          />
          {/* Close Icon */}
          {this.state.term ? (
            <TouchableOpacity onPress={this.clear.bind(this)}>
              <Icon icon="close" style={styles.icon} />
            </TouchableOpacity>
          ) : null}
        </View>

        {/* Suggestions */}
        {this.state.focus ? (
          <View>
            <Text>Ello chum</Text>
          </View>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 32
  },
  inputContainer: {
    position: "relative",
    backgroundColor: "white",
    borderRadius: 50,
    elevation: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  input: {
    fontSize: 16,
    color: "#8A8A8A",
    paddingVertical: 16,
    flex: 1
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
