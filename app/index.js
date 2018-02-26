import React from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';
import CurrencyList from './screens/CurrencyList';

EStyleSheet.build(
    {
        $primaryBlue: '#4F6D7A',
        $white:'#ffffff',
        $border: '#e2e2e2',
        $lightGray: '#f0f0f0',
        $darkText: '#343434'

    }
);


export default () => <CurrencyList />