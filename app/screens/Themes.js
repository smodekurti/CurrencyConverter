import React, {Component} from 'react';
import {ScrollView, StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import ListItem from '../components/List/ListItem';

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    $blue:   '$primaryBlue',
    $orange: '$primaryOrange',
    $green:  '$primaryGreen',
    $purple: '$primaryPurple'
});



class Themes extends Component{
    static propTypes = {
        navigation: PropTypes.object,
     }

    handleThemePress = (color) => {
        this.props.navigation.goBack();
    }

    render(){
        return (
            <ScrollView>
                <StatusBar translucent={false} barStyle="default" />
                <ListItem
                    itemText="Blue"
                    onPress = {() =>this.handleThemePress(styles.$blue)}
                    selected = {true}
                    iconBackground={styles.$blue}
                />
                <ListItem
                    itemText="Orange"
                    onPress = {() =>this.handleThemePress(styles.$orange)}
                    selected = {true}
                    iconBackground={styles.$orange}
                />
                <ListItem
                    itemText="Green"
                    onPress = {() =>this.handleThemePress(styles.$green)}
                    selected = {true}
                    iconBackground={styles.$green}
                />
                <ListItem
                    itemText="Purple"
                    onPress = {() =>this.handleThemePress(styles.$purple)}
                    selected = {true}
                    iconBackground={styles.$purple}
                />
            </ScrollView>
        );
    }


}

export default Themes;