/**
 * Created by Petr on 22.2.2017.
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
import { fetchUser } from '../../actions/Actions'

const window = Dimensions.get('window');

const mapStateToProps = (store) => {
    return{
        _: store.translator.translations
    }
}

export default class SignIn extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loginWrap}>
                    <View style={styles.loginSmallWrap}>
                        <Image source={require('../../images/white-label/sunsms/logo/logo.png')} style={styles.logo} resizeMode='stretch'/>
                        <View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Icon name="mail-outline" style={{color: 'white', marginTop: 20, marginRight: 15}} size={25}/>
                                <TextInput
                                    onChangeText={(email) => this.setState({email})}
                                    value={this.state.email}
                                    style={styles.input}
                                    placeholder={_('Email')}
                                    placeholderTextColor="white"
                                    underlineColorAndroid="white"/>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Icon name="lock-outline" style={{color: 'white', marginTop: 20, marginRight: 15}} size={25}/>
                                <TextInput
                                    onChangeText={(password) => this.setState({password})}
                                    value={this.state.password}
                                    style={styles.input}
                                    placeholder={_('Password')}
                                    placeholderTextColor="white"
                                    underlineColorAndroid="white"
                                    secureTextEntry={true}/>
                            </View>
                        </View>
                        <TouchableNativeFeedback onPress={() => this.props.dispatch(fetchUser())}>
                            <View style={styles.buttonWrap}>
                                <Text style={styles.buttonText}>{_('Login').toUpperCase()}</Text>
                            </View>
                        </TouchableNativeFeedback>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                            <TouchableNativeFeedback onPress={this.props.changeScreenLostPassword}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{color: 'white'}}>{_('Forgot password')} ? </Text>
                                    <Text style={{color: 'white', fontWeight: '500'}}>{_('Get help signing in')}.</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
                            <View style={{borderColor: 'grey', borderBottomWidth: 1, flex: 1}}/>
                            <Text style={{color: 'white', marginLeft: 10, marginRight: 10}}>OR</Text>
                            <View style={{borderColor: 'grey', borderBottomWidth: 1, flex: 1}}/>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
                            <Image style={{width: 40, height: 40}} source={require('../../images/facebook-logo-png-white-facebook-logo-png-white-facebook-icon-png--32.png')}/>
                            <Text style={{color: 'white', marginLeft: 5, fontWeight: '500'}}>{_('Log in with facebook')}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomTab}>
                    <TouchableNativeFeedback onPress={this.props.changeScreenSignUp}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{color: 'white'}}>{_('Do not have an account')} ? </Text>
                            <Text style={{color: 'white', fontWeight: '500'}} >{_('Sign up')} </Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        top: 0,
        width: window.width,
        height: window.height
    },
    backgroundImage: {
        width: window.width,
        height: window.height
    },
    loginWrap: {
        width: window.width,
        height: window.height,
        position: 'absolute',
        top: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,.4)',
    },
    loginSmallWrap: {
        width: window.width/4 * 3 +25,
        height: window.height/5*4-25,
        alignItems: 'center'
    },
    logo: {
        width: 180,
        height: 120,
        marginRight: 20
    },
    input: {
        width: window.width/ 10 * 7,
        color: 'white',
        borderBottomColor: 'white',
        marginTop: 5,
        marginRight: 5
    },
    buttonWrap: {
        width: window.width/ 10 * 8,
        marginTop: 35,
        borderRadius: 2,
        backgroundColor: Color.button,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        marginBottom: 5
    },
    buttonText: {
        fontSize: 17,
        fontWeight: '500',
        color: Color.buttonText
    },
    bottomTab: {
        position: 'absolute',
        bottom: 24,
        width: window.width,
        height: 40,
        backgroundColor: Color.bottomTab,
        elevation: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

module.exports = connect(mapStateToProps)(SignIn);