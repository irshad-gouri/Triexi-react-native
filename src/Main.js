import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { fetchData } from './actions/actions';
import IntroCarousel from './screens/IntroductionSlider/IntroCarousel'
import HomeScreen from './screens/HomeScreen'
import NotAGirl from './screens/NotAGirl'


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


export class Main extends Component {

  render() {
    return(
      <View style={styles.container}>
        <IntroCarousel />
      </View>
    )
  }

}

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
