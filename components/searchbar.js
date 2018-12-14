import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from "react-native";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      focus: false
    };
  }

  onSubmit(term) {
    console.log(term);
  }

  // onFocus() {
  //   this.setState({ focus: true });
  // }

  // onBlur() {
  //   this.setState({ focus: false });
  // }

  toggleClass() {
    console.log("clicked");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.searchIcon} />
          <TextInput
            placeholder="Search here..."
            value={this.state.term}
            onChangeText={text => this.setState({ term: text })}
            onSubmitEditing={() => this.onSubmit(this.state.term)}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
          <View style={[styles.searchIcon, styles.voiceIcon]} />
          <TouchableHighlight
            onPress={this.toggleClass}
            style={[styles.voiceButton]}
          >
            <View style={[styles.searchIcon, styles.voiceIcon]} />
          </TouchableHighlight>
        </View>
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
    paddingHorizontal: 16,
    height: 49,
    borderRadius: 50,
    elevation: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  searchIcon: {
    height: 16,
    width: 16,
    marginRight: 32,
    backgroundColor: "#BEBEBE"
  },
  voiceButton: {
    backgroundColor: "white",
    position: "absolute",
    right: 0,
    height: 49,
    width: 49,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  voiceIcon: {
    position: "absolute",
    right: 16,
    marginRight: 0
  },
  voiceActive: {
    backgroundColor: "#61D0E1",
    elevation: 2,
    left: 0
  },
  input: {
    fontSize: 14,
    color: "#8A8A8A",
    fontWeight: "bold",
    padding: 16,
    flex: 1
  }
});
