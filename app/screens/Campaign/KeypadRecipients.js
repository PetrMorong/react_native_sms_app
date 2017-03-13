/**
 * Created by Petr on 1.2.2017.
 */

import React, { Component } from 'react';
import { StyleSheet, Button, Dimensions, Text,  View, Image, ActivityIndicator, TextInput, TouchableNativeFeedback,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const window = Dimensions.get('window');

export default class KeypadRecipient extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            recipientButtonDisabled: true
        }
    }
    render(){
        return(
            <ScrollView>
                <View style={{height: window.height - 70, backgroundColor: 'white'}}>
                    <View style={{backgroundColor: '#064464', height: window.height/3, alignItems: 'center' }}>
                        <Icon name="person" size={200} style={{color: 'white'}}/>
                    </View>
                    <View style={{flex: 1, padding: 15}}>
                        <View style={styles.recipientSmallWrap}>
                            <TextInput
                                style={styles.firstName}
                                placeholder='First name'
                                ref="firstName"
                                onChangeText={(firstName) => this.setState({firstName})}
                                value={this.state.firstName}/>
                            <TextInput
                                style={styles.lastName}
                                placeholder='Last name'
                                ref="lastName"
                                onChangeText={(lastName) => this.setState({lastName})}
                                value={this.state.lastName}/>
                        </View>
                        <TextInput
                            style={styles.phoneNumber}
                            keyboardType='numeric'
                            placeholder='Phone number'
                            ref="phoneNumber"
                            onChangeText={(phoneNumber) => {this.setState({phoneNumber}); this.phoneNumberCheck(phoneNumber)}}
                            value={this.state.phoneNumber}/>
                        <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                            <View style={{width: 110, paddingRight: 15, paddingBottom: 15}}>
                                <Button
                                    elevation={2}
                                    color="#BE2166"
                                    title="save"
                                    onPress={() => this.navigateToScreen('Profile')}/>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }

    saveRecipient(){

    }

    phoneNumberCheck(phoneNumber){
        if(!phoneNumber){
            this.setState({recipientButtonDisabled: true})
        }else{
            this.setState({recipientButtonDisabled: false})
        }
    }
}

const styles = StyleSheet.create({
    recipientSmallWrap: {
        flexDirection: 'row',
    },
    firstName: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5
    },
    lastName: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5
    },
    phoneNumber: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'
    },

    buttonWrap: {
        width: 110,
        paddingTop: 12,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        flex: 1
    }
})