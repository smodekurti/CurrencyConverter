import React from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';
import CurrencyList from './screens/CurrencyList';
import Options from './screens/Options';
import Themes from './screens/Themes';
import Navigator from './config/routes';

EStyleSheet.build(
    {
        $primaryOrange:'#D57A66',
        $primaryGreen:'#00BD9D',
        $primaryPurple:'#9E7685',
        $primaryBlue: '#4F6D7A',

        $white:'#ffffff',
        $border: '#e2e2e2',
        $lightGray: '#f0f0f0',
        $darkText: '#343434'
        

    }
);


export default () => <Navigator />