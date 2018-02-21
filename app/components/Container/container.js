import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import styles from './styles'
import {TouchableWithoutFeedback, Keyboard } from 'react-native';

const Container = ({children}) =>
(
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
        {children}
    </View>
    </TouchableWithoutFeedback>
);

Container.propTypes = {
   children: PropTypes.any,
}

export default Container;
