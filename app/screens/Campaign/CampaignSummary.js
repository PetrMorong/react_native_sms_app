4/**
 * Created by Petr on 2.2.2017.
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
import { save } from '../../actions/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import Step from '../../components/StepperSingleStep';

const mapStateToProps = (store) => {
    return{
        _: store.translator.translations
    }
};

const window = Dimensions.get('window');


export default class CampaignSummary extends Component{
    constructor(props){
        super(props)
        this.state = {
            type: 'smart'
        }
    }

    render(){
        let menu  = <Menu/>;

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
                    title={_('Campaign summary')}
                    elevation={2}/>
                <View style={styles.container}>
                    {stepper}
                    <ScrollView>
                        <View style={[styles.b, {marginTop: 20}]}>
                            <View style={styles.a}>
                                <View style={{alignItems: 'center'}}>
                                    <Text style={{fontSize: 16, marginBottom: 5}}>{_('Sms count')}</Text>
                                    <View style={{flexDirection: 'row'}}>
                                        <Icon name="donut-large" size={35} style={{color: '#1565C0'}}/>
                                        <Text style={[styles.colorText, {color: '#1565C0'}]}>2</Text>
                                    </View>
                                </View>
                                <View style={{alignItems: 'center'}}>
                                    <Text style={{fontSize: 16, marginBottom: 5}}>{_('Recipients')}</Text>
                                    <View style={{flexDirection: 'row'}}>
                                        <Icon name="person" size={35} style={{color: '#FF9800'}}/>
                                        <Text style={[styles.colorText, {color: '#FF9800'}]}>2</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 30, marginBottom: 20}}>
                                <View style={{alignItems: 'center'}}>
                                    <Text style={{fontSize: 16, marginBottom: 5}}>{_('Credit usage')}</Text>
                                    <View style={{flexDirection: 'row'}}>
                                        <Icon name="data-usage" size={35} style={{color: '#48974C'}}/>
                                        <Text style={[styles.colorText, {color: '#48974C'}]}>22 %</Text>
                                    </View>
                                </View>
                                <View style={{alignItems: 'center'}}>
                                    <Text style={{fontSize: 16, marginBottom: 5}}>{_('Cost')}</Text>

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
                                    <Text style={{fontSize: 16}}>{_('Sms count')}</Text>
                                </View>
                                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={[styles.colorTextSmall, {color: '#FF9800'}]}>2</Text>
                                    <Text style={{fontSize: 16}}>{_('Recipients')}</Text>
                                </View>
                                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={[styles.colorTextSmall, {color: '#E53935'}]}>2</Text>
                                    <Text style={{fontSize: 16}}>{_('Credit')}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.b}>
                            <View>
                                <View style={styles.c}>
                                    <Text style={{fontSize: 14}}>{_('Sender')}</Text>
                                    <Text style={{fontSize: 14}}>Short code</Text>
                                </View>
                                <View style={styles.separator}/>
                                <View style={styles.c}>
                                    <Text style={{fontSize: 14}}>{_('Unicode')}</Text>
                                    <Icon name="check-circle" size={25} style={{color: '#4caf50'}}/>
                                </View>
                                <View style={styles.separator}/>
                                <View style={styles.c}>
                                    <Text style={{fontSize: 14}}>{_('Flash sms')}</Text>
                                    <Icon name="cancel" size={25} />
                                </View>
                                <View style={styles.separator}/>
                                <View style={styles.c}>
                                    <Text style={{fontSize: 14}}>{_('Sending time')}</Text>
                                    <Icon name="cancel" size={25} />
                                </View>
                                <View style={styles.separator}/>
                                <View style={styles.c}>
                                    <Text style={{fontSize: 14}}>{_('Restriction')}</Text>
                                    <Icon name="check-circle" size={25} style={{color: '#4caf50'}}/>
                                </View>
                            </View>
                        </View>
                        <View style={{padding: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <TouchableNativeFeedback onPress={() => Actions.pop()}>
                                <Text style={{ marginLeft: 10, color: 'black', fontSize: 15}}>{_('back').toUpperCase()}</Text>
                            </TouchableNativeFeedback>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <TouchableNativeFeedback style={{marginRight: 15}} >
                                    <View style={styles.secondaryButton}>
                                        <Icon style={{marginRight: 10, color: Color.secondaryButtonText}} size={16} name="search"/>
                                        <Text style={{color: Color.secondaryButtonText}}>{_('Preview').toUpperCase()}</Text>
                                    </View>
                                </TouchableNativeFeedback>
                                <TouchableNativeFeedback onPress={() => Actions.CampaignDashboard()}>
                                    <View style={styles.buttonWrap}>
                                        <Text style={styles.buttonText}>{_('Send').toUpperCase()}</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </DrawerLayoutAndroid>
        )
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
        backgroundColor: 'white',
        elevation: 2
    },
    secondaryButton: {
        marginRight: 15,
        padding: 10,
        borderColor: Color.secondaryButton,
        borderWidth: 1,
        borderRadius: 2,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 1

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
        borderRadius: 2,
        backgroundColor: Color.button,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        marginTop: 1
    },
    buttonText: {
       fontWeight: '500',
        color: Color.buttonText
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

module.exports = connect(mapStateToProps)(CampaignSummary);
