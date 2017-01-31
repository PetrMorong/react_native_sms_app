/**
 * Created by Petr on 30.1.2017.
 */
import React, { Component } from 'react';
import { StyleSheet,  Text,  View, Image, Dimensions, TextInput, TouchableNativeFeedback, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from 'react-native-button';
import Stepper from '../components/Stepper';



const window = Dimensions.get('window');

export default class Dashboard  extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggleAddRecipient: false
        }
    }

    render() {
        let recipient;
        if(this.state.toggleAddRecipient){
            recipient = <View>
                <View style={styles.recipientSmallWrap}>
                    <TextInput style={styles.firstName} placeholder='First name'/>
                    <TextInput style={styles.lastName} placeholder='Last name'/>
                </View>
                <TextInput style={styles.phoneNumber} keyboardType='numeric' placeholder='Phone number'/>
                <Button
                    style={styles.buttonRecipient}
                    styleDisabled={{color: '#757575'}}
                    onPress={() => this.navigateToScreen('CampaignRecipients')}>
                    Add recipient
                </Button>
                <View style={styles.separator}/>
            </View>
        }

        return (
            <View style={styles.container}>
                <Stepper
                    stepOneFinished={true}
                    stepTwoFinished={false}
                    stepThreeFinished={false}
                    active={1}/>
                <ScrollView  scrollsToTop={false} style={styles.smallContainer}>
                    <TouchableNativeFeedback onPress={() => this.navigateToScreen('PhoneRecipients')}>
                        <View style={styles.linkWrap}>
                            <Icon style={styles.blueIcon} name="phone" size={35}/>
                            <Text style={styles.blueText}>Recipients from phone</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <View style={styles.separator}/>
                    <TouchableNativeFeedback>
                        <View style={styles.linkWrap}>
                            <Icon style={styles.blueIcon} name="extension" size={35}/>
                            <Text style={styles.blueText}>Recipients from Bulkgate </Text>
                        </View>
                    </TouchableNativeFeedback>
                    <View style={styles.separator}/>
                    <TouchableNativeFeedback onPress={() => this.toggleAddRecipient()}>
                        <View style={styles.linkWrap}>
                            <Icon style={styles.blueIcon} name="dialpad" size={35}/>
                            <Text style={styles.blueText}>Add recipient</Text>
                        </View>
                    </TouchableNativeFeedback>
                    {recipient}
                </ScrollView>
            </View>
        );
    }

    toggleAddRecipient(){
        this.setState({toggleAddRecipient: !this.state.toggleAddRecipient})
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
    recipientSmallWrap: {
        flexDirection: 'row',
    },
    firstName: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5
    },
    lastName: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5
    },
    phoneNumber: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5
    },
    buttonRecipient: {
        fontSize: 16,
        width: 150,
        fontWeight: 'normal',
        color: '#BE2166',
        height: 50,
        paddingTop: 13,
        marginTop: 10,
        borderColor: '#BE2166',
        borderWidth: 1,
        alignSelf: 'flex-end',
        marginRight: 10,
        marginBottom: 15
    }

});

