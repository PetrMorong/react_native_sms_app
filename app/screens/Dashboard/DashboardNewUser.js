/**
 * Created by Petr on 23.2.2017.
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
import Menu from '../../components/Menu';
import Toolbar from '../../components/Toolbar';
import { Actions } from 'react-native-router-flux';
import Color from '../../config/Variables';


const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';


export default class DashboardNewUser extends Component {

    render() {
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
                    title={_('Dashboard')}
                    elevation={2}/>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.cover}>
                            <View style={styles.avatarContainer}>
                                <Image
                                    style={styles.avatar}
                                    source={{ uri, }}/>
                                <Text style={styles.name}>Petr Morong</Text>
                                <Text style={styles.email}>moriandr73@gmail.com</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 30, justifyContent: 'space-between', paddingLeft: 15, paddingRight: 15}}>
                                <View style={styles.coverNumbersWrap}>
                                    <Text style={styles.highlightText}>254 896</Text>
                                    <Text style={{color: '#bdd6d2' }}>{_('sms').toUpperCase()}</Text>
                                </View>
                                <View style={styles.coverNumbersWrap}>
                                    <Text style={styles.highlightText}>78 546</Text>
                                    <Text style={{color: '#bdd6d2' }}>{_('Credit').toUpperCase()}</Text>
                                </View>
                                <View style={styles.coverNumbersWrap}>
                                    <Text style={styles.highlightText}>January</Text>
                                    <Text style={{color: '#bdd6d2' }}>{_('Month').toUpperCase()}</Text>
                                </View>
                            </View>
                        </View>

                        <TouchableNativeFeedback onPress={()=>Actions.CampaignCreate()}>
                            <View style={[styles.item, {backgroundColor: Color.button}]}>
                                <View style={styles.iconOutline}>
                                    <Icon name="email" size={30} style={styles.icon}/>
                                </View>
                                <Text style={styles.text}>{_('Start campaign')}</Text>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={()=>Actions.StoreCreate()}>
                            <View style={[styles.item, {backgroundColor: Color.button}]}>
                                <View style={styles.iconOutline}>
                                    <Icon name="store" size={30} style={styles.icon}/>
                                </View>
                                <Text style={styles.text}>{_('Create store')}</Text>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={()=>Actions.BuyCredit()}>
                            <View style={[styles.item, {backgroundColor: Color.button}]}>
                                <View style={styles.iconOutline}>
                                    <Icon name="account-balance-wallet" size={30} style={styles.icon}/>
                                </View>
                                <Text style={styles.text}>{_('Buy credit')}</Text>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={()=>Actions.Profile()}>
                            <View style={[styles.item, {backgroundColor: Color.button, marginBottom: 15}]}>
                                <View style={styles.iconOutline}>
                                    <Icon name="person" size={30} style={styles.icon}/>
                                </View>
                                <Text style={styles.text}>{_('Fill out your profile')}</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </ScrollView>
            </DrawerLayoutAndroid>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center'

    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 80,
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 5,
        elevation: 1,
        paddingLeft: 25
    },
    icon: {
        color: Color.buttonText
    },
    iconOutline: {
        width: 50,
        height: 50,
        backgroundColor: 'rgba(255,255,255,.7)',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: Color.buttonText,
        fontSize: 18,
        marginLeft: 15
    },
    cover: {
        height: window.height/3 + 30,
        backgroundColor: Color.dashboardBackground,
        marginBottom: 10,
        elevation: 2
    },
    avatarContainer: {
        height: 140,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.dashboardBackground,
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 50
    },
    name: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5
    },
    email: {
        color: 'white',
        fontSize: 14,
        marginTop: 5
    },
    coverNumbersWrap: {
        alignItems: 'center'
    },
    highlightText: {
        fontWeight: '500',
        color: Color.dashboardStatsColor,
        fontSize: 18,
        lineHeight: 25
    }
});