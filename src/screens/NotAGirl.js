import React, { Component } from "react";
import {
  View,
  Image,
  ScrollView,
  Dimensions,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Carousel from "react-native-looped-carousel";
import FBSDK, { LoginManager, AccessToken } from "react-native-fbsdk";
import { connect } from "react-redux";
import IntroSlide from "./../components/IntroSlides";
import BackgroundImage from "./../components/BackgroundImage";
import axios from "axios";
import FacebookLoginButton from "./../components/FacebookLoginButton";

const image = require("./../../assets/images/background.png");
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonStyle: {
    backgroundColor: "rgba(40, 40, 40, .70)",
    borderColor: null,
    borderRadius: 25,
    elevation: 0,
    alignSelf: "center",
    height: Dimensions.get("window").height / 16,
    width: Dimensions.get("window").width / 1.5
  },
  buttonModalStyle: {
    backgroundColor: "#EF0043",
    borderColor: null,
    elevation: 0,
    alignItems: "center",
    alignSelf: "center",
    height: Dimensions.get("window").height / 20
  },
  buttonTextStyle: {
    flex: 1,
    color: "#fff",
    top: 12,
    textAlign: "center",
    alignSelf: "center",
    justifyContent: "center"

    // fontFamily: 'quicksand-medium'
  },
  headline: {
    height: Dimensions.get("window").height * 75 / 100,
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center"
  }
});

class NotAGirl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: { width, height },
      user: null
    };
    this.setState = this.setState.bind(this);
    this.logout = this.logout.bind(this);
  }

  logout() {
    LoginManager.logOut();
    AccessToken.getCurrentAccessToken().then(data => {
      if (!data) {
        this.props.setLoginStatus(false);
      }
    });
  }

  render() {
    return (
      <BackgroundImage Image={image}>
        <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
          <StatusBar backgroundColor="#9A1137" barStyle="light-content" />
          <View delay={500} style={styles.headline}>
            <Text style={{fontSize: 18, fontWeight: '600', color: 'white' }}> Sorry this app is only for girl...</Text>
          </View>
          <View style={{ marginTop: 15 }}>
            <TouchableOpacity
              onPress={() => {
                this.logout();
              }}
              style={styles.buttonStyle}
            >
              <Text style={styles.buttonTextStyle}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BackgroundImage>
    );
  }
}

export default NotAGirl;
