import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';

const DEFAULT_HEIGHT=48;
const DEFAULT_RADIUS = 4;


export default EStyleSheet.create(
    {

        $buttonBackgroundColorBase : '$white',
        $buttonBackgroundColorModifier: 3.0,
        container: {
            flexDirection: 'row',
            backgroundColor: '$white',
            width: '90%',
            height: DEFAULT_HEIGHT,
            borderRadius: DEFAULT_RADIUS,
            alignItems: 'center',
            marginVertical: 11


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
            fontSize: '20',
            paddingHorizontal: 16

        },
        input: {
            flex:3,
            height: DEFAULT_HEIGHT,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '$white',
            borderTopRightRadius: DEFAULT_RADIUS,
            borderBottomRightRadius: DEFAULT_RADIUS,
            fontSize:20,
            fontWeight: '600',
            color:'$primaryBlue',
            paddingHorizontal: 8,

        },
        border:{
            height:DEFAULT_HEIGHT,
            width:1,
            backgroundColor: '$border'
        }

    }
)   