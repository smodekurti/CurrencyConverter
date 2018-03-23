import React , {Component} from 'react';
import {View, Text, FlatList, StatusBar} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import currencies from '../data/currencies';
import ListItem from '../components/List/ListItem';
import {connect} from 'react-redux';
import {changeBaseCurrency, changeQuoteCurrency} from '../actions/currencies';
//import SearchBar from '../components/SearchBar/SearchBar';
import {SearchBar} from 'react-native-elements';
import { stringify } from 'querystring';

const TEMP_CURRENT_CURRENCY = 'CAD';

const styles = EStyleSheet.create({
    input: {
       
            height:40,
            fontSize:20,
            fontWeight: '900',
            color:'#fff',
            paddingHorizontal: 15,
       

    }
});


class CurrencyList extends Component{
    static propType ={
        navigation : PropTypes.object,
        dispatch : PropTypes.func,
        baseCurrency : PropTypes.string,
        quoteCurrency : PropTypes.string,
        primaryColor : PropTypes.string
    }

    constructor(){
        super();
        this.state = {data:[...currencies], previousData : [...currencies]}
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

    onChangeText = (text) => {
       
        let dataToBeFiltered = this.state.previousData;
        let filteredList = dataToBeFiltered.filter(function(el){
            return (el.toLowerCase().indexOf(text.toLowerCase()) != -1);
            
        })
        
        this.setState({data : [...filteredList]});

    };
    
    render(){
        let comparisonCurrency = this.props.baseCurrency;
        if(this.props.navigation.state.params.type === 'quote'){
            comparisonCurrency = this.props.quoteCurrency;
        }

        return (
            <View style={{flex :1}}>
                <StatusBar barStyle="default" translucent={false}/>
                <SearchBar
                maxLength={10}
                autoCapitalize="characters"
                autoCorrect={false}
                ref={search => this.search = search}
                inputStyle={styles.input}
                icon={{ type: 'font-awesome', name: 'search' }}
                placeholder='Enter Currency'
                round
                
                onChangeText = {this.onChangeText} />
                <FlatList 
                    keyboardShouldPersistTaps = "always"
                    data={this.state.data}
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