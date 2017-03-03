/**
 * Created by Petr on 9.2.2017.
 */
import React, { Component } from 'react';
import { StyleSheet, Button,  Text, Picker, View, Image, Switch,  Dimensions, TextInput, TouchableNativeFeedback, ScrollView, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class ContactVerification extends Component{
    constructor(props){
        super(props)
        this.state = {
            verifyPhone: false,
            typeCodePhone: false

        }
    }

    render(){
        let verifyPhoneButton;
        if(!this.state.verifyPhone){
            verifyPhoneButton = <Button
                elevation={2}
                color="#BE2166"
                title="VERIFY"
                onPress={() => this.setStateVerifyPhone()}/>
        }

        let sendCodePhone;
        if(this.state.verifyPhone && !this.state.typeCodePhone){
            sendCodePhone = <View style={{marginLeft: 50, flexDirection: 'row', marginTop: 10, marginBottom: 15}}>
                <View style={{flex: 1}}>
                    <Text>Verification code will be</Text>
                    <Text>sent to your number</Text>
                </View>
                <View style={{width: 80}}>
                    <Button
                        elevation={2}
                        color="#BE2166"
                        title="send"
                        onPress={() => this.setStateTypeCodePhone()}/>
                </View>
            </View>
        }

        let typeCodePhone;
        if(this.state.typeCodePhone){
           typeCodePhone = <View style={{marginLeft: 50, flexDirection: 'row', marginTop: 10, marginBottom: 15}}>
            <View style={{flex: 1}}>
                <TextInput
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    keyboardType='numeric'
                    style={{flex: 1, marginRight: 10, }}
                    placeholder='Code'
                />
            </View>
            <View style={{width: 80}}>
            <Button
                elevation={2}
                color="#BE2166"
                title="OK"
                onPress={() => this.navigateToScreen('Profile')}/>
            </View>
            </View>
        }
        return(
            <View style={styles.container}>
                <TouchableNativeFeedback onPress={() => this.navigateToScreen('CustomerSms')}>
                    <View style={[styles.border]}>
                        <View style={styles.row}>
                            <Icon name="phone-android" size={30} style={{color: '#BE2166'}}/>
                            <View style={{flex: 1}}>
                                <View style={styles.a}>
                                    <View>
                                        <Text>Phone number</Text>
                                        <Text style={{color: '#064769',fontWeight: '500', fontSize: 16}}>+420 589 654 478</Text>
                                    </View>
                                    <View style={{width: 80}}>
                                        {verifyPhoneButton}
                                    </View>
                                </View>
                            </View>
                        </View>
                        {sendCodePhone}
                        {typeCodePhone}
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() => this.navigateToScreen('CustomerEmail')}>
                    <View style={styles.row}>
                        <Icon name="mail-outline" size={30} style={{color: '#BE2166'}}/>
                        <View style={styles.a}>
                            <View>
                                <Text>E-mail address</Text>
                                <Text style={{color: '#064769',fontWeight: '500', fontSize: 16}}>gnorom1@seznam.cz</Text>
                            </View>
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

    setStateVerifyPhone(){
        this.setState({verifyPhone: !this.state.verifyPhone})
    }

    setStateTypeCodePhone(){
        this.setState({typeCodePhone: true})
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
        height: 80
    },
    a: {
        flexDirection: 'row',
        marginLeft: 25,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    b: {
        color: '#4CAF50'
    }
});