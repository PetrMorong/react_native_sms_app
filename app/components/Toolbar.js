/**
 * Created by Petr on 25.1.2017.
 */
import React, { Component } from 'react';
import { StyleSheet,  Text,  View, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ElevatedView from 'react-native-elevated-view'


export default class Toolbar extends Component {
    render() {
        let leftIcon;
        if(this.props.back){
            leftIcon = <TouchableNativeFeedback  onPress={(event) => this.navigateToScreen(this.props.backLink)} >
                <Icon style={styles.menuIcon} name="arrow-back" size={30}/>
            </TouchableNativeFeedback>;
        }else{
            leftIcon = <TouchableNativeFeedback   onPress={(event) => this.openMenu()} >
                <Icon style={styles.menuIcon} name="menu" size={30}/>
            </TouchableNativeFeedback>;

        }

        return (
            <ElevatedView style={styles[this.props.background]} elevation={this.props.elevation}>
                {leftIcon}
                <TouchableNativeFeedback onPress={(event) => this.openMenu()}>
                    <View style={{flex: 1}}>
                        <Text style={styles.screenName} >{this.props.title}</Text>
                    </View>
                </TouchableNativeFeedback>
                <Icon style={styles.creditIcon} name={this.props.icon} size={22}/>
                <Text style={styles.creditNumber}> {this.props.credit}</Text>
            </ElevatedView>
        );
    }

    openMenu(){
        this.props.openMenu();
    }

    navigateToScreen(link){
        this.props.navigator.push({
            ident: link
        })
    }
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#011D2B'
    },
    containerNoBg: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#064464'
    },
    menuIcon: {
        color: 'white',
    },
    screenName: {
        color: 'white',
        marginLeft: 15,
        fontSize: 18
    },
    creditIcon: {
        marginRight: 5,
        color: 'white',
    },
    creditNumber: {
        color: 'white',
        fontSize: 16
    }

});



