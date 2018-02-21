import React , {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import Container from '../components/Container/container';
import Logo from '../components/Logo/Logo';
import InputWithButton from '../components/InputWithButton/InputWithButton';
import SwapButton from '../components/Buttons/ReverseCurrenciesButton'
import InformationText from '../components/Text/InformationText';


const DEFAULT_BASE_CURR = 'USD';
const DEFAULT_QUOTE_CURR= 'GBP';
const DEFAULT_BASE_PRICE='100';
const DEFAULT_QUOTE_PRICE='79.54';
const DEFAULT_CONVERSION_RATE='.7954'

class Home extends Component{

    handlePressBaseCurr(){
        console.log('Base Currency Invoked');
    }

    handlePressQuoteCurr(){
        console.log('Quote Currency Invoked');
    }

    handleSwapCurrencies(){
        console.log('Currency Swap Button Invoked');
    }

    render(){
        return(
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
                <Logo />
                <InputWithButton 
                    buttonText={DEFAULT_BASE_CURR}
                    onPress={this.handlePressBaseCurr}
                    defaultValue={DEFAULT_BASE_PRICE}/>
                <InputWithButton 
                    buttonText={DEFAULT_QUOTE_CURR}
                    onPress={this.handlePressBaseCurr}
                    defaultValue={DEFAULT_QUOTE_PRICE}
                    editable={false}/>
                <InformationText
                    baseCurrency = {DEFAULT_BASE_CURR}
                    targetCurrency={DEFAULT_QUOTE_CURR}
                    conversionRate={Math.round(DEFAULT_QUOTE_PRICE/DEFAULT_BASE_PRICE*10000)/10000}
                    conversionDate={new Date()}
                />
                <SwapButton 
                    actionText="Reverse Currencies"
                    onPress={this.handleSwapCurrencies}
                />
            </Container>
        )
}

}

export default Home;
