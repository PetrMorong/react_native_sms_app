/**
 * Created by Petr on 4.4.2017.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Modal,
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
    ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Color from '../config/Variables';

export default class Button extends Component {
    render() {

        let view;
        if(this.props.buttonStatus === 'saved'){
            view = <View style={[styles.buttonWrap, {backgroundColor: Color.buttonSuccess}]}>
                <Icon name="done" size={25} style={{color: 'white'}}/>
            </View>
        }else if(this.props.buttonStatus === 'saving'){
            view = <View style={[styles.buttonWrap, {backgroundColor: 'grey'}]}>
                <ActivityIndicator
                    style={{height: 30}}
                    size="large"
                />
            </View>
        }else if(this.props.buttonStatus === 'error'){
            view = <View style={[styles.buttonWrap, {backgroundColor: Color.buttonError}]}>
                <Icon name="error-outline" size={25} style={{color: 'white'}}/>
            </View>
        }else{
            view = <View style={[styles.buttonWrap, {backgroundColor: Color.button}]}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </View>
        }



        return (
            <TouchableNativeFeedback onPress={this.props.click}>
                {view}
            </TouchableNativeFeedback>
        )
    }

}

const styles = StyleSheet.create({
    buttonWrap: {
        width: 110,
        borderRadius: 2,

        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2
    },
    buttonText: {
        fontWeight: '500',
        color: Color.buttonText
    },
    buttonTextBlack: {
        fontWeight: '500',
        color: 'black'
    }
});