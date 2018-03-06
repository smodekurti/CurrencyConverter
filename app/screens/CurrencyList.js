import React , {Component} from 'react';
import {View, Text, FlatList, StatusBar} from 'react-native';
import currencies from '../data/currencies';
import ListItem from '../components/List/ListItem';
import {connect} from 'react-redux';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component{

    handleListItemSelected = () => (
        
        this.props.navigation.goBack()
    )
    render(){
        return (
            <View style={{flex :1}}>
                <StatusBar barStyle="default" translucent={false}/>
                <FlatList 
                    data={currencies}
                    renderItem = {({ item }) => (
                        <ListItem
                        itemText={item}
                        selected = {item === TEMP_CURRENT_CURRENCY}
                        onPress = {this.handleListItemSelected}
                        checkmark={true}
                    />
                    )}
                    keyExtractor = {(item) => item}
                />

            </View>
        );
    }

}



export default CurrencyList;