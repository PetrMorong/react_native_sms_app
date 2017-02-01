/**
 * Created by Petr on 30.1.2017.
 */
import React, { Component } from 'react';
import { StyleSheet,  Text,  View, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ElevatedView from 'react-native-elevated-view'
import Step from './StepperSingleStep'


export default class Stepper extends Component{

    render(){
        return(
            <ElevatedView style={styles.stepperContainer} elevation={2}>
                <Step type="active" number="1" title="Recipients"/>
                <View style={styles.line}/>
                <Step type="done" number="2" title="SMS-text"/>
                <View style={styles.line}/>
                <Step type="disabled" number="3" title="Summary"/>
            </ElevatedView>

        )
    }
}

const styles = StyleSheet.create({
    stepperContainer: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: 'white'
    },
    line: {
        marginLeft: 5,
        marginRight: 5,
        flex: 1,
        borderBottomColor: '#D0DFE8',
        borderBottomWidth: 1,
        marginBottom: 15
    }
});