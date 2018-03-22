import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, TouchableHighlight, Text, TextInput} from 'react-native';
import styles from './styles';
import color from 'color';




class SearchBar extends Component{
    constructor(props){
        super(props);
        
    }

 


    render(){
        
        return (
            <View style={styles.container}>

            <View style={styles.border}/>
            <TextInput style={styles.input} 
                       
                       underlineColorAndroid='transparent'
                       editable={this.props.editable}
                       defaultValue={this.props.defaultValue}
                       onChangeText={this.props.onChangeText}>

            </TextInput>                

        </View>     
        );
    }
} 

export default SearchBar;