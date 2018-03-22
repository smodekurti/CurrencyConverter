import React , {Component} from 'react';
import {View, Text, FlatList, StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import currencies from '../data/currencies';
import ListItem from '../components/List/ListItem';
import {connect} from 'react-redux';
import {changeBaseCurrency, changeQuoteCurrency} from '../actions/currencies';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component{
    static propType ={
        navigation : PropTypes.object,
        dispatch : PropTypes.func,
        baseCurrency : PropTypes.string,
        quoteCurrency : PropTypes.string,
        primaryColor : PropTypes.string
    }

    handleListItemSelected = (currency) =>{
        const  type  = this.props.navigation.state.params.type;

        if(type === 'base'){
           this.props.dispatch(changeBaseCurrency(currency))     
        }
        else if(type === 'quote'){
            this.props.dispatch(changeQuoteCurrency(currency));
        }
        this.props.navigation.goBack();   
    }
    
    render(){
        let comparisonCurrency = this.props.baseCurrency;
        if(this.props.navigation.state.params.type === 'quote'){
            comparisonCurrency = this.props.quoteCurrency;
        }

        return (
            <View style={{flex :1}}>
                <StatusBar barStyle="default" translucent={false}/>
                <FlatList 
                    data={currencies}
                    renderItem = {({ item }) => (
                        <ListItem
                        itemText={item}
                        selected = {item.split(' - ')[0] === comparisonCurrency}
                        onPress = {() =>{this.handleListItemSelected(item.split(' - ')[0])}}
                        checkmark={true}
                        iconBackground = {this.props.primaryColor}
                    />
                    )}
                    keyExtractor = {(item) => item}
                />

            </View>
        );
    }

}


const mapStateToProps = (state) => {
    return {
        baseCurrency : state.currencies.baseCurrency,
        quoteCurrency : state.currencies.quoteCurrency,
        primaryColor : state.themes.primaryColor
    }
}

export default connect(mapStateToProps) (CurrencyList);