/**
 * Created by Petr on 5.2.2017.
 */
import React, { Component } from 'react';
import { StyleSheet, Button,  Text,  View, Image, Switch,  Dimensions, TextInput, TouchableNativeFeedback, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Step from '../../components/StepperSingleStep';
import ElevatedView from 'react-native-elevated-view';

export default class CampaignDeal extends Component{
    constructor(props){
        super(props);
        this.state = {
            headline: '',
            description: '',
            switchVariables: false,
            variables: [ ['< first_name >', '100%'],['< last_name >', '100%'], ['< email >', '100%'], ['< phone_number >', '100%'], ['< gender >', '100%']]

        }
    }

    render(){
        let variables = this.state.variables.map((variable, i) => {
            return(
                <TouchableNativeFeedback key={i}>
                    <View style={styles.variableStyle}>
                        <Text  style={{color: '#4CAF76'}}>{variable[0]}</Text>
                        <Text  style={{color: '#4CAF76'}}>{variable[1]}</Text>
                    </View>
                </TouchableNativeFeedback>
            )
        });
        let variablesView;
        let variablesSeparator;
        if(this.state.switchVariables){
            variablesView = variables;
            variablesSeparator = <View style={{marginBottom: 15}}/>
        }

        return(
            <View>
                <ElevatedView style={styles.stepperContainer} elevation={2}>
                    <Step type="done" number="1" title="Recipients"/>
                    <View style={styles.line}/>
                    <Step type="active" number="2" title="Deal"/>
                    <View style={styles.line}/>
                    <Step type="disabled" number="3" title="Sms text"/>
                    <View style={styles.line}/>
                    <Step type="disabled" number="4" title="Summary"/>
                </ElevatedView>
                <View style={{padding: 15}}>
                    <TextInput
                        keyboardType='numeric'
                        placeholder='Headline'
                        ref="headline"
                        onChangeText={(headline) => {this.setState({headline})}}
                        value={this.state.headline}/>
                    <TextInput
                        style={{height: 70}}
                        keyboardType='numeric'
                        placeholder='Description'
                        ref="description"
                        onChangeText={(description) => {this.setState({description})}}
                        value={this.state.description}/>
                    <View style={{marginTop: 15}}>
                        <View style={styles.switchWrap}>
                            <Text >Variables</Text>
                            <Switch
                                onValueChange={(value) => this.setState({switchVariables: value})}
                                value={this.state.switchVariables} />
                        </View>
                        <View>
                            {variablesView}
                            {variablesSeparator}
                        </View>
                        <View style={styles.separator}/>
                    </View>
                </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    smallContainer: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5
    },
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
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'
    },
    switchWrap: {
        height: 50,
        paddingRight: 10,
        paddingLeft: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    variableStyle: {
        paddingLeft: 15,
        paddingRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5
    },
});
