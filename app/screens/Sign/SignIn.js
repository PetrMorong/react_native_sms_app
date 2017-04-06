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
import { save } from '../../actions/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import { fetchUser, closeError } from './actions'
import SuccessError from '../../components/SuccessError'


const window = Dimensions.get('window');

const mapStateToProps = (store) => {
    return{
        _: store.translator.translations,
        user: store.user
    }
}

export default class SignIn extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            successError: false
        }
    }

    render() {
        if(this.props.user.error){
            setInterval(()=>{
                this.setState({successError: true})
            }, 3000)
        }

        return (
            <View style={styles.container}>
                <SuccessError display={this.props.user.error} successMessage={_('Nice')} errorMessage={_('Invalid username or password')}/>
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
                                    keyboardType='email-address'
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
                        <TouchableNativeFeedback onPress={() => this.handleLogin()}>
                            <View style={styles.buttonWrap}>
                                <Text style={styles.buttonText}>{_('Login').toUpperCase()}</Text>
                            </View>
                        </TouchableNativeFeedback>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                            <TouchableNativeFeedback onPress={()=>Actions.LostPassword()}>
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
                    <TouchableNativeFeedback onPress={()=>Actions.SignUp()}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{color: 'white'}}>{_('Do not have an account')} ? </Text>
                            <Text style={{color: 'white', fontWeight: '500'}} >{_('Sign up')} </Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        )
    }

    handleLogin(){
        this.props.dispatch(fetchUser(this.state.email, this.state.password))
    }

    closeMessageTop(){
        this.setState({successError: false})
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.7)'

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
        height: window.height,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -50
    },
    logo: {
        width: 150,
        height: 110,
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
        bottom: 0,
        width: window.width,
        height: 50,
        backgroundColor: Color.bottomTab,
        elevation: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

module.exports = connect(mapStateToProps)(SignIn);