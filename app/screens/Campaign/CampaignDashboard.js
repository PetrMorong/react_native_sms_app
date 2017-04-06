/**
 * Created by Petr on 3.2.2017.
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

export default class CampaignDashboard extends Component{


    render(){
        let menu  = <Menu/>;

        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                ref={(_drawer) => this.drawer = _drawer}
                renderNavigationView={() => menu}>
                <Toolbar
                    openMenu={() => this.drawer.openDrawer()}
                    background="container"
                    title={_('Campaign dashboard')}
                    elevation={2}/>
                <ScrollView style={styles.container}>
                    <View style={[styles.b, {margin: 0, padding: 0}]}>
                        <View style={{padding: 7, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Image style={{width: 80,height: 25}} resizeMode="center" source={require('../../images/white-label/bulkgate/logo/logo-title.png')} />
                            <Text style={{fontWeight: 'bold'}}>
                                [Bulgate-65654654]
                            </Text>
                            <Text style={{fontSize: 12}}>
                                {_('Delivery rate')}: 88%
                            </Text>
                        </View>
                        <View>
                            <View style={{width: window.width / 100 *88,  borderBottomWidth: 2, borderBottomColor: '#43A047'}}/>
                        </View>
                    </View>
                    <View style={[styles.b, {marginTop: 20}]}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 15}}>
                            <View style={{alignItems: 'center', width: window.width/ 3 +25}}>
                                <Text style={{fontSize: 16, marginBottom: 5}}>{_('Cost')}</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Icon name="account-balance-wallet" size={30} style={{color: '#48974C'}}/>
                                    <Text style={[styles.colorText, {color: '#48974C'}]}>55.445 $</Text>
                                </View>
                            </View>
                            <View style={{alignItems: 'center', width: window.width/ 3+25}}>
                                <Text style={{fontSize: 16, marginBottom: 5}}>{_('Sms count')}</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Icon name="donut-large" size={30} style={{color: '#1565C0'}}/>
                                    <Text style={[styles.colorText, {color: '#1565C0'}]}>2</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.y}>
                            <View style={{alignItems: 'center',width: window.width/ 3 +25}}>
                                <Text style={{fontSize: 16, marginBottom: 5}}>{_('Duration')}</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Icon name="timer" size={30} style={{color: '#FF9800'}}/>
                                    <Text style={[styles.colorText, {color: '#FF9800'}]}>00:25:43</Text>
                                </View>
                            </View>
                            <View style={{alignItems: 'center',width: window.width/ 3 +25}}>
                                <Text style={{fontSize: 16, marginBottom: 5}}>{_('Stop sms')}</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Icon name="remove-circle" size={30} style={{color: '#E53935'}}/>
                                    <Text style={[styles.colorText, {color: '#E53935'}]}>3</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.b}>
                        <View style={styles.z}>
                            <View style={styles.q}>
                                <Text style={{fontSize: 20}}>2</Text>
                                <View style={styles.x}>
                                    <Icon name="timelapse" size={20} style={{color: '#FF9800'}}/>
                                    <Text style={[styles.textStyle, {color: '#FF9800'}]}>{_('Outbox')}</Text>
                                </View>
                            </View>
                            <View style={styles.q}>
                                <Text style={{fontSize: 20}}>8</Text>
                                <View style={styles.x}>
                                    <Icon name="call-made" size={20} style={{color: '#6EBE71'}}/>
                                    <Text style={[styles.textStyle, {color: '#6EBE71'}]}>{_('Sent')}</Text>
                                </View>
                            </View>
                            <View style={styles.q}>
                                <Text style={{fontSize: 20}}>2</Text>
                                <View style={styles.x}>
                                    <Icon name="done" size={20} style={{color: '#6EBE71'}}/>
                                    <Text style={[styles.textStyle, {color: '#6EBE71'}]}>{_('Delivered')}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.p}>
                            <View style={styles.q}>
                                <Text style={{fontSize: 20}}>2</Text>
                                <View style={styles.x}>
                                    <Icon name="access-time" size={20} style={{color: '#4EAAF4'}}/>
                                    <Text style={[styles.textStyle, {color: '#4EAAF4'}]}>{_('Scheduled')}</Text>
                                </View>
                            </View>
                            <View style={styles.q}>
                                <Text style={{fontSize: 20}}>8</Text>
                                <View style={styles.x}>
                                    <Icon name="call-missed" size={20} style={{color: '#FF9800'}}/>
                                    <Text style={[styles.textStyle, {color: '#FF9800'}]}>{_('Unviable')}</Text>
                                </View>
                            </View>
                            <View style={styles.q}>
                                <Text style={{fontSize: 20}}>2</Text>
                                <View style={styles.x}>
                                    <Icon name="error" size={20} style={{color: '#E53935'}}/>
                                    <Text style={[styles.textStyle, {color: '#E53935'}]}>{_('Error')}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{margin: 15}}>
                        <Text style={{fontSize: 16, marginBottom: 10}}>{_('Error')}</Text>
                        <View style={{backgroundColor: '#0084FF', padding: 10, borderRadius: 10, elevation: 1}}>
                            <Text style={{color: 'white', fontSize: 15}}>The best way to use these icons on the web is with our icon web font.
                        It's lightweight, easy to use, and hosted by Google Web Fonts. Learn how to use
                        font-based icons in our </Text>
                        </View>
                    </View>
                </ScrollView>
            </DrawerLayoutAndroid>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E7F0F6',
        flex: 1,
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'
    },
    colorText: {
        fontSize: 20,
        fontWeight: '500',
        marginLeft: 10
    },
    textStyle: {
        fontSize: 16,
        marginLeft: 5
    },
    x: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    y: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
        marginBottom: 15
    },
    z: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
        marginBottom: 10
    },
    p: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 5,
        marginBottom: 15
    },
    b: {
        elevation: 1,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 2,
        padding: 5
    },
    q:{
        alignItems: 'center',
        width: window.width/4,
        marginLeft: 5,
        marginRight: 5
    }

});

module.exports = connect(mapStateToProps)(CampaignDashboard);
