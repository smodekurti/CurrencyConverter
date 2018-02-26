import React , {Component} from 'react';
import {View, Text, TouchableHighlight,} from 'react-native';
import PropTypes from 'prop-types';
import Styles from './styles';
import Seperator from './Seperator';
import Icon from './checkIcon';

class ListItem extends Component{
    constructor(props){
        super(props);
        
                    

    }

  

    render(){
        return (
           <TouchableHighlight onPress={this.props.onPress}>
           <View>
                <View style = {Styles.row}>
                    <Text style={Styles.text}>{this.props.itemText}</Text>
                    {this.props.selected ?
                                        <Icon checkmark= {this.props.checkmark} 
                                                  visible={this.props.visible}
                                                  iconBackground={this.props.iconBackground}/>
                                         :<Icon />
                                        
                    }
                    {this.props.customIcon}
                </View>
                <Seperator />
            </View>
           </TouchableHighlight>


        );
    }
}

ListItem.propTypes = {
    itemText:  PropTypes.string,
    onPress:   PropTypes.func,
    selected:  PropTypes.bool,
    checkmark: PropTypes.bool,
    visible:   PropTypes.bool,
    customIcon:PropTypes.element,
    iconBackground:PropTypes.string
  };
  

ListItem.defaultProps = {
    selected : false,
    checkmark : false,
    visible : true,
    customIcon:null
}

export default ListItem;
