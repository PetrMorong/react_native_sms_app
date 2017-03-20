/**
 * Created by Petr on 9.2.2017.
 */
import Icon from 'react-native-vector-icons/MaterialIcons';

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
import { save } from '../../actions/Actions'

const window = Dimensions.get('window');

const mapStateToProps = (store) => {
    return {
        _: store.translator.translations,
        user: store.user.user
    }
}


export default class ContactVerification extends Component{
    constructor(props){
        super(props)
        this.state = {
            verifyPhone: false,
            typeCodePhone: false

        }
    }

    render() {
        let menu  = <Menu/>;

        let verifyPhoneButton;
        if(!this.state.verifyPhone){
            verifyPhoneButton = <TouchableNativeFeedback onPress={() => this.setStateVerifyPhone()}>
                <View style={styles.buttonWrap}>
                    <Text style={styles.buttonText}>{_('verify').toUpperCase()}</Text>
                </View>
            </TouchableNativeFeedback>
        }

        let sendCodePhone;
        if(this.state.verifyPhone && !this.state.typeCodePhone){
            sendCodePhone = <View style={{marginLeft: 50, flexDirection: 'row', marginTop: 10, marginBottom: 15}}>
                <View style={{flex: 1}}>
                    <Text>{_('Verification code will be')}</Text>
                    <Text>{_('sent to your number')}</Text>
                </View>
                <TouchableNativeFeedback onPress={() => this.setStateTypeCodePhone() }>
                    <View style={styles.buttonWrap}>
                        <Text style={styles.buttonText}>{_('send').toUpperCase()}</Text>
                    </View>
                </TouchableNativeFeedback>
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
                        placeholder={_('code')}
                    />
                </View>
                <View style={{width: 80}}>
                    <TouchableNativeFeedback onPress={() => this.props.dispatch(save())}>
                        <View style={styles.buttonWrap}>
                            <Text style={styles.buttonText}>{_.save.toUpperCase()}</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        }

        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                ref={(_drawer) => this.drawer = _drawer}
                renderNavigationView={() => menu}>
                <Toolbar
                    openMenu={() => this.drawer.openDrawer()}
                    background="container"
                    title={_('Contact verification')}
                    elevation={0}
                    back={true}/>
                <View style={styles.container}>
                    <TouchableNativeFeedback onPress={() => this.navigateToScreen('CustomerSms')}>
                        <View style={[styles.border]}>
                            <View style={styles.row}>
                                <Icon name="phone-android" size={30} style={{color: '#BE2166'}}/>
                                <View style={{flex: 1}}>
                                    <View style={styles.a}>
                                        <View>
                                            <Text>{_('Phone number')}</Text>
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
                                    <Text>{_.email}</Text>
                                    <Text style={{color: '#064769',fontWeight: '500', fontSize: 16}}>gnorom1@seznam.cz</Text>
                                </View>
                                <Icon name="check-circle" size={25} style={styles.b}/>
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </DrawerLayoutAndroid>
        )
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
    },
    buttonWrap: {
        width: 80,
        borderRadius: 2,
        backgroundColor: Color.button,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2
    },
    buttonText: {
        fontWeight: '500',
        color: Color.buttonText
    }

}) ;

module.exports = connect(mapStateToProps)(ContactVerification);