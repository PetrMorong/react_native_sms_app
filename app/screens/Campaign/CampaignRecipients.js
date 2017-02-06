/**
 * Created by Petr on 30.1.2017.
 */
import React, { Component } from 'react';
import { StyleSheet, Button,  Text,  View, Image, Dimensions, TextInput, TouchableNativeFeedback, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Step from '../../components/StepperSingleStep';
import ElevatedView from 'react-native-elevated-view';



const window = Dimensions.get('window');

export default class Dashboard  extends Component {
    constructor(props){
        super(props);
        this.state = {
            recipients: [],
            type: 'smart'
        }
    }

    render() {

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

        return (
            <View style={styles.container}>
                {stepper}
                <View  scrollsToTop={false} style={styles.smallContainer}>
                    <TouchableNativeFeedback onPress={() => this.navigateToScreen('PhoneRecipients')}>
                        <View style={styles.linkWrap}>
                            <Icon style={styles.blueIcon} name="phone" size={35}/>
                            <Text style={styles.blueText}>Recipients from phone</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <View style={styles.separator}/>
                    <TouchableNativeFeedback onPress={() => this.navigateToScreen('KeypadRecipients')}>
                        <View style={styles.linkWrap}>
                            <Image style={styles.blueIcon} source={require('../../images/white-label/bulkgate/bulkgateIcon.png')}/>
                            <Text style={styles.blueText}>Recipients from Bulkgate </Text>
                        </View>
                    </TouchableNativeFeedback>
                    <View style={styles.separator}/>
                    <TouchableNativeFeedback onPress={() => this.navigateToScreen('KeypadRecipients')}>
                        <View style={styles.linkWrap}>
                            <Icon style={styles.blueIcon} name="dialpad" size={35}/>
                            <Text style={styles.blueText}>Add recipient</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={{flex: 1}}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10,marginLeft: 15, marginRight: 15 }}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{fontSize: 16}}>0</Text>
                        <Icon style={{marginTop: 5}} name="phone" size={28}/>
                    </View>
                    <View style={{flex: 1}}/>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{fontSize: 16}}>5</Text>
                        <Image style={{height: 25, width: 30, marginTop: 5}} resizeMode="stretch" source={require('../../images/white-label/bulkgate/bulkgateIconGrey.png')}/>
                    </View>
                    <View style={{flex: 1}}/>

                    <View style={{alignItems: 'center'}}>
                        <Text style={{fontSize: 16}}>9</Text>
                        <Icon style={{marginTop: 5}} name="dialpad" size={25}/>
                    </View>
                    <View style={{flex: 1}}/>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text  >TOTAL</Text>
                        <Text style={{marginLeft: 10, backgroundColor: '#4CAF50', padding: 5, color: 'white', borderRadius: 2}}>14</Text>
                    </View>
                    <View style={styles.separator}/>
                </View>
                <View style={styles.separator}/>
                <View style={styles.buttonWrap}>
                    <Button
                        style={styles.button}
                        elevation={2}
                        color="#BE2166"
                        title="next"
                        onPress={() => this.navigateToScreen('CampaignDeal')}/>
                </View>

            </View>
        );
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
    blueIcon: {
        color: '#1580FD',
        marginRight: 15,
        marginLeft: 5
    },
    blueText: {
        color: '#1580FD'
    },
    linkWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'
    },

    buttonWrap: {
        width: 110,
        paddingTop: 12,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        marginBottom: 15,
        marginRight: 15
    }

});

