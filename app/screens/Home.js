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
import {getInitialConversion} from '../actions/currencies';
import {connect} from 'react-redux';
import {ConnectAlert} from '../components/Alert/index';




//const DEFAULT_BASE_PRICE='100';
//const DEFAULT_QUOTE_PRICE='79.54';
//const DEFAULT_CONVERSION_RATE='.7954'

class Home extends Component{
    static propTypes = {
        navigation: PropTypes.object,
        dispatch:PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        amount: PropTypes.number,
        conversion: PropTypes.number,
        isFetching:PropTypes.bool,
        lastConvertedDate: PropTypes.object,
        primaryColor: PropTypes.string,
        currencyError : PropTypes.string,
        alertWithType : PropTypes.func

     }

     componentWillMount(){
        this.props.dispatch(getInitialConversion());
     }

     componentWillReceiveProps(nextProps){
         if(nextProps.currencyError && nextProps.currencyError != this.props.currencyError){
             this.props.alertWithType('error', 'Error',nextProps.currencyError);
         }
     }

    handlePressBaseCurr = () => {
        console.log('Base Currency Invoked');
        this.props.navigation.navigate('CurrencyList',{title : 'Base Currency', type : 'base'});

    }

    handleChangeAmountText = (amount) => {
        
        this.props.dispatch(changeCurrencyAmount(amount));
    }

    handlePressQuoteCurr = () => {
        console.log('Quote Currency Invoked');
        this.props.navigation.navigate('CurrencyList', {title : 'Quote Currency', type: 'quote'});
    }

    handleSwapCurrencies = () => {
        this.props.dispatch(swapCurrency());
    }

    handleSettings = () => {
        this.props.navigation.navigate("Options");
    }

    render(){

        let quoteCurrencyAmount = (this.props.amount * this.props.conversion).toFixed(2) || '0';

        if(this.props.isFetching){
            quoteCurrencyAmount='...';
        }
        

        return(
            <Container backgroundColor={this.props.primaryColor}>
                <StatusBar translucent={false} barStyle="light-content" />
                <Header onPress={this.handleSettings}/>
                <KeyboardAvoidingView behavior="padding"> 
                
                <Logo tintColor={this.props.primaryColor}/>
                <InputWithButton 
                    buttonText={this.props.baseCurrency}
                    onPress={this.handlePressBaseCurr}
                    defaultValue={this.props.amount.toString()}
                    onChangeText={this.handleChangeAmountText}
                    textColor = {this.props.primaryColor}/>
                <InputWithButton 
                    buttonText={this.props.quoteCurrency}
                    onPress={this.handlePressQuoteCurr}
                    defaultValue={quoteCurrencyAmount}
                    textColor = {this.props.primaryColor}
                    editable={false}/>
                <InformationText
                    baseCurrency = {this.props.baseCurrency}
                    targetCurrency={this.props.quoteCurrency}
                    conversionRate={this.props.conversion.toString()}
                    conversionDate={this.props.lastConvertedDate}
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
    const conversionSelector = state.currencies.conversions[baseCurrency] || {};
    const rates = conversionSelector.rates || {};
    return{
        baseCurrency,
        quoteCurrency,
        amount: state.currencies.amount,
        conversion : rates[quoteCurrency] || 0,
        isFetching: conversionSelector.isFetching,
        lastConvertedDate: (conversionSelector.date ? new Date(conversionSelector.date) : new Date()),
        primaryColor : state.themes.primaryColor,
        currencyError : state.currencies.error
         
    };
};


export default connect(mapStateToProps) (ConnectAlert(Home));
