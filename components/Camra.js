import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import Icon3 from 'react-native-vector-icons/SimpleLineIcons';
import Icon4 from 'react-native-vector-icons/SimpleLineIcons';

const Camra = () => {
  return (
    <>
      <View>
        <Image
          style={{height: 530, width: 410}}
          source={require('../components/screens/camra.png')}
        />
      </View>

      <View style={{flexDirection: 'row'}}>
        <Icon
          name="flash"
          size={27}
          style={{paddingLeft: 80, paddingTop: 20, color: 'black'}}
        />

        <View style={{paddingTop: 15, paddingLeft: 73}}>
          <ImageBackground
            style={{height: 47, width: 47}}
            source={require('../components/screens/Ellipse.png')}>
            <Icon4
              name="camera"
              size={25}
              color="white"
              style={{position: 'absolute', top: 10, right: 11}}
            />
          </ImageBackground>
        </View>

        <Icon3
          name="refresh"
          size={27}
          style={{paddingLeft: 90, paddingTop: 20, color: 'black'}}
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
        <View style={{paddingLeft: 20, paddingRight: 20, paddingTop: 20}}>
          <View
            style={{
              width: '100%',
              backgroundColor: 'blue',
              paddingVertical: 10,
              paddingHorizontal: 10,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}>
            <Text style={{color: 'white', fontSize: 20}}>TAKE A PHOTO</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Camra;

const styles = StyleSheet.create({
  circle: {},
});
