/**
 * Created by Petr on 25.1.2017.
 */
import React, { Component } from 'react';
import { StyleSheet,  Text,  View, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ElevatedView from 'react-native-elevated-view'
import { connect } from 'react-redux';
import Color from '../config/Variables';
import { Actions } from 'react-native-router-flux';


const mapStateToProps = (store) => {
    return{
        credit: 853.7
    }
}

export default class Toolbar extends Component {
    render() {
        let leftIcon;
        if(this.props.back){
            leftIcon = <TouchableWithoutFeedback  onPress={(event) => Actions.pop()} >
                <Icon style={styles.menuIcon} name="arrow-back" size={30}/>
            </TouchableWithoutFeedback>;
        }else{
            leftIcon = <TouchableWithoutFeedback   onPress={(event) => this.openMenu()} >
                <Icon style={styles.menuIcon} name="menu" size={30}/>
            </TouchableWithoutFeedback>;

        }

        let title;
        if(this.props.back){
            title = <TouchableWithoutFeedback onPress={(event) => Actions.pop()}>
                <View style={{flex: 1}}>
                    <Text style={styles.screenName} >{this.props.title}</Text>
                </View>
            </TouchableWithoutFeedback>;
        }else{
            title = <TouchableWithoutFeedback onPress={(event) => this.openMenu()}>
                <View style={{flex: 1}}>
                    <Text style={styles.screenName} >{this.props.title}</Text>
                </View>
            </TouchableWithoutFeedback>;

        }


        return (
            <ElevatedView style={styles[this.props.background]} elevation={this.props.elevation}>
                {leftIcon}
                {title}
                <Icon style={styles.creditIcon} name='account-balance-wallet' size={22}/>
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
        backgroundColor: Color.toolbar
    },
    containerNoBg: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: Color.secondaryColor
    },
    menuIcon: {
        color: Color.toolbarText,
    },
    screenName: {
        color: Color.toolbarText,
        marginLeft: 15,
        fontSize: 18
    },
    creditIcon: {
        marginRight: 5,
        color: Color.toolbarText,
    },
    creditNumber: {
        color: Color.toolbarText,
        fontSize: 16
    }

});

module.exports = connect(mapStateToProps)(Toolbar);


