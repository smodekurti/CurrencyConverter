import {swapCurrency, changeBaseCurrency, getInitialConversion}  from '../actions/currencies';
import {SWAP_CURRENCY, CHANGE_BASE_CURRENCY, GET_INITIAL_CONVERSION, CONVERSION_ERROR, CONVERSION_RESULT} from '../actions/currencies';
import {takeEvery, select, call, put} from 'redux-saga/effects';


const getLatestRate = currency => fetch(`http://api.fixer.io/latest?base=${currency}`);

function* fetchInitialConversionRates(action) {
    
    try{
        let currency = action.currency;
        if(currency === undefined){
            currency = yield select(state => state.currencies.baseCurrency)
        } 

        const response = yield call(getLatestRate, currency);

        let result = yield response.json();
        if(result.error){
            console.log("Could not call API ", error);
            yield put({type: CONVERSION_ERROR, error: result.error});
        }
        else{
            console.log(result);
            yield put({type: CONVERSION_RESULT, result});
        }
       
    }catch(error){
        console.log(error);
        yield put({type: CONVERSION_ERROR, error: error.message});
    }
   
}


export default function* rootSaga(){
    yield takeEvery(GET_INITIAL_CONVERSION, fetchInitialConversionRates);
    yield takeEvery(SWAP_CURRENCY, fetchInitialConversionRates);
    yield takeEvery(CHANGE_BASE_CURRENCY, fetchInitialConversionRates);
}