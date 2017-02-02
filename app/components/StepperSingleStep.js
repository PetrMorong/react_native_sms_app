/**
 * Created by Petr on 1.2.2017.
 */
import React, { Component } from 'react';
import { StyleSheet,  Text,  View, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Step extends Component{

    render(){
        let step;
        if(this.props.type == 'done'){
            step= <View style={{alignItems: 'center'}}>
                <TouchableNativeFeedback>
                    <View style={styles.stepDone}>
                        <Icon style={styles.iconDone} name="done" size={25}/>
                    </View>
                </TouchableNativeFeedback>
                <Text style={styles.textDone}>{this.props.title}</Text>
            </View>;
        }

        if(this.props.type == 'disabled'){
            step = <View style={{alignItems: 'center'}}>
                <TouchableNativeFeedback>
                    <View style={styles.step}>
                        <Text style={styles.disabled}>{this.props.number}</Text>
                    </View>
                </TouchableNativeFeedback>
                <Text style={styles.disabled}>{this.props.title}</Text>
            </View>;
        }

        if(this.props.type == 'active'){
            step = <View style={{alignItems: 'center'}}>
                <TouchableNativeFeedback>
                    <View style={styles.stepActive}>
                        <Text style={styles.activeNumber}>{this.props.number}</Text>
                    </View>
                </TouchableNativeFeedback>
                <Text style={styles.activeText}>{this.props.title}</Text>
            </View>;
        }

        return (
            <View>
                {step}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    stepDone: {
        backgroundColor: '#A1D4D2',
        width: 42,
        height: 42,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    stepActive: {
        backgroundColor: '#37AB9C',
        width: 42,
        height: 42,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    step: {
        backgroundColor: '#D0DFE8',
        width: 42,
        height: 42,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    disabled: {
        color: '#93B1C2',
        fontWeight: '500'
    },
    activeNumber: {
        color: 'white',
        fontWeight: '500'
    },
    activeText: {
        color: '#37AB9C',
        fontWeight: '500'
    },
    iconDone: {
        color: 'white'
    },
    textDone: {
        color: '#A1D4D2',
        fontWeight: '500',
    }
});