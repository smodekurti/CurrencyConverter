import React , {Component} from 'react';
import {View, Image,ImageBackground, Text, Keyboard, Animated} from 'react-native';

import styles from './styles';


const Logo = () =>(
        <View style={styles.container}>
          <ImageBackground
            resizeMode="contain"
            source={require('./images/background.png')}
            style={styles.containerImages}
          >
            <Image
              resizeMode="contain"
              source={require('./images/logo.png')}
              style={styles.image}
            />
          </ImageBackground>
          <Text style={styles.text}>Currency Converter</Text>
        </View>
      );
 

export default Logo;