import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

const imageWidth = Dimensions.get('window').width/2;

export default EStyleSheet.create(
    {
        container: {
         
            alignItems: 'center',
         },
        containerImages: {
            
            alignItems: 'center',
            justifyContent: 'center',
            width: imageWidth,
        },
        image:{
            opacity: 0.8,
            backgroundColor: 'rgba(0,0,0,0)',
            width:imageWidth/2
        },
        text: {
            
            fontWeight: '600',
            fontSize: 28,
            letterSpacing:-0.5,
            color: '$white',
            marginTop:15

        }

    }
)   