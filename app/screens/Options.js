import React, { Component } from "react";
import {ScrollView, StatusBar, Platform} from 'react-native';
import ListItem from '../components/List/ListItem';
import {Ionicons} from '@expo/vector-icons';


const ICON_COLOR= '#868686';
const ICON_SIZE = 23;
const OS = Platform.OS == "ios" ? "ios" : "md";

class Options extends Component {

    handlePressThemes(){

    }

    handlePressLink(){

    }

    render(){
        return (
            <ScrollView>
                <StatusBar translucent={false} barStyle="default" /> 
                <ListItem 
                itemText = 'Themes'
                onPress={this.handlePressThemes}
                customIcon = {
                    <Ionicons color={ICON_COLOR} size={ICON_SIZE} name={`${OS}-arrow-forward`} />
                }
                />

                <ListItem 
                itemText = 'Fixer.io'
                onPress={this.handlePressLink}
                customIcon = {
                    <Ionicons color={ICON_COLOR} size={ICON_SIZE} name={`${OS}-link`} />
                }
                />
                
            </ScrollView>
        );
    }
}

export default Options;