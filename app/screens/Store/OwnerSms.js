/**
 * Created by Petr on 10.2.2017.
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
import Icon from 'react-native-vector-icons/MaterialIcons';
import Color from '../../config/Variables';
import { connect } from 'react-redux';
import { save } from '../../actions/index'
import { Actions } from 'react-native-router-flux';
import Menu from '../../components/Menu';
import Toolbar from '../../components/Toolbar';

const mapStateToProps = (store) => {
    return{
        _: store.translator.translations,
    }
}

export default class OwnerSms extends Component{
    constructor(props){
        super(props)
        this.state = {
            message: '',
            sender: '',
            senderValue: '',
            switchUnicode: false,
            switchVariables: false,
            active: true,
            smsCount: 0,
            variables: [ ['< first_name >', '100%'],['< last_name >', '100%'], ['< email >', '100%'], ['< phone_number >', '100%'], ['< gender >', '100%']]
        }
    }

    render(){
        let menu  = <Menu/>;

        let variables = this.state.variables.map((variable, i) => {
            return(
                <TouchableNativeFeedback key={i}  onPress={()=>this.setVariable(variable[0])}>
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
                    disabled={true}
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
                <Text >{_('Verified numbers')}</Text>
                <Picker
                    disabled={true}
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

        let view;
        if(this.state.active){
            view = <View>
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
                        <Text style={styles.fontSize10}>SMS:</Text>
                        <Text style={styles.messageStats}>{this.state.smsCount}</Text>
                        <Text style={styles.fontSize10}>{_('Length')}:</Text>
                        <Text style={styles.messageStats}>{this.state.message.length}</Text>
                    </View>
                </View>
                <View style={{marginTop: 40}}>
                    <View style={styles.separator}/>
                    <View style={styles.switchWrap}>
                        <Text >{_('Variables')}</Text>
                        <Switch
                            onValueChange={(value) => this.setState({switchVariables: value})}
                            value={this.state.switchVariables} />
                    </View>
                    <View>
                        {variablesView}
                        {variablesSeparator}
                    </View>
                </View>
                <View>
                    <View style={styles.separator}/>
                    <View style={styles.switchWrap}>
                        <Text >{_('Unicode')}</Text>
                        <Switch
                            onValueChange={(value) => { this.setState({switchUnicode: value}); this.countMessage(value) }}
                            value={this.state.switchUnicode} />
                    </View>
                </View>
                <View>
                    <View style={styles.separator}/>
                    <View style={styles.switchWrap}>
                        <Text >{_('Sender id')}</Text>
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
                    <View style={styles.separator}/>
                </View>
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
                    title={_('Owner sms')}
                    elevation={2}
                    back={true}/>
                <View style={[styles.container, {padding: 15}]}>
                    <View>
                        <View style={styles.switchWrap}>
                            <Text>{_('Activate')}</Text>
                            <Switch
                                onValueChange={(value) => this.setState({active: value})}
                                value={this.state.active} />
                        </View>
                        <View style={styles.separator}/>
                    </View>
                    {view}
                    <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                        <TouchableNativeFeedback onPress={() => this.props.dispatch(save())}>
                            <View style={styles.buttonWrap}>
                                <Text style={styles.buttonText}>{_('save').toUpperCase()}</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
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
    },
    buttonText: {
        color: Color.buttonText,
        fontWeight: '500'
    }
});

module.exports = connect(mapStateToProps)(OwnerSms);