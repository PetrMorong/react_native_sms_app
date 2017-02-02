/**
 * Created by Petr on 2.2.2017.
 */
import React, { Component } from 'react';
import { StyleSheet, Image,  Button,  Text,  View, Dimensions, TouchableNativeFeedback, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ElevatedView from 'react-native-elevated-view';
import Step from '../components/StepperSingleStep';


export default class CampaignSummary extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ElevatedView style={styles.stepperContainer} elevation={2}>
                    <Step type="done" number="1" title="Recipients"/>
                    <View style={styles.line}/>
                    <Step type="done" number="2" title="SMS-text"/>
                    <View style={styles.line}/>
                    <Step type="active" number="3" title="Summary"/>
                </ElevatedView>
                <ScrollView style={{padding: 15}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View style={{alignItems: 'center'}}>
                            <View style={{flexDirection: 'row'}}>
                                <Icon name="donut-large" size={35} style={{color: '#1565C0'}}/>
                                <Text style={[styles.colorText, {color: '#1565C0'}]}>2</Text>
                            </View>
                            <Text style={{fontSize: 16, marginTop: 5}}>SMS count</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <View style={{flexDirection: 'row'}}>
                                <Icon name="person" size={35} style={{color: '#FF9800'}}/>
                                <Text style={[styles.colorText, {color: '#FF9800'}]}>2</Text>
                            </View>
                            <Text style={{fontSize: 16, marginTop: 5}}>Recipients</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 40, marginBottom: 20}}>
                        <View style={{alignItems: 'center'}}>
                            <View style={{flexDirection: 'row'}}>
                                <Icon name="data-usage" size={35} style={{color: '#48974C'}}/>
                                <Text style={[styles.colorText, {color: '#48974C'}]}>22 %</Text>
                            </View>
                            <Text style={{fontSize: 16, marginTop: 5}}>Credit usage</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <View style={{flexDirection: 'row'}}>
                                <Icon name="account-balance-wallet" size={35} style={{color: '#E53935'}}/>
                                <Text style={[styles.colorText, {color: '#E53935'}]}>1.58</Text>
                            </View>
                            <Text style={{fontSize: 16, marginTop: 5}}>Cost</Text>
                        </View>
                    </View>
                    <View style={styles.separator}/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20, paddingBottom: 20}}>
                        <Image source={require('../images/cs.png')}/>
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
                    <View style={styles.separator}/>
                    <View style={{paddingTop: 10}} elevation={2}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                            <Text style={{fontSize: 16}}>Sender</Text>
                            <Text style={{fontSize: 16}}>Short code</Text>
                        </View>
                        <View style={styles.separator}/>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                            <Text style={{fontSize: 16}}>Unicode</Text>
                            <Icon name="check-circle" size={25} style={{color: '#4caf50'}}/>
                        </View>
                        <View style={styles.separator}/>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                            <Text style={{fontSize: 16}}>Flash SMS</Text>
                            <Icon name="cancel" size={25} />
                        </View>
                        <View style={styles.separator}/>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                            <Text style={{fontSize: 16}}>Schedule sending time</Text>
                            <Icon name="cancel" size={25} />
                        </View>
                        <View style={styles.separator}/>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                            <Text style={{fontSize: 16}}>Restriction</Text>
                            <Icon name="check-circle" size={25} style={{color: '#4caf50'}}/>
                        </View>
                    </View>
                    <View style={styles.separator}/>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <TouchableNativeFeedback onPress={() => this.navigateToScreen('Campaigntext')}>
                            <Text style={{marginBottom: 10, marginLeft: 10, color: 'black', fontSize: 15}}>BACK</Text>
                        </TouchableNativeFeedback>
                        <View style={styles.buttonWrap}>
                            <Button
                                style={styles.button}
                                elevation={2}
                                color="#BE2166"
                                title="send"
                                onPress={() => this.navigateToScreen('CampaignSummary')}/>
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
        backgroundColor: 'white',
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
        marginTop: 10,
        width: 110,
        paddingTop: 12,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        marginBottom: 25,
    }

});
