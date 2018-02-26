import React , {Component} from 'react';
import {View, Image} from 'react-native';
import Styles from './styles';

class Icon extends Component{
    
    constructor(props){
        super(props);
    }

    render(){
        const iconStyles = [Styles.icon];
        
        if(this.props.visible){
            iconStyles.push(Styles.iconVisible);
        }
        return (
            <View style={iconStyles} >
                {this.props.checkmark ? <Image source={require('./images/check.png')} resizeMode='contain' 
                                               style={Styles.imageStyle}/> 
                                    : null}
                

            </View>

        );
    }
}

export default Icon;