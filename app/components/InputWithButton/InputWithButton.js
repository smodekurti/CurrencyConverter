import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, TouchableHighlight, Text, TextInput} from 'react-native';
import styles from './styles';
import color from 'color';




class InputWithButton extends Component{
    constructor(props){
        super(props);
        
    }

    


    render(){
        const containerStyles= [styles.container];

        const underlayColor = color(styles.buttonBackgroundColorBase)
                                .darken(styles.$buttonBackgroundColorModifier);

        if(this.props.editable === false){
            console.log('PROPERTY IS NON-EDITABLE');
            containerStyles.push(styles.containerDisabled)
        }

        return (
         <View style={containerStyles}>
            <TouchableHighlight onPress={this.props.onPress} 
                                style={styles.buttonContainer}
                                underlayColor='gray'>
                <Text style={styles.buttonText}>{this.props.buttonText}</Text>
            </TouchableHighlight>
            <View style={styles.border}/>
            <TextInput style={styles.input} 
                       keyboardType="numeric" 
                       underlineColorAndroid='transparent'
                       editable={this.props.editable}
                       defaultValue={this.props.defaultValue}
                       onChangeText={this.props.onChangeText}>

            </TextInput>                

        </View>   
        );
    }
} 

export default InputWithButton;