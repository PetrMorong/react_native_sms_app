/**
 * Created by Petr on 30.1.2017.
 */
import React, { Component } from 'react';
import { StyleSheet,  Text,  View, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ElevatedView from 'react-native-elevated-view'


export default class Stepper extends Component{

    render(){
        let firstStep;
        if(this.props.stepOneFinished){
            firstStep = <View style={{alignItems: 'center'}}>
                <TouchableNativeFeedback>
                    <View style={styles.stepDone}>
                        <Icon style={styles.iconDone} name="done" size={25}/>
                    </View>
                </TouchableNativeFeedback>
                <Text style={styles.textDone}>Recipients</Text>
            </View>;
        }else{
            firstStep = <View style={{alignItems: 'center'}}>
                <TouchableNativeFeedback>
                    <View style={styles.step}>
                        <Text style={styles.disabled}>1</Text>
                    </View>
                </TouchableNativeFeedback>
                <Text style={styles.disabled}>Recipients</Text>
            </View>;
        }
        let secondStep;
        if(this.props.stepTwoFinished){
            secondStep = <View style={{alignItems: 'center'}}>
                <TouchableNativeFeedback>
                    <View style={styles.stepDone}>
                        <Icon style={styles.iconDone} name="done" size={25}/>
                    </View>
                </TouchableNativeFeedback>
                <Text style={styles.textDone}>SMS text</Text>
            </View>;
        }else{
            secondStep = <View style={{alignItems: 'center'}}>
                <TouchableNativeFeedback>
                    <View style={styles.step}>
                        <Text style={styles.disabled}>2</Text>
                    </View>
                </TouchableNativeFeedback>
                <Text style={styles.disabled}>SMS text</Text>
            </View>;
        }
        let thirdStep;
        if(this.props.stepThreeFinished){
            thirdStep = <View style={{alignItems: 'center'}}>
                <TouchableNativeFeedback>
                    <View style={styles.stepDone}>
                        <Icon style={styles.iconDone} name="done" size={25}/>
                    </View>
                </TouchableNativeFeedback>
                <Text style={styles.textDone}>Summary</Text>
            </View>;
        }else{
            thirdStep = <View style={{alignItems: 'center'}}>
                <TouchableNativeFeedback>
                    <View style={styles.step}>
                        <Text style={styles.disabled}>3</Text>
                    </View>
                </TouchableNativeFeedback>
                <Text style={styles.disabled}>Summary</Text>
            </View>;
        }

        if(this.props.active == 1){
            firstStep =  <View style={{alignItems: 'center'}}>
                <TouchableNativeFeedback>
                    <View style={styles.stepActive}>
                        <Text style={styles.activeNumber}>1</Text>
                    </View>
                </TouchableNativeFeedback>
                <Text style={styles.activeText}>Recipients</Text>
            </View>;
        }

        if(this.props.active == 2){
            secondStep =  <View style={{alignItems: 'center'}}>
                <TouchableNativeFeedback >
                    <View style={styles.stepActive}>
                        <Text style={styles.activeNumber}>2</Text>
                    </View>
                </TouchableNativeFeedback>
                <Text style={styles.activeText}>SMS text</Text>
            </View>;
        }

        if(this.props.active == 3){
            thirdStep =  <View style={{alignItems: 'center'}}>
                <TouchableNativeFeedback>
                    <View style={styles.stepActive}>
                        <Text style={styles.activeNumber}>3</Text>
                    </View>
                </TouchableNativeFeedback>
                <Text style={styles.activeText}>Summary</Text>
            </View>;
        }

        return(
            <ElevatedView style={styles.container} elevation={2}>
                {firstStep}
                <View style={styles.line}></View>
                {secondStep}
                <View style={styles.line}></View>
                {thirdStep}
            </ElevatedView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
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
    },
    stepDone: {
        backgroundColor: '#A1D4D2',
        width: 45,
        height: 45,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    stepActive: {
        backgroundColor: '#37AB9C',
        width: 45,
        height: 45,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    step: {
        backgroundColor: '#D0DFE8',
        width: 45,
        height: 45,
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