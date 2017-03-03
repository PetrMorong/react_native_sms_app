/**
 * Created by Petr on 15.2.2017.
 */
import React, { Component } from 'react';
import { StyleSheet, Modal,  Button,  Text, Picker, View, Image, Switch,  Dimensions, TextInput, TouchableNativeFeedback, TouchableWithoutFeedback, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ElevatedView from 'react-native-elevated-view'

const window = Dimensions.get('window');

export default class Order extends Component{
    render(){
        return(
            <ScrollView style={styles.container}>
                <View style={styles.toolbarContainer}>
                    <TouchableNativeFeedback onPress={() => this.navigateToScreen('OrderList')}>
                        <Icon style={{color: 'white'}} name="arrow-back" size={25}/>
                    </TouchableNativeFeedback>
                    <View style={{flex: 1}}>
                        <Text style={styles.orderIdText}>Order ID: 99</Text>
                    </View>
                    <Icon style={styles.actionIcon} name="mail-outline" size={25} />
                    <Icon style={styles.actionIcon} name="textsms" size={25} />
                    <Icon style={styles.actionIcon} name="phone" size={25} />
                </View>
                <Image style={styles.coverImage} source={require('../../images/guitarCover.jpg')}/>
                <View style={styles.orderMiddle}>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                        <Text style={{color: '#31A096', fontSize: 23}}>Old school guitar</Text>
                        <Text style={{color: '#31A096', fontSize: 14, paddingLeft: 10}}>2ks</Text>
                    </View>
                    <Text style={{color: 'white', fontSize: 20}}>1500 $</Text>
                </View>
                <View style={styles.actionStatus} elavation={2}>
                    <Icon name="done" size={35} style={{color: 'white'}}/>
                </View>
                <View style={{padding: 15}}>
                    <Text style={{color: '#011D2B', fontWeight: '500'}}>Customer</Text>
                    <View style={styles.row}>
                        <Icon name="person" size={20} style={styles.customerIcon}/>
                        <Text style={styles.textHighlight}>Petr Morong</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="phone" size={20} style={styles.customerIcon}/>
                        <Text style={styles.textHighlight}>+420 654 489 135</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="mail" size={20} style={styles.customerIcon}/>
                        <Text style={styles.textHighlight}>moriandr73@gmail.com</Text>
                    </View>
                </View>
                <View style={styles.separator}/>
                <View style={{padding: 15}}>
                    <Text style={{color: '#011D2B', fontWeight: '500'}}>Location</Text>
                    <View style={styles.row}>
                        <Text style={styles.textHighlight}>Revoluční 34</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.textHighlight}>Šumperk, 787 01</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.textHighlight}>Czech republic</Text>
                    </View>
                </View>
                <View style={styles.separator}/>
                <View style={{padding: 15}}>
                    <Text style={{color: '#011D2B', fontWeight: '500'}}>Company</Text>
                    <View style={styles.row}>
                        <Text style={styles.textHighlight}>TOP efekt</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.textHighlight}>ID: 1212546546</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.textHighlight}>VAT: 546546546</Text>
                    </View>
                </View>
                <View style={styles.gradient}>
                    <Image style={styles.gradient} source={require('../../images/gradientBackground.png')} resizeMode='stretch' />
                </View>
            </ScrollView>
        )
    }

    navigateToScreen(link){
        this.props.navigator.push({
            ident: link
        })
    }

}

const styles = StyleSheet.create({
    toolbarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        padding: 15,
        position: 'absolute',
        top: 0,
        zIndex: 20,
        width: window.width
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
        position: 'relative'
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'
    },
    coverImage: {
        width: window.width,
        height: window.height/3 + 60
    },
    orderMiddle: {
        backgroundColor: '#064464',
        height: 100,
        padding: 15,
        zIndex: 12,
        justifyContent: 'center'
    },
    actionIcon: {
        color: 'white',
        paddingLeft: 10,
        paddingRight: 10
    },
    orderIdText: {
        color: 'white',
        marginLeft: 15,
        fontSize: 18
    },
    actionStatus: {
        position: 'absolute',
        width: 55,
        height: 55,
        borderRadius: 50,
        top: window.height / 3 + 130,
        right: 20,
        backgroundColor: '#BE2166',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99,
        elevation: 2
    },
    customerIcon: {
        marginRight: 10,
    },
    textHighlight: {
        fontSize: 16
    },
    row: {
        flexDirection: 'row',
        marginTop: 10
    },
    gradient: {
        position: 'absolute',
        top: 0,
        height: window.height/3 + 60,
        width: window.width
    }
});