/**
 * Created by Petr on 1.2.2017.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Modal,
    Button,
    Text,
    Picker,
    View,
    Image,
    Switch,
    Dimensions,
    TextInput,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    ScrollView,
    DrawerLayoutAndroid
} from 'react-native';
import Menu from '../../components/Menu';
import Toolbar from '../../components/Toolbar';
import Color from '../../config/Variables';
import { connect } from 'react-redux';
import { save } from '../../actions/Actions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import Step from '../../components/StepperSingleStep';

const window = Dimensions.get('window');

const mapStateToProps = (store) => {
    return{
        _: store.translator.translations
    }
}

export default class KeypadRecipients extends Component{
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
        const _=this.props._;
        let menu  = <Menu/>;

        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                ref={(_drawer) => this.drawer = _drawer}
                renderNavigationView={() => menu}>
                <Toolbar
                    openMenu={() => this.drawer.openDrawer()}
                    background="containerNoBg"
                    title={_.campaign}
                    elevation={2}
                    back={true}/>
                <ScrollView>
                    <View style={{height: window.height - 70, backgroundColor: 'white'}}>
                        <View style={{backgroundColor: Color.secondaryColor, height: window.height/3, alignItems: 'center' }}>
                            <Icon name="person" size={200} style={{color: 'white'}}/>
                        </View>
                        <View style={{flex: 1, padding: 15}}>
                            <View style={styles.recipientSmallWrap}>
                                <TextInput
                                    style={styles.firstName}
                                    placeholder={_.first_name}
                                    ref="firstName"
                                    onChangeText={(firstName) => this.setState({firstName})}
                                    value={this.state.firstName}/>
                                <TextInput
                                    style={styles.lastName}
                                    placeholder={_.last_name}
                                    ref="lastName"
                                    onChangeText={(lastName) => this.setState({lastName})}
                                    value={this.state.lastName}/>
                            </View>
                            <TextInput
                                style={styles.phoneNumber}
                                keyboardType='numeric'
                                placeholder={_.phone_number}
                                ref="phoneNumber"
                                onChangeText={(phoneNumber) => {this.setState({phoneNumber}); this.phoneNumberCheck(phoneNumber)}}
                                value={this.state.phoneNumber}/>
                            <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                                <TouchableNativeFeedback onPress={() => Actions.pop()}>
                                    <View style={styles.buttonWrap}>
                                        <Text style={styles.buttonText}>{_.next.toUpperCase()}</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </DrawerLayoutAndroid>
        );

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
        borderRadius: 2,
        backgroundColor: Color.button,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        marginBottom: 15
    },
    buttonText: {
        fontSize: 17,
        fontWeight: '500',
        color: Color.buttonText
    }

});

module.exports = connect(mapStateToProps)(KeypadRecipients);
