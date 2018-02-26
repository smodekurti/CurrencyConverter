import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions, StyleSheet} from 'react-native';

const DEFAULT_WIDTH=Dimensions.get('window').width;

export default EStyleSheet.create(
    {
        container: {
            
            alignItems: 'center'
        },
        row:{
            paddingHorizontal:20,
            paddingVertical:16,
            flexDirection: 'row',
            justifyContent:'space-between',
            alignItems : 'center',
            backgroundColor: '$white'
        },
        icon: {
            backgroundColor: 'transparent',
            width:30,
            height:30,
            borderRadius:15,
            justifyContent: 'center',
            alignItems: 'center'
        },
        iconVisible: {
            backgroundColor: '$primaryBlue',
          
        },
        imageStyle:{
            width:20,
            
        },
        text: {
           
            fontSize:16,
            fontWeight: '600',
            paddingVertical: 14,
            color: '$darkText'
           
        },
        border:{
            marginLeft: 20,
            height:1,
            backgroundColor: '$border'
        },
        

    }
)