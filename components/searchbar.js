import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

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

  onFocus(){
    this.setState({focus: true})
  }

  onBlur(){
    console.log('blur')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Search here..."
            value={this.state.term}
            onChangeText={text => this.setState({ term: text })}
            onSubmitEditing={() => this.onSubmit(this.state.term)}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
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
    backgroundColor: "white",
    padding: 16,
    borderRadius: 50,
    elevation: 1
  },
  input: {
    fontSize: 14,
    color: "#8A8A8A",
    fontWeight: "bold",
    padding: 16
  }
});
