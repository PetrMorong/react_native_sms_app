/**
 * Created by Petr on 9.2.2017.
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
import { save } from '../../actions/Actions'
import { Actions } from 'react-native-router-flux';
import Menu from '../../components/Menu';
import Toolbar from '../../components/Toolbar';


const mapStateToProps = (store) => {
    return{
        _: store.translator.translations,
    }
}

export default class Notifications extends Component{

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
                    title={_('Notifications')}
                    elevation={2}
                    back={true}/>
                <View style={styles.container}>
                    <Text style={{color: Color.primaryColor, fontWeight: '500', fontSize: 18}}>{_('Customer')}</Text>
                    <TouchableNativeFeedback onPress={() => Actions.CustomerSms()}>
                        <View style={styles.row}>
                            <Icon name="textsms" size={25} style={{color: '#BE2166'}}/>
                            <View style={[styles.a, styles.border]}>
                                <Text style={{color: 'black', fontSize: 16}}>SMS</Text>
                                <Icon name="check-circle" size={25} style={styles.b}/>
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => Actions.CustomerEmail()}>
                        <View style={styles.row}>
                            <Icon name="mail-outline" size={25} style={{color: '#BE2166'}}/>
                            <View style={styles.a}>
                                <Text style={{color: 'black', fontSize: 16}}>Email</Text>
                                <Icon name="check-circle" size={25} style={styles.b}/>
                            </View>
                        </View>
                    </TouchableNativeFeedback>

                    <Text style={{color: Color.primaryColor, fontWeight: '500', fontSize: 18, marginTop: 25}}>{_('Shop owner')}</Text>
                    <TouchableNativeFeedback onPress={() => Actions.OwnerSms()}>
                        <View style={styles.row}>
                            <Icon name="textsms" size={25} style={{color: '#BE2166'}}/>
                            <View style={[styles.a, styles.border]}>
                                <Text style={{color: 'black', fontSize: 16}}>SMS</Text>
                                <Icon name="check-circle" size={25} style={styles.b}/>
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => Actions.OwnerEmail()}>
                        <View style={styles.row}>
                            <Icon name="mail-outline" size={25} style={{color: '#BE2166'}}/>
                            <View style={styles.a}>
                                <Text style={{color: 'black', fontSize: 16}}>Email</Text>
                                <Icon name="check-circle" size={25} style={styles.b}/>
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </DrawerLayoutAndroid>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 70
    },
    a: {
        height: 70,
        flexDirection: 'row',
        marginLeft: 25,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'
    },
    b: {
        color: '#4CAF50'
    }
});

module.exports = connect(mapStateToProps)(Notifications);