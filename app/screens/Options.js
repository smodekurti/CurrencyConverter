import React, { Component } from "react";
import {ScrollView, StatusBar, Platform, Linking} from 'react-native';
import PropTypes from 'prop-types';
import ListItem from '../components/List/ListItem';
import { ConnectAlert } from '../components/Alert';
import {Ionicons} from '@expo/vector-icons';


const ICON_COLOR= '#868686';
const ICON_SIZE = 23;
const OS = Platform.OS == "ios" ? "ios" : "md";

class Options extends Component {

    static propTypes = {
        navigation: PropTypes.object,
        alertWithType: PropTypes.func,
     }

    handlePressThemes = () =>{
        this.props.navigation.navigate("Themes");
    }

    handlePressLink = () => {
        Linking.openURL('http://fixer.io').then().catch(() => this.props.alertWithType('error', 'Sorry!', "Fixer.io can't be opened right now."));
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

export default ConnectAlert(Options);