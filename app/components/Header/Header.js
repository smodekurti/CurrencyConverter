import React , {Component}from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Styles from './styles';

class Header extends Component{
    render(){
        return(
            <View style={Styles.container}>
                <TouchableOpacity style={Styles.button} onPress={this.props.onPress}>
                        <Image source={require('./images/gear.png') } 
                               resizeMode='contain'
                               style={Styles.icon}/>
                </TouchableOpacity>


            </View>
        );
    }

}


export default Header;