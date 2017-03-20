/**
 * Created by Petr on 1.2.2017.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Modal,
    Button,
    Text,
    Picker,
    View,
    Image,
    Switch,
    Dimensions,
    TextInput,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    ScrollView,
    DrawerLayoutAndroid
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import Menu from '../../components/Menu';
import Toolbar from '../../components/Toolbar';
import Color from '../../config/Variables';
import { connect } from 'react-redux';
import { save } from '../../actions/Actions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import Step from '../../components/StepperSingleStep';

const mapStateToProps = (store) => {
    return{
        _: store.translator.translations
    }
};

const window = Dimensions.get('window');

export default class CampaignText extends Component {
    constructor(props){
        super(props)
        this.state = {
            type: 'smart',
            message: '',
            sender: '',
            senderValue: '',
            sendingTime: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
            switchUnicode: false,
            switchFlash: false,
            switchTime: false,
            switchRestriction: false,
            switchVariables: false,
            timeZone: 'Europe/Oslo',
            smsPerDay: 0,
            smsCount: 0,
            totalSmsCount: 0,
            recipients: 10,
            variables: [ ['< first_name >', '100%'],['< last_name >', '100%'], ['< email >', '100%'], ['< phone_number >', '100%'], ['< gender >', '100%']]
        }
    }
    render(){
        let menu  = <Menu/>;

        let variables = this.state.variables.map((variable, i) => {
           return(
                <TouchableNativeFeedback key={i} onPress={()=>this.setVariable(variable[0])}>
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

        let optionalSender;
        if(this.state.sender == 'text_sender'){
            optionalSender = <View style={{marginBottom: 15, paddingLeft: 15, paddingRight: 15}}>
                <TextInput
                    placeholder={_('Text sender value')}
                    ref="senderValue"
                    onChangeText={(senderValueSender) => this.setState({senderValueSender})}
                    value={this.state.senderValueSender}/>
                <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
                    <Text style={styles.messageStats}>0/11</Text>
                </View>
            </View>
        }
        if(this.state.sender == 'own_number'){
            optionalSender = <View style={styles.switchSender}>
                <Text>{_('Verified numbers')}</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={this.state.senderValue}
                    onValueChange={(senderValue) => this.setState({senderValue: senderValue})}>
                    <Picker.Item label="Select number" value="system_number" />
                    <Picker.Item label="+420 785 895 452" value="h" />
                    <Picker.Item label="+420 785 895 452" value="kk" />
                    <Picker.Item label="+420 785 895 452" value="ff" />
                </Picker>
            </View>
        }

        let date;
        if(this.state.switchTime){
            date = <View style={{alignItems: 'center', justifyContent: 'space-between', padding: 15, flexDirection: 'row'}}>
                <DatePicker
                    style={{width: 150}}
                    date={this.state.sendingTime}
                    mode="datetime"
                    placeholder={_('Select date')}
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    showIcon={false}
                    onDateChange={(sendingTime) => {this.setState({sendingTime: sendingTime})}}
                />
                <Picker
                    style={{width: 140}}
                    selectedValue={this.state.timeZone}
                    onValueChange={(timeZone) => this.setState({senderValue: timeZone})}>
                    <Picker.Item label="Europe/Oslo" value="Europe/Oslo" />
                    <Picker.Item label="afrika" value="h" />
                    <Picker.Item label="dfs" value="kk" />
                    <Picker.Item label="dfs" value="ff" />
                </Picker>
            </View>
        }

        let restriction;
        if(this.state.switchRestriction){
            restriction = <View style={{paddingLeft: 15, paddingRight: 15, marginBottom: 10, marginTop: -10}}>
                <TextInput
                    placeholder={_('Sms per day')}
                    ref="smsPerDay"
                    onChangeText={(smsPerDay) => this.setState({smsPerDay})}
                    value={this.state.smsPerDay}
                    keyboardType='numeric'/>
            </View>
        }

        let stepper;
        if(this.state.type == 'classic'){
            stepper =  <View style={styles.stepperContainer} >
                <Step type="active" number="1" title={_('Recipients')}/>
                <View style={styles.line}/>
                <Step type="done" number="2" title={_('Sms text')}/>
                <View style={styles.line}/>
                <Step type="disabled" number="3" title={_('Summary')}/>
            </View>
        }

        if(this.state.type == 'smart'){
            stepper =  <View style={styles.stepperContainer} >
                <Step type="active" number="1" title={_('Recipients')}/>
                <View style={styles.line}/>
                <Step type="done" number="2" title={_('Deal')}/>
                <View style={styles.line}/>
                <Step type="done" number="3" title={_('Sms text')}/>
                <View style={styles.line}/>
                <Step type="disabled" number="4" title={_('Summary')}/>
            </View>
        }



        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                ref={(_drawer) => this.drawer = _drawer}
                renderNavigationView={() => menu}>
                <Toolbar
                    openMenu={() => this.drawer.openDrawer()}
                    background="container"
                    title={_('Campaign text')}
                    elevation={2}/>
                <View style={styles.container}>
                    {stepper}
                    <ScrollView style={{padding: 15}}>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <Icon name="save" size={30} style={{color: '#404040'}}/>
                            <Icon name="file-download" style={{marginLeft: 15, color: '#404040'}} size={30}/>
                        </View>
                        <View style={{paddingLeft: 10, paddingRight: 10}}>
                            <TextInput
                                style={{height: 100}}
                                placeholder={_('Sms text')}
                                ref="message"
                                multiline={true}
                                onChangeText={(message) => this.setState({message})}
                                value={this.state.message}
                                onChange={()=>this.countMessage(this.state.switchUnicode)}/>
                            <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
                                <Text style={styles.fontSize10}>{_('Total sms')}:</Text>
                                <Text style={styles.messageStats}>{this.state.totalSmsCount}</Text>
                                <Text style={styles.fontSize10}>{_('Recipients')}:</Text>
                                <Text style={styles.messageStats}>{this.state.recipients}</Text>
                                <Text style={styles.fontSize10}>SMS:</Text>
                                <Text style={styles.messageStats}>{this.state.smsCount}</Text>
                                <Text style={styles.fontSize10}>{_('Length')}:</Text>
                                <Text style={styles.messageStats}>{this.state.message.length}</Text>
                            </View>
                        </View>
                        <View style={{marginTop: 40}}>
                            <View style={styles.separator}/>
                            <View style={styles.switchWrap}>
                                <Text>{_('Variables')}</Text>
                                <Switch
                                    onValueChange={(value) => this.setState({switchVariables: value})}
                                    value={this.state.switchVariables} />
                            </View>
                            <View>
                                {variablesView}
                                {variablesSeparator}
                            </View>

                        </View>
                        <View >
                            <View style={styles.separator}/>
                            <View style={styles.switchWrap}>
                                <Text>{_('Sender id')}</Text>
                                <Picker
                                    style={styles.picker}
                                    selectedValue={this.state.sender}
                                    onValueChange={(sender) => this.setState({sender: sender})}>
                                    <Picker.Item label="System number" value="system_number" />
                                    <Picker.Item label="Short code" value="short_code" />
                                    <Picker.Item label="Text sender" value="text_sender" />
                                    <Picker.Item label="Own number" value="own_number" />
                                </Picker>
                            </View>
                            {optionalSender}
                        </View>
                        <View>
                            <View style={styles.separator}/>
                            <View style={styles.switchWrap}>
                                <Text>{_('Unicode')}</Text>
                                <Switch
                                    onValueChange={(value) => { this.setState({switchUnicode: value}); this.countMessage(value) }}
                                    value={this.state.switchUnicode} />
                            </View>
                        </View>
                        <View>
                            <View style={styles.separator}/>
                            <View style={styles.switchWrap}>
                                <Text>{_('Flash sms')}</Text>
                                <Switch
                                    onValueChange={(value) => this.setState({switchFlash: value})}
                                    value={this.state.switchFlash} />
                            </View>
                        </View>
                        <View>
                            <View style={styles.separator}/>
                            <View style={styles.switchWrap}>
                                <Text>{_('Sending time')}</Text>
                                <Switch
                                    onValueChange={(value) => this.setState({switchTime: value})}
                                    value={this.state.switchTime} />
                            </View>
                            {date}
                        </View>
                        <View>
                            <View style={styles.separator}/>
                            <View style={styles.switchWrap}>
                                <Text>{_('Restriction')}</Text>
                                <Switch
                                    onValueChange={(value) => this.setState({switchRestriction: value})}
                                    value={this.state.switchRestriction} />
                            </View>
                            {restriction}
                        </View>
                        <View style={styles.separator}/>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 30}}>
                            <TouchableNativeFeedback onPress={() => Actions.pop()}>
                                <Text style={{marginTop: 10, marginLeft: 10, color: 'black', fontSize: 15}}>{('back').toUpperCase()}</Text>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={() => Actions.CampaignSummary()}>
                                <View style={styles.buttonWrap}>
                                    <Text style={styles.buttonText}>{_('Next').toUpperCase()}</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </ScrollView>
                </View>
            </DrawerLayoutAndroid>
        )
    }


    setVariable(variable){
        this.setState({message: this.state.message + " " + variable})
        this.countMessage()
    }

    countMessage(unicodeValue){

        let countMax;
        let count;
        let smsCount;
        let totalSmsCount;

        if(unicodeValue){
            countMax = 70;
            count = 67;
        }else{
            countMax = 160;
            count = 153;
        }

        if(this.state.message.length <= countMax){
            smsCount = 1;
        }else{
            smsCount = Math.floor(this.state.message.length / count + (this.state.message.length % count > 0))
        }

        totalSmsCount = this.state.recipients * smsCount;

        this.setState({
            smsCount: smsCount,
            totalSmsCount: totalSmsCount
        })

    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
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
    picker: {
        width: 170
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
    messageStats: {
       fontWeight: '500',
       color: '#423D3C',
       marginLeft: 3,
       marginRight: 10,
       fontSize: 12
    },
    fontSize10: {
        fontSize: 12
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
    switchSender: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15
    },
    buttonWrap: {
        width: 110,
        borderRadius: 2,
        backgroundColor: Color.button,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        marginTop: 15
    },
    buttonText: {
        fontWeight: '500',
        color: Color.buttonText
    }

});

module.exports = connect(mapStateToProps)(CampaignText);
