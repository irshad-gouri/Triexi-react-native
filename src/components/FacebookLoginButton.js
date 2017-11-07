import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet,Dimensions,TouchableOpacity,View, ScrollView } from 'react-native';
// import { Button } from 'native-base';
import CheckBox from 'react-native-checkbox';
// import * as actions from '../../../actions';
// import FBSDK, { LoginManager, AccessToken } from 'react-native-fbsdk';
import Modal from 'react-native-modal';

export default class FacebookLoginButton extends Component {

    state = {
      isModalVisible: false,
      isTMSelected: false,
      isAlertModalVisible: false,
    }
    _showModal = (flag) => {
      if (flag === 'alert') {
        this.setState({ isAlertModalVisible: true });
      } else if (flag === 'tandm') {
        this.setState({ isModalVisible: true });
      }
    };
  TMFlipper() {
    console.log("Clicked on Me ");

      if (this.state.isTMSelected) {
        this.setState({ isTMSelected: false });
      } else {
        this.setState({ isTMSelected: true });
      }
  }
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  renderModal() {
    return (
      <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.ModalViewStyle}>
            <View
              style={{
                flex: 1,
                paddingLeft: 30,
                paddingTop: 10,
                justifyContent: 'center'
              }}
            >
              <Text style={{ textAlign: 'left', fontSize: 20, color: '#EF0043' }}>
                {'Terms & Conditions'}
              </Text>
            </View>
            <View
              style={{
                flex: 8,
                paddingLeft: 30,
                paddingRight: 30,
                justifyContent: 'center'
              }}
            >
              <ScrollView>
                  <Text style={{ textAlign: 'left', color: '#EF0043' }}>
                  {`First of all, ES2015 (also known as ES6) is a set of
                  improvements to JavaScript that is now part of te official standard,
                  but not yet supported by all browsers, so often it isnt used yet in
                  web development. React Native ships with ES2015 support, so you can use
                   this stuff without worrying about compatibility. import, from, class,
                    extends, and the () => syntax in the example above are all ES2015 features
                    . If you arent familiar with ES2015, you can probably pick it
                    up just by reading through sample code like this tutorial has.
                    If you want, this page has a good overview of ES2015 features.
                    The other unusual thing in this code example is Hello
                    world!. This is JSX - a syntax for embedding XML within
                     JavaScript. Many frameworks use a special templating language
                     which lets you embed code inside markup language. In React, this
                     is reversed. JSX lets you write your markup language inside code.
                      It looks like HTML on the web, except instead of web things like
                      <div> or <span>, you use React components. In this case, is
                      a built-in component that just displays some text.`}
                  </Text>
              </ScrollView>
            </View>
            <View
              style={{
                flex: 1,
                padding: 20,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <TouchableOpacity
                onPress={() => { this._hideModal('tandm'); }}
                light
                rounded
                style={styles.buttonModalStyle}
              >
                <Text style={{ color: '#fff' }}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
    );
  }

  renderAlertModal() {
    return (
      <Modal isVisible={this.state.isAlertModalVisible}>
          <View style={styles.AlertModalViewStyle}>
            <View
              style={{
                flex: 1,
                paddingLeft: 30,
                paddingRight: 30,
                paddingTop: 10,
                justifyContent: 'center'
              }}
            >
              <Text
                style={{
                  textAlign: 'left',
                  fontSize: 17,
                  color: '#EF0043'
                }}
              >
                Please accept the Terms & Conditions if you agree and wish to continue.
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <TouchableOpacity
                onPress={() => { this._hideModal('alert'); }}
                light
                rounded
                style={styles.buttonModalStyle}
              >
                <Text style={{ color: '#fff' }}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
    );
  }


  _hideModal = (flag) => {
    if (flag === 'alert') {
      this.setState({ isAlertModalVisible: false });
    } else if (flag === 'tandm') {
      this.setState({ isModalVisible: false });
    }
  };
  render() {
    return (
      <View>
      {this.renderModal()}
      {this.renderAlertModal()}
        <View style={styles.agreementViewStyle}>
          <View style={styles.agreementInnerViewStyle}>
          <View style={styles.headerContent}>
            <CheckBox
              underlayColor='transparent'
              containerStyle={{ paddingTop: 5 }}
              checkboxStyle={styles.checkboxStyle}
              onChange={() => { this.TMFlipper(); }}
            /></View>
              <View style={styles.agreementTextViewStyle}>
                <Text style={styles.agreementTextStyle}>
                  I confirm that I am a girl and
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.agreementTextStyle}>
                      I agree to the{` `}
                    </Text>
                  <TouchableOpacity onPress={() => { this._showModal('tandm'); }}>
                    <Text style={styles.TCTextStyle}>
                    Terms & Conditions
                  </Text>
                  </TouchableOpacity>
                </View>
          </View>
      </View>
    </View>
    <View style={{ marginTop: 15 }}>
      <TouchableOpacity
        onPress={() => {
          if (this.state.isTMSelected) {
                this.props.loginMethod();
          } else if (!this.state.isTMSelected){
            this._showModal('alert');
          }
        }}
        light
        rounded
        style={styles.buttonStyle}
      >
        <Text style={styles.buttonTextStyle}>sign in with facebook</Text>
      </TouchableOpacity>
    </View>
  </View>

    );
  }
}
const win = Dimensions.get('window');
const styles = {
  dropstyle: {
    width: win.width / 1.8,
    height: win.width / 1.8,
    borderBottomLeftRadius: win.width / 3.6,
    borderBottomRightRadius: win.width / 3.6,
    borderTopRightRadius: win.width / 3.6,
    borderWidth: 20,
    borderColor: 'rgba(40, 40, 40, .30)'
  },
  dropContainerStyle: {
    alignItems: 'center',
    marginTop: win.height / 12
  },
  descriptionLogoStyle: {
    alignItems: 'center',
    marginTop: win.height / 35,
  },
  descriptionTextViewStyle: {
    alignItems: 'center',
    marginTop: win.height / 140,
  },
  descriptionTextStyle: {
    fontSize: win.height / 40,
    // fontFamily: 'quicksand-light',
    textAlign: 'center',
    color: '#fff',

    width: win.width / 1.3,
    // fontFamily: 'quicksand-regular',
    letterSpacing: 1.5,
  },
  HeadTextViewStyle: {
    alignItems: 'center',
    marginTop: win.width / 70,
  },
  HeadTextStyle: {
    fontSize: win.height / 30,
    textAlign: 'center',
    color: '#fff',
    width: win.width / 1.3,
    // fontWeight: '600',
    // fontFamily: 'quicksand-bold',
    letterSpacing: 1.5
  },
  buttonStyle: {
    backgroundColor: 'rgba(40, 40, 40, .70)',
    borderColor: null,
    borderRadius: 25,
    elevation: 0,
    alignSelf: 'center',
    height: win.height / 16,
    width: win.width / 1.5,
  },
  buttonModalStyle: {
    backgroundColor: '#EF0043',
    borderColor: null,
    elevation: 0,
    alignItems: 'center',
    alignSelf: 'center',
    height: win.height / 20,
  },
  buttonTextStyle: {
    flex: 1,
    color: '#fff',
    top: 12,
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center'
    
    // fontFamily: 'quicksand-medium'
  },
  agreementTextStyle: {
    fontSize: win.height / 60,
    color: '#a6a6a6',
    // fontFamily: 'quicksand-medium',
    fontSize: 15,
    // fontFamily: 'quicksand-medium'
  },
  agreementTextStyle: {
    fontSize: win.height / 55,
    color: '#cfcfcf',
  },
  agreementViewStyle: {
    marginTop: win.height / 20,
    alignItems: 'center'
  },
  agreementInnerViewStyle: {
    // flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row'
  },
  checkboxStyle: {
    opacity: 0.6,
    height: win.height / 30,
    width: win.height / 30,
  },
  headerContent:{
    justifyContent:'space-around',
    height: win.height / 28,
    width: win.height / 28,
  },
  agreementTextViewStyle: {
    marginLeft: 10,

  },
  TCTextStyle: {
    fontSize: win.height / 60,
    color: '#a6a6a6',
    textDecorationLine: 'underline',
    // fontFamily: 'quicksand-light',
    fontSize: win.height / 55,
    color: '#cfcfcf',
    textDecorationLine: 'underline'
  },
  AlertModalViewStyle: {
    borderRadius: 10,
    height: (win.height * 20) / 70,
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20
  },
  ModalViewStyle: {
    borderRadius: 10,
    height: win.height / 1.2,
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20
  }
};
