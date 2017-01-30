/**
 * Created by Petr on 25.1.2017.
 */
import React, { Component } from 'react';
import { StyleSheet,  Text,  View, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Toolbar extends Component {
    render() {
        return (
            <View style={styles[this.props.background]}>
                <TouchableNativeFeedback underlayColor = {'red'}  onPress={(event) => this.openMenu()} >
                    <Icon style={styles.menuIcon} name="menu" size={30}/>
                </TouchableNativeFeedback>
                <View style={{flex: 1}}>
                    <Text style={styles.screenName} >{this.props.title}</Text>
                </View>
                <Icon style={styles.creditIcon} name={this.props.icon} size={25}/>
                <Text style={styles.creditNumber}> {this.props.credit}</Text>
            </View>
        );
    }

    openMenu(){
        this.props.openMenu();
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
        marginLeft: 20,
        fontSize: 20
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



