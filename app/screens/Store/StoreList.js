/**
 * Created by Petr on 20.2.2017.
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
import { save } from '../../actions/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';

const window = Dimensions.get('window');

const mapStateToProps = (store) => {
    return{
        _: store.translator.translations
    }
}

export default class StoreList extends Component{

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
                    title={_('Stores')}
                    elevation={2}/>
                <View style={styles.container}>
                    <TouchableNativeFeedback onPress={()=> Actions.StoreSettings()}>
                        <View>
                            <View style={styles.itemWrap}>
                                <View>
                                    <Image style={styles.itemImage} resizeMode='stretch' source={require('../../images/guitarLogo.jpg')}/>
                                </View>
                                <View style={{flexDirection: 'row', flex: 1}}>
                                    <Text style={styles.itemText}>Kytara</Text>
                                </View>
                            </View>
                            <View style={styles.separator}/>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={()=> Actions.StoreSettings()}>
                        <View>
                            <View style={styles.itemWrap}>
                                <View>
                                    <Image style={styles.itemImage} resizeMode='stretch' source={require('../../images/guitarLogo.jpg')}/>
                                </View>
                                <View style={{flexDirection: 'row', flex: 1}}>
                                    <Text style={styles.itemText}>My top mega store</Text>
                                </View>
                            </View>
                            <View style={styles.separator}/>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={()=> Actions.StoreSettings()}>
                        <View>
                            <View style={styles.itemWrap}>
                                <View>
                                    <Image style={styles.itemImage} resizeMode='stretch' source={require('../../images/guitarLogo.jpg')}/>
                                </View>
                                <View style={{flexDirection: 'row', flex: 1}}>
                                    <Text style={styles.itemText}>Fun store</Text>
                                </View>
                            </View>
                            <View style={styles.separator}/>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => Actions.StoreCreate()}>
                        <View style={styles.bottomButton} elevation={3}>
                            <Icon name="add" style={{color: 'white'}} size={30}/>
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
        backgroundColor: 'white'
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'
    },
    itemWrap: {
        flexDirection: 'row',
        height: 70,
        alignItems: 'center',
        padding: 15
    },
    itemImage: {
        width: 45,
        height: 45,
        borderRadius: 100,
        marginRight: 15
    },
    itemText: {
        fontSize: 16,
        color: 'black',
        fontWeight: '500'
    },
    itemPrice: {
        fontSize: 16,
        color: '#BE2166',
        fontWeight: '500',
        marginLeft: 5
    },
    itemDate: {
        fontWeight: '500',
        color: '#0FACE0'
    },
    iconOrange: {
        color: 'orange',
        marginTop: 5
    },
    itemTextRead: {
        fontSize: 16,
    },
    itemPriceRead: {
        fontSize: 16,
        color: '#BE2166',
        marginLeft: 5
    },
    iconGreen: {
        color: 'green',
        marginTop: 5
    },
    bottomButton: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        borderRadius: 50,
        backgroundColor: '#F44336',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50
    }

});

module.exports = connect(mapStateToProps)(StoreList);