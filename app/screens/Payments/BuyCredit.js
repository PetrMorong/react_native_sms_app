/**
 * Created by Petr on 16.2.2017.
 */
import React, { Component } from 'react';
import { StyleSheet, Modal,  Button,  Text, Picker, View, Image, Switch,  Dimensions, TextInput, TouchableNativeFeedback, TouchableWithoutFeedback, ScrollView} from 'react-native';

const window = Dimensions.get('window');

export default class BuyCredit extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={{alignItems: 'center', justifyContent: 'center', zIndex: 100}}>
                    <Image resizeMode='stretch' source={require('../../images/BuyCredit.png')} style={{marginTop: -30, width: 430, height: 450}}/>
                </View>
                <View style={styles.backgroundCardImage}/>
                <View style={styles.choosePayment}>
                    <View style={styles.row}>
                        <Image resizeMode='stretch' style={{width: 55, height: 50, marginRight: 20}} source={require('../../images/visa.png')}/>
                        <Text style={styles.text}>Credit cards</Text>
                    </View>
                    <View style={styles.separator}/>
                    <View style={styles.row}>
                        <Image resizeMode='stretch' style={{width: 55, height: 40, marginRight: 20}} source={require('../../images/bank.jpg')}/>
                        <Text style={styles.text}>Bank transfers</Text>
                    </View>
                    <View style={styles.separator}/>
                    <View style={styles.row}>
                        <Image resizeMode='stretch' style={{width: 55, height: 50, marginRight: 20}} source={require('../../images/paypal.jpg')}/>
                        <Text style={styles.text}>PayPal</Text>
                    </View>
                    <View style={styles.separator}/>
                    <View style={styles.row}>
                        <Image resizeMode='stretch' style={{width: 55, height: 50, marginRight: 20}} source={require('../../images/skrill.jpg')}/>
                        <Text style={styles.text}>Skrill</Text>
                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: 'white'
   },
    backgroundCardImage: {
       backgroundColor: '#064464',
        position: 'absolute',
        top: 0,
        height: window.height/3 + 20,
        width: window.width
   },
   choosePayment: {
       position: 'absolute',
       top: window.height/3 + 20,
       padding: 15
   },
    text: {
       fontSize: 18,
        color: '#6A6861'
    },
    row: {
       flexDirection: 'row',
        alignItems: 'center',
        width: window.width,
        height: 65
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'
    },




});