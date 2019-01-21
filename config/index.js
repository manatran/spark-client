import {
  Dimensions
} from 'react-native';

export const COLORS = {
  primary: "#61D0E1",
  material: "#4285F4",

  darkgrey: "#303030",
  grey: "#737373",
  lightgrey: "#A1A1A1",
}

export const STYLES = {
  card: {
    padding: 16,
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 2
  }
}

export const {
  width,
  height
} = Dimensions.get('window');