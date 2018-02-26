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
                                                  visible={this.props.visible}/>
                                         :<Icon />
                                        
                    }
                    
                </View>
                <Seperator />
            </View>
           </TouchableHighlight>


        );
    }
}

ListItem.propTypes = {
    itemText:PropTypes.string,
    onPress: PropTypes.func,
    selected: PropTypes.bool,
    checkmark: PropTypes.bool,
    visible:PropTypes.bool
  };
  

ListItem.defaultProps = {
    selected : false,
    checkmark : false,
    visible : true,
}

export default ListItem;
