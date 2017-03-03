/**
 * Created by Petr on 9.2.2017.
 */
import React, { Component } from 'react';
import { StyleSheet, Button,  Text, Picker, View, Image, Switch,  Dimensions, TextInput, TouchableNativeFeedback, ScrollView, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class Notifications extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={{color: '#011D2B', fontWeight: '500', fontSize: 18}}>Customer</Text>
                <TouchableNativeFeedback onPress={() => this.navigateToScreen('CustomerSms')}>
                    <View style={styles.row}>
                        <Icon name="textsms" size={25} style={{color: '#BE2166'}}/>
                        <View style={[styles.a, styles.border]}>
                            <Text style={{color: 'black', fontSize: 16}}>SMS</Text>
                            <Icon name="check-circle" size={25} style={styles.b}/>
                        </View>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() => this.navigateToScreen('CustomerEmail')}>
                    <View style={styles.row}>
                        <Icon name="mail-outline" size={25} style={{color: '#BE2166'}}/>
                        <View style={styles.a}>
                            <Text style={{color: 'black', fontSize: 16}}>Email</Text>
                            <Icon name="check-circle" size={25} style={styles.b}/>
                        </View>
                    </View>
                </TouchableNativeFeedback>

                <Text style={{color: '#011D2B', fontWeight: '500', fontSize: 18, marginTop: 25}}>Shop owner</Text>
                <TouchableNativeFeedback onPress={() => this.navigateToScreen('OwnerSms')}>
                    <View style={styles.row}>
                        <Icon name="textsms" size={25} style={{color: '#BE2166'}}/>
                        <View style={[styles.a, styles.border]}>
                            <Text style={{color: 'black', fontSize: 16}}>SMS</Text>
                            <Icon name="check-circle" size={25} style={styles.b}/>
                        </View>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() => this.navigateToScreen('OwnerEmail')}>
                    <View style={styles.row}>
                        <Icon name="mail-outline" size={25} style={{color: '#BE2166'}}/>
                        <View style={styles.a}>
                            <Text style={{color: 'black', fontSize: 16}}>Email</Text>
                            <Icon name="check-circle" size={25} style={styles.b}/>
                        </View>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    navigateToScreen(link){
        this.props.navigator.push({
            ident: link
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 70
    },
    a: {
        height: 70,
        flexDirection: 'row',
        marginLeft: 25,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'
    },
    b: {
        color: '#4CAF50'
    }
});