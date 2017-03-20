/**
 * Created by Petr on 30.1.2017.
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
import Menu from '../../components/Menu';
import Toolbar from '../../components/Toolbar';
import Color from '../../config/Variables';
import { connect } from 'react-redux';
import { save } from '../../actions/Actions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import Step from '../../components/StepperSingleStep';

const window = Dimensions.get('window');

const mapStateToProps = (store) => {
    return{
        _: store.translator.translations
    }
}


export default class CampaignRecipients extends Component {
    constructor(props){
        super(props);
        this.state = {
            recipients: [],
            type: 'smart'
        };
    }

    render() {
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
                    title={_('Campaign recipients')}
                    elevation={2}/>
                <View style={styles.container}>
                    {stepper}
                    <View  scrollsToTop={false} style={styles.smallContainer}>
                        <TouchableNativeFeedback >
                            <View style={styles.linkWrap}>
                                <Icon style={styles.blueIcon} name="phone" size={35}/>
                                <Text style={styles.blueText}>{_('Recipients from phone')}</Text>
                            </View>
                        </TouchableNativeFeedback>
                        <View style={styles.separator}/>
                        <TouchableNativeFeedback>
                            <View style={styles.linkWrap}>
                                <Image style={styles.blueIcon} source={require('../../images/white-label/bulkgate/bulkgateIcon.png')}/>
                                <Text style={styles.blueText}>{_('Recipients from bulkgate')}</Text>
                            </View>
                        </TouchableNativeFeedback>
                        <View style={styles.separator}/>
                        <TouchableNativeFeedback onPress={() => Actions.KeypadRecipients()}>
                            <View style={styles.linkWrap}>
                                <Icon style={styles.blueIcon} name="dialpad" size={35}/>
                                <Text style={styles.blueText}>{_('Add recipients')}</Text>
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
                            <Text>{_('total').toUpperCase()}</Text>
                            <Text style={{marginLeft: 10, backgroundColor: '#4CAF50', padding: 5, color: 'white', borderRadius: 2}}>14</Text>
                        </View>
                        <View style={styles.separator}/>
                    </View>
                    <View style={styles.separator}/>
                    <View style={{alignItems: 'flex-end', padding: 15}}>
                        <TouchableNativeFeedback onPress={() => Actions.CampaignDeal()}>
                            <View style={styles.buttonWrap}>
                                <Text style={styles.buttonText}>{_('next').toUpperCase()}</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>

                </View>
            </DrawerLayoutAndroid>
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
        backgroundColor: 'white',
        elevation: 2
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
        borderRadius: 2,
        backgroundColor: Color.button,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
    },
    buttonText: {
        fontWeight: '500',
        color: Color.buttonText
    }

});

module.exports = connect(mapStateToProps)(CampaignRecipients);

