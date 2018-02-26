import React , {Component} from 'react';
import {View} from 'react-native';
import Styles from './styles';

class Seperator extends Component{

    render(){
        return (
            <View style={Styles.border}/>
        );
    }
}

export default Seperator;