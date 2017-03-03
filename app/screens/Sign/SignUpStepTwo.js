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

const window = Dimensions.get('window');

export default class SignUpStepTwo extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            phonePrefix: ''
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loginWrap}>
                    <View style={styles.loginSmallWrap}>
                        <View>
                            <View style={styles.profile}>
                                <Icon name="person" size={110} style={{color: 'white'}}/>
                            </View>
                        </View>
                        <View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Icon name="person" style={{color: 'white', marginTop: 20, marginRight: 15}} size={25}/>
                                <TextInput
                                    onChangeText={(firstName) => this.setState({firstName})}
                                    value={this.state.firstName}
                                    style={styles.input}
                                    placeholder='First name'
                                    placeholderTextColor="white"
                                    underlineColorAndroid="white"/>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Icon name="person" style={{color: 'white', marginTop: 20, marginRight: 15}} size={25}/>
                                <TextInput
                                    onChangeText={(lastName) => this.setState({lastName})}
                                    value={this.state.lastName}
                                    style={styles.input}
                                    placeholder='Last name'
                                    placeholderTextColor="white"
                                    underlineColorAndroid="white"/>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Icon name="phone" style={{color: 'white', marginTop: 20, marginRight: 15}} size={25}/>
                                <TextInput
                                    onChangeText={(phonePrefix) => this.setState({phonePrefix})}
                                    value={this.state.phonePrefix}
                                    style={{width: window.width / 10 * 3, color: 'white', marginTop: 10}}
                                    placeholder='Phone prefix'
                                    placeholderTextColor="white"
                                    underlineColorAndroid="white"
                                    keyboardType='numeric'
                                />
                                <TextInput
                                    onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                                    value={this.state.phoneNumber}
                                    style={styles.inputShort}
                                    placeholder='Phone number'
                                    placeholderTextColor="white"
                                    underlineColorAndroid="white"
                                    keyboardType='numeric'
                                />
                            </View>
                        </View>
                        <View style={styles.buttonWrap}>
                            <Button
                                style={styles.button}
                                elevation={2}
                                color="#BE2166"
                                title="register"
                                onPress={() => this.navigateToScreen('Dashboard')}/>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                            <TouchableNativeFeedback>
                                <View style={{flexDirection: 'row'}}>
                                    <TouchableNativeFeedback onPress={this.props.changeScreenSignUp}>
                                        <Text style={{color: 'white', fontSize: 18}}>BACK</Text>
                                    </TouchableNativeFeedback>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
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
        height: window.height/5*4+25,
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
        marginTop: 10,
        marginRight: 5
    },
    inputShort: {
        width: window.width/ 10 * 4 ,
        marginTop: 10,
    },
    buttonWrap: {
        width: window.width/ 10 * 8,
        marginTop: 35
    },
    bottomTab: {
        position: 'absolute',
        bottom: 0,
        width: window.width,
        height: 50,
        backgroundColor: 'rgba(6,68,100,.8)',
        elevation: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profile: {
        width: 140,
        height: 140,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2F9285'
    }
});