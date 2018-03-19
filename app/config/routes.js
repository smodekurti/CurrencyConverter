import { StackNavigator } from 'react-navigation';
import {StatusBar} from 'react-native';
import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

export const HomeStackNavigator = StackNavigator({
    Home : {
        screen : Home,
        navigationOptions : {
            header : () => null
        },
    },
    Options : {
        screen: Options,
        navigationOptions : {
            headerTitle : 'Options',
        }
    },
    Themes: {
        screen : Themes,
        navigationOptions : {
            headerTitle: 'Themes'
        }
    }
},
{
    headerMode: 'screen'
},
)

export default StackNavigator({
    Home : {
        screen : HomeStackNavigator,
        navigationOptions : {
            header : () => null
        },
       
    },
    CurrencyList : {
        screen : CurrencyList,
        navigationOptions : ({ navigation }) => ({
            headerTitle: navigation.state.params.title
        })

    }
    
},
{
    mode: 'modal'
},

{
    cardStyle:{
        paddingTop:StatusBar.currentHeight
    },
}

);