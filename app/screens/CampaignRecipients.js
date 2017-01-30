/**
 * Created by Petr on 30.1.2017.
 */
import React, { Component } from 'react';
import { StyleSheet,  Text,  View, Image, Dimensions, TextInput, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from 'react-native-button';
import Stepper from '../components/Stepper';


const window = Dimensions.get('window');

export default class Dashboard  extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {


        return (
            <View style={styles.container}>
                <Stepper
                    stepOneFinished={true}
                    stepTwoFinished={true}
                    stepThreeFinished={false}
                    active={2}/>
            </View>
        );
    }


}

const styles = StyleSheet.create({

});

