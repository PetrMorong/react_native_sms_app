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
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/Actions'

const window = Dimensions.get('window');

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
                        <Image source={require('../../images/white-label/bulkgate/logo/logo.png')} style={styles.logo} resizeMode='stretch'/>
                        <View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Icon name="mail-outline" style={{color: 'white', marginTop: 20, marginRight: 15}} size={25}/>
                                <TextInput
                                    onChangeText={(email) => this.setState({email})}
                                    value={this.state.email}
                                    style={styles.input}
                                    placeholder='Email'
                                    placeholderTextColor="white"
                                    underlineColorAndroid="white"/>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Icon name="lock-outline" style={{color: 'white', marginTop: 20, marginRight: 15}} size={25}/>
                                <TextInput
                                    onChangeText={(password) => this.setState({password})}
                                    value={this.state.password}
                                    style={styles.input}
                                    placeholder='Password'
                                    placeholderTextColor="white"
                                    underlineColorAndroid="white"
                                    secureTextEntry={true}/>
                            </View>
                        </View>
                        <View style={styles.buttonWrap}>
                            <Button
                                style={styles.button}
                                elevation={2}
                                color="#BE2166"
                                title="login"
                                onPress={() => this.props.dispatch(fetchUser())}/>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                            <TouchableNativeFeedback onPress={this.props.changeScreenLostPassword}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{color: 'white'}}>Forgot password ? </Text>
                                    <Text style={{color: 'white', fontWeight: '500'}}>Get help signing in.</Text>
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
                            <Text style={{color: 'white', marginLeft: 5, fontWeight: '500'}}>Log in with facebook</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomTab}>
                    <TouchableNativeFeedback onPress={this.props.changeScreenSignUp}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{color: 'white'}}>Don''t have an account ? </Text>
                            <Text style={{color: 'white', fontWeight: '500'}} >Sign up </Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        )
    }

    navigateToScreen(link) {
        this.props.navigator.push({
            ident: link
        })
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
        width: 250,
        height: 65,
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
        marginTop: 35
    },
    bottomTab: {
        position: 'absolute',
        bottom: 20,
        width: window.width,
        height: 50,
        backgroundColor: 'rgba(6,68,100,.8)',
        elevation: 1,
        alignItems: 'center',
        justifyContent: 'center'

    }
});

module.exports = connect()(SignIn);