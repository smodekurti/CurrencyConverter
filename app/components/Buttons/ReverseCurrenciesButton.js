import React , {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import styles from './styles'
import {TouchableOpacity, Image , Text} from 'react-native';

class ReverseCurrenciesButton extends Component{

    render(){
        return(
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <View style={styles.wrapper}>
                    <Image
                    resizeMode="contain"
                    source={require('./images/icon.png')}
                    style={styles.icon}
                    />
                    <Text style={styles.text}>{this.props.actionText}</Text>
                </View>
            </TouchableOpacity>
        )
    };
}

export default ReverseCurrenciesButton;
