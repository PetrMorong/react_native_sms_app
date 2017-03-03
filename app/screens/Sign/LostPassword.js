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

export default class LostPassword extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loginWrap}>
                    <View style={styles.loginSmallWrap}>
                        <Image source={require('../../images/white-label/bulkgate/logo/logo.png')} style={styles.logo} resizeMode='stretch'/>
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
                        <View style={styles.buttonWrap}>
                            <Button
                                style={styles.button}
                                elevation={2}
                                color="#BE2166"
                                title="Send password"
                                onPress={() => this.navigateToScreen('Dashboard')}/>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                            <TouchableNativeFeedback>
                                <View style={{flexDirection: 'row'}}>
                                    <TouchableNativeFeedback onPress={this.props.changeScreenSignIn}>
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
        width: 250,
        height: 65,
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

    }
});