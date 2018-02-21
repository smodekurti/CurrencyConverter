import React , {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import styles from './styles'
import {Text} from 'react-native';
import moment from 'moment';

class InformationText extends Component{

    render(){
        return(
            
                <View style={styles.container}>
                   <Text style={styles.text}>
                   1 {this.props.baseCurrency} = {this.props.conversionRate} {this.props.targetCurrency} as of {moment(this.props.conversionDate).format('MMMM D YYYY')}
                   </Text>
                </View>
   
        )
    };
}

export default InformationText;
