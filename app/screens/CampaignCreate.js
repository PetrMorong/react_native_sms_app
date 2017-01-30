import React, { Component } from 'react';
import { StyleSheet,  Text,  View, Image, Dimensions, TextInput, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from 'react-native-button';

const window = Dimensions.get('window');

export default class Dashboard  extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: 'Campaign name',
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
                        />
                        <View style={styles.wrap}>
                            <TouchableNativeFeedback onPress={(event) => this.chooseType('sms')} >
                                {sms}
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={(event) => this.chooseType('smartSms')} >
                                {smartSms}
                            </TouchableNativeFeedback>
                        </View>
                        <View >
                            <Button
                                style={styles.button}
                                styleDisabled={{color: '#757575'}}
                                onPress={() => this.navigateToScreen('CampaignRecipients')}>
                                CREATE CAMPAIGN
                            </Button>
                        </View>
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
        flexDirection: 'column'
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
        marginTop: 20,
       justifyContent: 'space-between',
       flexDirection: 'row'
    },
    choiceWrap: {
        width: 100,
        height: 90,
        borderColor: '#999999',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFAFA'
    },
    choiceWrapActive: {
        width: 100,
        height: 90,
        borderColor: '#26A69A',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFAFA'
    },
    choiceWrapTwo: {
        width: 150,
        height: 90,
        borderColor: '#999999',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFAFA'
    },
    choiceWrapTwoActive: {
        width: 150,
        height: 90,
        borderColor: '#26A69A',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFAFA'
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
        fontSize: 16,
        width: 170,
        fontWeight: 'normal',
        color: 'white',
        height: 50,
        paddingTop: 13,
        marginTop: 30,
        backgroundColor: '#BE2166',
        alignSelf: 'flex-end'
    }

});

