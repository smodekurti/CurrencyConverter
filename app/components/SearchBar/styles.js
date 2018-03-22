import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions, StatusBar} from 'react-native';
import {StyleSheet} from 'react-native';

const DEFAULT_HEIGHT=38
const DEFAULT_RADIUS = 20;


export default EStyleSheet.create(
    {

        $buttonBackgroundColorBase : '$white',
        $buttonBackgroundColorModifier: 10.0,
        container: {
            flexDirection: 'row',
            backgroundColor: '$white',
            width: '95%',
            height: DEFAULT_HEIGHT,
            borderRadius: DEFAULT_RADIUS,
            alignItems: 'center',
            marginVertical: 5,
            marginHorizontal:10


        },
        containerDisabled: {
            backgroundColor: '$lightGray',
        },
        buttonContainer:{
            flex:1,
            height: DEFAULT_HEIGHT,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '$white',
            borderTopLeftRadius: DEFAULT_RADIUS,
            borderBottomLeftRadius: DEFAULT_RADIUS
            

        },
        buttonText:{
            fontWeight: '600',
            color:'$primaryBlue',
            fontSize: 20,
            paddingHorizontal: 16

        },
        input: {
            flex:4,
            height: DEFAULT_HEIGHT,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '$white',
            borderRadius: DEFAULT_RADIUS,
            fontSize:20,
            fontWeight: '600',
            color:'$primaryBlue',
            paddingHorizontal: 8,

        },
        border:{
            height:DEFAULT_HEIGHT,
            width:0,
            backgroundColor: '$border'
        }

    }
)   