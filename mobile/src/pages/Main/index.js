import React, { Component } from "react";

import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";
import logo from "../../assets/logo.png";

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
      </View>
    );
  }
}
