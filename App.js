import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Platform,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Animated
} from 'react-native';

const { width, height } = Dimensions.get('window');

const IS_IPHONEX = height === 817 || height === 896;
const HEADER_SIZE = Platform.OS === 'ios' ? (IS_IPHONEX ? 160 : 140) : 140;
const HEADER_Minim = Platform.OS === 'ios' ? (IS_IPHONEX ? 100 : 70) : 70;



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scollY: new Animated.Value(0)
    };
  }

  render() {

    const HeaderMengecil = this.state.scollY.interpolate({
      inputRange: [0, 80],
      outputRange: [HEADER_SIZE, HEADER_Minim],
      extrapolate: 'clamp'
    })

    const TextMengecil = this.state.scollY.interpolate({
      inputRange: [0, 80],
      outputRange: [25, 17],
      extrapolate: 'clamp'
    })

    return (
      <View style={styles.container}>
        <Animated.View style={{ height: HeaderMengecil, width: width, backgroundColor: '#336d88', justifyContent: 'flex-end' }}>
          <Animated.Text style={{ fontSize: TextMengecil, fontWeight: 'bold', color: '#fff', marginBottom: 20, marginLeft: 20 }}>Wisata</Animated.Text>
        </Animated.View>
        <View style={{ backgroundColor: 'transparent', alignItems: 'center', flex: 1, paddingBottom: 10, width: width }}>
          <Animated.ScrollView scrollEventThrottle={16} onScroll={
            Animated.event([{
              nativeEvent: {
                contentOffset: {
                  y: this.state.scollY
                }
              }
            }])
          }>
            <View style={{ backgroundColor: '#fff', alignItems: 'center', width: width, paddingBottom: 10 }}>
              <TouchableOpacity style={{ backgroundColor: 'transparent', width: '90%', height: 300, marginTop: 20, borderRadius: 10, shadowColor: '#808080', shadowOpacity: 0.7, shadowRadius: 4, shadowOffset: { height: 0, width: 0 }, elevation: 5 }}>
                <ImageBackground source={require('./images/g1.jpg')} style={{ height: '100%', width: '100%', justifyContent: 'space-between' }} imageStyle={{ borderRadius: 10 }}>
                  <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20, marginTop: 15, marginLeft: 15 }}>Gunung Merapi</Text>
                  <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 17, marginBottom: 15, marginLeft: 15 }}>Wisata Gunung Merapi</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={{ backgroundColor: '#fff', width: '90%', height: 300, marginTop: 20, borderRadius: 10, shadowColor: '#808080', shadowOpacity: 0.7, shadowRadius: 4, shadowOffset: { height: 0, width: 0 }, elevation: 5 }}>
                <ImageBackground source={require('./images/g2.jpg')} style={{ height: '100%', width: '100%', justifyContent: 'space-between' }} imageStyle={{ borderRadius: 10 }}>
                  <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20, marginTop: 15, marginLeft: 15 }}>Gunung Merapi</Text>
                  <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 17, marginBottom: 15, marginLeft: 15 }}>Wisata Gunung Merapi</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity style={{ backgroundColor: '#fff', width: '90%', height: 300, marginTop: 20, borderRadius: 10, shadowColor: '#808080', shadowOpacity: 0.7, shadowRadius: 4, shadowOffset: { height: 0, width: 0 }, elevation: 5 }}>
                <ImageBackground source={require('./images/g3.jpg')} style={{ height: '100%', width: '100%', justifyContent: 'space-between' }} imageStyle={{ borderRadius: 10 }}>
                  <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20, marginTop: 15, marginLeft: 15 }}>Gunung Merapi</Text>
                  <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 17, marginBottom: 15, marginLeft: 15 }}>Wisata Gunung Merapi</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </Animated.ScrollView>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  }
})
