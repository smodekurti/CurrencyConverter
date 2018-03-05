import {SWAP_CURRENCY, CHANGE_CURRENCY_AMOUNT} from '../actions/currencies';
import {swapCurrency, changeCurrencyAmount} from '../actions/currencies';

const initialState = {
    baseCurrency : 'USD',
    quoteCurrency: 'GBP',
    amount : 100,
    conversions: {}
};

const reducer = (state=initialState, action) => {

    switch (action.type) {
        
        case CHANGE_CURRENCY_AMOUNT: 
            return {
                ...state, 
                amount : action.amount || 0
            };
        case SWAP_CURRENCY: 

            return {
                ...state,
                baseCurrency: state.quoteCurrency,
                quoteCurrency: state.baseCurrency,
            };
        
        default:
            return state;
 }
};

// console.log("Initial State", initialState);
// console.log("SwapCurrency", reducer(initialState, swapCurrency()));
// console.log("Change Currency Amount", reducer(initialState, changeCurrencyAmount(200)));

export default reducer;