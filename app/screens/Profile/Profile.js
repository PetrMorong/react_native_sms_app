/**
 * Created by Petr on 24.2.2017.
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
import Color from '../../config/Variables';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';
const window = Dimensions.get('window');

const mapStateToProps = (store) => {
    return{
        _: store.translator.translations,
        user: store.user.user
    }
}

export default class Profile extends Component {

    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        let _=this.props._;
        let menu  = <Menu/>;
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                ref={(_drawer) => this.drawer = _drawer}
                renderNavigationView={() => menu}>
                <Toolbar
                    openMenu={() => this.drawer.openDrawer()}
                    background="containerNoBg"
                    title={_.profile}
                    elevation={0}/>
                <ScrollView style={styles.container}>
                    <TouchableNativeFeedback onPress={()=>Actions.BaseInformations()}>
                        <View style={styles.actionStatus}>
                            <Icon name="edit" size={25} style={{color: Color.buttonText}}/>
                        </View>
                    </TouchableNativeFeedback>
                    <View>
                        <View style={styles.avatarWrap}>
                            <Image
                                style={styles.avatar}
                                source={{ uri, }}/>
                            <Text style={styles.email}>{this.props.user.email}</Text>
                        </View>
                        <View style={styles.infoWrap}>
                            <View style={{padding: 15}}>
                                <Text style={styles.textHighlight}>{_.name}</Text>
                                <Text style={styles.textHighlight}>{_.phone_number}</Text>
                                <Text style={styles.textHighlight}>{_.timezone}</Text>
                                <Text style={styles.textHighlight}>{_.country}</Text>
                            </View>
                            <View style={{padding: 15}}>
                                <Text style={styles.marginTop}>{this.props.user.first_name} {this.props.user.last_name}</Text>
                                <Text style={styles.marginTop}>{this.props.user.phone_number}</Text>
                                <Text style={styles.marginTop}>{this.props.user.timezone}</Text>
                                <Text style={styles.marginTop}>{this.props.user.country}</Text>
                            </View>

                        </View>

                        <View style={styles.actionWrap}>
                            <TouchableNativeFeedback onPress={()=>Actions.ChangePassword()}>
                                <View style={{alignItems: 'center', width: 100}}>
                                    <Icon name="lock-outline" size={30} style={styles.actionIcon}/>
                                    <Text style={styles.colorAndMargin}>{_.change_password}</Text>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={()=>Actions.PaymentData()}>
                                <View style={{alignItems: 'center', width: 80}}>
                                    <Icon name="location-on" size={30} style={styles.actionIcon}/>
                                    <Text style={styles.colorAndMargin}>{_.payment_data}</Text>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={()=>Actions.ContactVerification()}>
                                <View style={{alignItems: 'center', width: 80}}>
                                    <Icon name="phone-android" size={30} style={styles.actionIcon}/>
                                    <Text style={styles.colorAndMargin}>{_.contact_verification}</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </ScrollView>
            </DrawerLayoutAndroid>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.background
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 100
    },
    actionIcon:{
        color: Color.displayText
    },
    colorAndMargin: {
        color: Color.displayText,
        marginTop: 5,
        textAlign: 'center'
    },
    avatarWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 75,
        backgroundColor: Color.secondaryColor
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: Color.separator
    },
    buttonWrap: {
        width: 110,
        paddingTop: 12,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        marginRight: 15,
        marginTop: 5
    },
    email: {
        color: 'white',
        fontSize: 16,
        marginTop: 15
    },
    textHighlight: {
        fontWeight: '500',
        marginBottom: 7,
        color: Color.displayText2
    },
    infoWrap: {
        margin: 15,
        height: 130,
        backgroundColor: Color.cardBackground,
        borderRadius: 3,
        marginTop: -40,
        elevation: 1,
        flexDirection: 'row',
        position: 'relative'
    },
    marginTop: {
        marginBottom: 7,
        color: Color.displayText2
    },
    actionStatus: {
        position: 'absolute',
        width: 50,
        height: 50,
        borderRadius: 50,
        top: 280,
        right: 30,
        backgroundColor: Color.button,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99,
        elevation: 3
    },
    actionWrap: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between',
        margin: 15,
        backgroundColor: Color.cardBackground,
        borderRadius: 2,
        elevation: 1,
        marginTop: 20
    }
});

module.exports = connect(mapStateToProps)(Profile);
