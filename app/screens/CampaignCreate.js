import React, { Component } from 'react';
import { StyleSheet,  Text,  View, Image, Dimensions, TextInput, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from 'react-native-button';
import ElevatedView from 'react-native-elevated-view'

const window = Dimensions.get('window');

export default class Dashboard  extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: '',
            campaignType: 'sms'
        }
    }

    render() {
        let sms;
        if(this.state.campaignType == 'sms'){
            sms = <View style={styles.choiceWrapActive}>
                <Icon style={styles.iconActive} name="textsms" size={35}/>
                <Text style={styles.textActive}>SMS</Text>
            </View>;
        }else{
            sms= <View style={styles.choiceWrap}>
                <Icon style={styles.icon} name="textsms" size={35}/>
                <Text style={styles.icon}>SMS</Text>
            </View>;
        }

        let smartSms;
        if(this.state.campaignType == 'smartSms'){
            smartSms =  <View style={styles.choiceWrapTwoActive}>
                <View style={styles.flexRow}>
                    <Icon style={styles.iconActive} name="textsms" size={35}/>
                    <Text style={styles.marginActive}>+</Text>
                    <Icon style={styles.iconActive} name="shopping-cart" size={35}/>
                </View>
                <Text style={styles.textActive}>Smart SMS</Text>
            </View>;
        }else{
            smartSms =  <View style={styles.choiceWrapTwo}>
                <View style={styles.flexRow}>
                    <Icon style={styles.icon} name="textsms" size={35}/>
                    <Text style={styles.margin}>+</Text>
                    <Icon style={styles.icon} name="shopping-cart" size={35}/>
                </View>
                <Text style={styles.icon}>Smart SMS</Text>
            </View>;
        }

        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.image}></View>
                    <View style={styles.padding}>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                            placeholder='Campaign name'
                        />
                        <View style={styles.wrap}>
                            <TouchableNativeFeedback onPress={(event) => this.chooseType('sms')} >
                                {sms}
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={(event) => this.chooseType('smartSms')} >
                                {smartSms}
                            </TouchableNativeFeedback>
                        </View>
                        <Button
                            style={styles.button}
                            elevation={2}
                            styleDisabled={{color: '#757575'}}
                            onPress={() => this.navigateToScreen('CampaignRecipients')}>
                            CREATE CAMPAIGN
                        </Button>
                    </View>
                </View>
            </View>
        );
    }

    navigateToScreen(link){
        this.props.navigator.push({
            ident: link
        })
    }

    chooseType(type){
        this.setState({campaignType: type})
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        flex: 1

    },
    padding: {
        padding: 30
    },
    image: {
        backgroundColor: '#064464',
        height: window.height/3
    },
    icon: {
        color: '#808080'
    },
    iconActive: {
        color: '#BE2166'
    },
    textActive: {
        color: 'black'
    },
    wrap: {
        marginTop: 10,
       justifyContent: 'center',
       flexDirection: 'row'
    },
    choiceWrap: {
        width: 100,
        height: 90,
        borderColor: '#999999',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFAFA',
        margin: 15
    },
    choiceWrapActive: {
        width: 100,
        height: 90,
        borderColor: '#26A69A',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFAFA',
        margin: 15
    },
    choiceWrapTwo: {
        width: 150,
        height: 90,
        borderColor: '#999999',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFAFA',
        margin: 15
    },
    choiceWrapTwoActive: {
        width: 150,
        height: 90,
        borderColor: '#26A69A',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFAFA',
        margin: 15
    },
    flexRow: {
        flexDirection: 'row'
    },
    margin: {
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        color: '#999999'
    },
    marginActive: {
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        color: '#26A69A'
    },
    button: {
        fontSize: 14,
        width: 160,
        fontWeight: 'normal',
        color: 'white',
        height: 45,
        paddingTop: 12,
        marginTop: 35,
        backgroundColor: '#BE2166',
        alignSelf: 'flex-end',
        borderRadius: 2
    }

});

