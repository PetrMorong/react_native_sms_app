4/**
 * Created by Petr on 2.2.2017.
 */
import React, { Component } from 'react';
import { StyleSheet, Image,  Button,  Text,  View, Dimensions, TouchableNativeFeedback, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ElevatedView from 'react-native-elevated-view';
import Step from '../../components/StepperSingleStep';


export default class CampaignSummary extends Component{
    constructor(props){
        super(props)
        this.state = {
            type: 'smart'
        }
    }

    render(){
        let stepper;
        if(this.state.type == 'classic'){
            stepper =  <ElevatedView style={styles.stepperContainer} elevation={2}>
                <Step type="active" number="1" title="Recipients"/>
                <View style={styles.line}/>
                <Step type="done" number="2" title="Sms text"/>
                <View style={styles.line}/>
                <Step type="disabled" number="3" title="Summary"/>
            </ElevatedView>
        }

        if(this.state.type == 'smart'){
            stepper =  <ElevatedView style={styles.stepperContainer} elevation={2}>
                <Step type="active" number="1" title="Recipients"/>
                <View style={styles.line}/>
                <Step type="done" number="2" title="Deal"/>
                <View style={styles.line}/>
                <Step type="done" number="3" title="Sms text"/>
                <View style={styles.line}/>
                <Step type="disabled" number="4" title="Summary"/>
            </ElevatedView>
        }

        return(

            <View style={styles.container}>
                {stepper}
                <ScrollView>
                    <View style={[styles.b, {marginTop: 20}]}>
                        <View style={styles.a}>
                            <View style={{alignItems: 'center'}}>
                                <Text style={{fontSize: 16, marginBottom: 5}}>SMS count</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Icon name="donut-large" size={35} style={{color: '#1565C0'}}/>
                                    <Text style={[styles.colorText, {color: '#1565C0'}]}>2</Text>
                                </View>
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <Text style={{fontSize: 16, marginBottom: 5}}>Recipients</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Icon name="person" size={35} style={{color: '#FF9800'}}/>
                                    <Text style={[styles.colorText, {color: '#FF9800'}]}>2</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 30, marginBottom: 20}}>
                            <View style={{alignItems: 'center'}}>
                                <Text style={{fontSize: 16, marginBottom: 5}}>Credit usage</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Icon name="data-usage" size={35} style={{color: '#48974C'}}/>
                                    <Text style={[styles.colorText, {color: '#48974C'}]}>22 %</Text>
                                </View>
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <Text style={{fontSize: 16, marginBottom: 5}}>Cost</Text>

                                <View style={{flexDirection: 'row'}}>
                                    <Icon name="account-balance-wallet" size={35} style={{color: '#E53935'}}/>
                                    <Text style={[styles.colorText, {color: '#E53935'}]}>1.58</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.b}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10, paddingBottom: 10}}>
                            <Image source={require('../../images/cs.png')}/>
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={[styles.colorTextSmall, {color: '#1565C0'}]}>2</Text>
                                <Text style={{fontSize: 16}}>SMS count</Text>
                            </View>
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={[styles.colorTextSmall, {color: '#FF9800'}]}>2</Text>
                                <Text style={{fontSize: 16}}>Recipients</Text>
                            </View>
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={[styles.colorTextSmall, {color: '#E53935'}]}>2</Text>
                                <Text style={{fontSize: 16}}>Price</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.b}>
                        <View>
                            <View style={styles.c}>
                                <Text style={{fontSize: 14}}>Sender</Text>
                                <Text style={{fontSize: 14}}>Short code</Text>
                            </View>
                            <View style={styles.separator}/>
                            <View style={styles.c}>
                                <Text style={{fontSize: 14}}>Unicode</Text>
                                <Icon name="check-circle" size={25} style={{color: '#4caf50'}}/>
                            </View>
                            <View style={styles.separator}/>
                            <View style={styles.c}>
                                <Text style={{fontSize: 14}}>Flash SMS</Text>
                                <Icon name="cancel" size={25} />
                            </View>
                            <View style={styles.separator}/>
                            <View style={styles.c}>
                                <Text style={{fontSize: 14}}>Schedule sending time</Text>
                                <Icon name="cancel" size={25} />
                            </View>
                            <View style={styles.separator}/>
                            <View style={styles.c}>
                                <Text style={{fontSize: 14}}>Restriction</Text>
                                <Icon name="check-circle" size={25} style={{color: '#4caf50'}}/>
                            </View>
                        </View>
                    </View>
                    <View style={{padding: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <TouchableNativeFeedback onPress={() => this.navigateToScreen('CampaignText')}>
                            <Text style={{ marginLeft: 10, color: 'black', fontSize: 15}}>BACK</Text>
                        </TouchableNativeFeedback>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TouchableNativeFeedback style={{marginRight: 15}} >
                                <ElevatedView elevation={1} style={styles.secondaryButton}>
                                    <Icon style={{marginRight: 10, color: '#BE2166'}} size={16} name="search"/>
                                    <Text style={{color: '#BE2166'}}>PREVIEW</Text>
                                </ElevatedView>
                            </TouchableNativeFeedback>
                            <View style={styles.buttonWrap}>
                                <Button
                                    style={styles.button}
                                    elevation={2}
                                    color="#BE2166"
                                    title="send"
                                    onPress={() => this.navigateToScreen('CampaignDashboard')}/>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }

    navigateToScreen(link){
        this.props.navigator.push({
            ident: link
        })
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E7F0F6',
        flex: 1,
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
    secondaryButton: {
        marginRight: 15,
        padding: 7,
        borderColor: '#BE2166',
        borderWidth: 1,
        borderRadius: 2,
        flexDirection: 'row',
        alignItems: 'center',
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
    colorText: {
        fontSize: 25,
        fontWeight: '500',
        marginLeft: 10
    },
    colorTextSmall: {
        fontSize: 18,
        fontWeight: '500',
        marginLeft: 10
    },
    buttonWrap: {
        width: 110,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
    },
    a: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white'
    },
    b: {
        elevation: 1,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 2,
        padding: 5
    },
    c: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    }



});
