import React , {Component} from 'react';
import {View, Text, StatusBar, KeyboardAvoidingView} from 'react-native';
import PropTypes from 'prop-types';
import Container from '../components/Container/container';
import Logo from '../components/Logo/Logo';
import InputWithButton from '../components/InputWithButton/InputWithButton';
import LastConverted from '../components/Buttons/LastConverted'
import InformationText from '../components/Text/InformationText';
import Header from '../components/Header/Header';
import {swapCurrency, changeCurrencyAmount} from '../actions/currencies';
import {connect} from 'react-redux';



const DEFAULT_BASE_PRICE='100';
const DEFAULT_QUOTE_PRICE='79.54';
const DEFAULT_CONVERSION_RATE='.7954'

class Home extends Component{
    static propTypes = {
        navigation: PropTypes.object,
        dispatch:PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        conversion: PropTypes.number
     }

    handlePressBaseCurr = () => {
        console.log('Base Currency Invoked');
        this.props.navigation.navigate('CurrencyList',{title : 'Base Currency'});

    }

    handleChangeAmountText = (amount) => {
        
        this.props.dispatch(changeCurrencyAmount(amount));
    }

    handlePressQuoteCurr = () => {
        console.log('Quote Currency Invoked');
        this.props.navigation.navigate('CurrencyList', {title : 'Quote Currency'});
    }

    handleSwapCurrencies = () => {
        this.props.dispatch(swapCurrency());
    }

    handleSettings = () => {
        this.props.navigation.navigate("Options");
    }

    render(){
        return(
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
                <Header onPress={this.handleSettings}/>
                <KeyboardAvoidingView behavior="padding"> 
                
                <Logo />
                <InputWithButton 
                    buttonText={this.props.baseCurrency}
                    onPress={this.handlePressBaseCurr}
                    defaultValue={DEFAULT_BASE_PRICE}
                    onChangeText={this.handleChangeAmountText}/>
                <InputWithButton 
                    buttonText={this.props.quoteCurrency}
                    onPress={this.handlePressQuoteCurr}
                    defaultValue={DEFAULT_QUOTE_PRICE}
                    editable={false}/>
                <InformationText
                    baseCurrency = {this.props.baseCurrency}
                    targetCurrency={this.props.quoteCurrency}
                    conversionRate={Math.round((DEFAULT_QUOTE_PRICE/DEFAULT_BASE_PRICE)*10000)/10000}
                    conversionDate={new Date()}
                />
                <LastConverted 
                    actionText="Reverse Currencies"
                    onPress={this.handleSwapCurrencies}
                />
                </KeyboardAvoidingView>
                
                
            </Container>
        )
}

}

const mapStateToProps = (state) => {
    const baseCurrency = state.currencies.baseCurrency;
    const quoteCurrency = state.currencies.quoteCurrency;;
    
    return{
        baseCurrency,
        quoteCurrency,
         
    };
};


export default connect(mapStateToProps) (Home);
