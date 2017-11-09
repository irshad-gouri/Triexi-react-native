import React, { Component } from "react";
import {
  View,
  Image,
} from "react-native";
import Carousel from "react-native-looped-carousel";

class AddIntrest extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }


  render() {
    return (
        <View style={styles.container} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});



export default AddIntrest;
