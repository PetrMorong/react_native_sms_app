/**
 * Created by Petr on 6.2.2017.
 */
import React, { Component } from 'react';
import { StyleSheet, Button,  Text, Picker, View, Image, Switch,  Dimensions, TextInput, TouchableNativeFeedback, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Step from '../../components/StepperSingleStep';
import ElevatedView from 'react-native-elevated-view';
import DatePicker from 'react-native-datepicker';

export default class StoreSettings extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>nice</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'
    },
});