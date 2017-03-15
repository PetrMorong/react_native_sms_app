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

export default class LostPassword extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
        }
    }
    render() {
        const _=this.props._;
        return (
            <View style={styles.container}>
                <View style={styles.loginWrap}>
                    <View style={styles.loginSmallWrap}>
                        <Image source={require('../../images/white-label/sunsms/logo/logo.png')} style={styles.logo} resizeMode='stretch'/>
                        <View>
                            <Text style={{color: 'white', textAlign: 'justify',marginTop: 25, fontSize: 15}}>
                                Did you forget your password? It's ok, it can happen to everyone. Insert your email address below and we'll help you recover it.
                            </Text>
                            <TextInput
                                onChangeText={(email) => this.setState({email})}
                                value={this.state.email}
                                style={styles.input}
                                placeholder='Email'
                                placeholderTextColor="white"
                                underlineColorAndroid="white"/>
                        </View>
                        <TouchableNativeFeedback onPress={this.props.changeScreenSignIn}>
                            <View style={styles.buttonWrap}>
                                <Text style={styles.buttonText}>{_.send_password}</Text>
                            </View>
                        </TouchableNativeFeedback>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                            <TouchableNativeFeedback>
                                <View style={{flexDirection: 'row'}}>
                                    <TouchableNativeFeedback onPress={this.props.changeScreenSignIn}>
                                        <Text style={{color: 'white', fontSize: 18}}>{_.back}</Text>
                                    </TouchableNativeFeedback>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
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
        width: window.width/4 * 3 + 25,
        height: window.height/5 * 3 + 25,
        alignItems: 'center'
    },
    logo: {
        width: 180,
        height: 120,
        marginRight: 20
    },
    input: {
        width: window.width/ 10 * 8,
        color: 'white',
        borderBottomColor: 'white',
        marginTop: 20,
        marginBottom: 20,
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
        backgroundColor: 'rgba(6,68,100,.8)',
        elevation: 1,
        alignItems: 'center',
        justifyContent: 'center'

    }
});

module.exports = connect(mapStateToProps)(LostPassword);