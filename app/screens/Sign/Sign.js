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

import SignIn from './SignIn'
import SignUp from './SignUp'
import SignUpStepTwo from './SignUpStepTwo'
import LostPassword from './LostPassword'

const window = Dimensions.get('window');


export default class ChatDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            screen: 'SignIn'
        }
    }

    render() {
        let screen;
        if(this.state.screen == 'SignIn'){
            screen = <SignIn navigator={this.props.navigator} changeScreenLostPassword={() => this.changeScreenLostPassword()} changeScreenSignUp={() => this.changeScreenSignUp()}/>
        }
        if(this.state.screen == 'SignUp'){
            screen = <SignUp navigator={this.props.navigator} changeScreenSignIn={() => this.changeScreenSignIn()} changeScreenSignUpStepTwo={() => this.changeScreenSignUpStepTwo()}/>
        }
        if(this.state.screen == 'SignUpStepTwo'){
            screen = <SignUpStepTwo navigator={this.props.navigator} changeScreenSignUp={() => this.changeScreenSignUp()}/>
        }
        if(this.state.screen == 'LostPassword'){
            screen = <LostPassword changeScreenSignIn={() => this.changeScreenSignIn()}/>
        }

        return (
            <View style={styles.container}>
                <Image source={require('../../images/wall.png')} style={styles.backgroundImage} resizeMode='stretch'/>
                {screen}
            </View>
        )
    }

    navigateToScreen(link) {
        this.props.navigator.push({
            ident: link
        })
    }

    changeScreenSignIn(){
        this.setState({screen: 'SignIn'})
    }

    changeScreenSignUp(){
        this.setState({screen: 'SignUp'})
    }

    changeScreenLostPassword(){
        this.setState({screen: 'LostPassword'})
    }

    changeScreenSignUpStepTwo(){
        this.setState({screen: 'SignUpStepTwo'})
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        width: window.width,
        height: window.height
    },
});