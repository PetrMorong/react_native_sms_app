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
import { save } from '../../actions/Actions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (store) => {
    return{
        _: store.translator.translations
    }
}

export default class OrderList extends Component{

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
                    title={_('Orders')}
                    elevation={0}/>
                <View style={styles.container}>
                    <TouchableNativeFeedback onPress={()=> Actions.Order()}>
                        <View>
                            <View style={styles.itemWrap}>
                                <View>
                                    <Image style={styles.itemImage} resizeMode='stretch' source={require('../../images/guitarCover.jpg')}/>
                                </View>
                                <View style={{flexDirection: 'row', flex: 1}}>
                                    <Text style={styles.itemText}>Kytara</Text>
                                    <Text style={styles.itemPrice}>1500 $</Text>
                                </View>
                                <View style={{alignItems: 'center'}}>
                                    <Text style={styles.itemDate}>16.1.</Text>
                                    <Icon name='new-releases' size={20} style={styles.iconOrange}/>
                                </View>
                            </View>
                            <View style={styles.separator}/>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={()=> Actions.Order()}>
                        <View>
                            <View style={styles.itemWrap}>
                                <View>
                                    <Image style={styles.itemImage} resizeMode='stretch' source={require('../../images/guitarLogo.jpg')}/>
                                </View>
                                <View style={{flexDirection: 'row', flex: 1}}>
                                    <Text style={styles.itemTextRead}>BUM BUM CUP</Text>
                                    <Text style={styles.itemPriceRead}>1500 $</Text>
                                </View>
                                <View style={{alignItems: 'center'}}>
                                    <Text>16.1.</Text>
                                    <Icon name='new-releases' size={20} style={styles.iconOrange}/>
                                </View>
                            </View>
                            <View style={styles.separator}/>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={()=> Actions.Order()}>
                        <View>
                            <View style={styles.itemWrap}>
                                <View>
                                    <Image style={styles.itemImage} resizeMode='stretch' source={require('../../images/campaignCreate.png')}/>
                                </View>
                                <View style={{flexDirection: 'row', flex: 1}}>
                                    <Text style={styles.itemTextRead}>Ernesto hugain</Text>
                                    <Text style={styles.itemPriceRead}>1500 $</Text>
                                </View>
                                <View style={{alignItems: 'center'}}>
                                    <Text>16.1.</Text>
                                    <Icon name='done' size={20} style={styles.iconGreen}/>
                                </View>
                            </View>
                            <View style={styles.separator}/>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={()=> Actions.Order()}>
                        <View>
                            <View style={styles.itemWrap}>
                                <View>
                                    <Image style={styles.itemImage} resizeMode='stretch' source={require('../../images/CreateStore.png')}/>
                                </View>
                                <View style={{flexDirection: 'row', flex: 1}}>
                                    <Text style={styles.itemText}>StoreLife</Text>
                                    <Text style={styles.itemPrice}>1500 $</Text>
                                </View>
                                <View style={{alignItems: 'center'}}>
                                    <Text style={styles.itemDate}>16.1.</Text>
                                    <Icon name='new-releases' size={20} style={styles.iconOrange}/>
                                </View>
                            </View>
                            <View style={styles.separator}/>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={()=> Actions.Order()}>
                        <View>
                            <View style={styles.itemWrap}>
                                <View>
                                    <Image style={styles.itemImage} resizeMode='stretch' source={require('../../images/white-label/bulkgate/BuyCredit.png')}/>
                                </View>
                                <View style={{flexDirection: 'row', flex: 1}}>
                                    <Text style={styles.itemTextRead}>Kytara</Text>
                                    <Text style={styles.itemPriceRead}>1500 $</Text>
                                </View>
                                <View style={{alignItems: 'center'}}>
                                    <Text>16.1.</Text>
                                    <Icon name='new-releases' size={20} style={styles.iconOrange}/>
                                </View>
                            </View>
                            <View style={styles.separator}/>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={()=> Actions.Order()}>
                        <View>
                            <View style={styles.itemWrap}>
                                <View>
                                    <Image style={styles.itemImage} resizeMode='stretch' source={require('../../images/guitarCover.jpg')}/>
                                </View>
                                <View style={{flexDirection: 'row', flex: 1}}>
                                    <Text style={styles.itemTextRead}>Kytara</Text>
                                    <Text style={styles.itemPriceRead}>1500 $</Text>
                                </View>
                                <View style={{alignItems: 'center'}}>
                                    <Text>16.1.</Text>
                                    <Icon name='done' size={20} style={styles.iconGreen}/>
                                </View>
                            </View>
                            <View style={styles.separator}/>
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
        borderRadius: 350,
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
    }

});

module.exports = connect(mapStateToProps)(OrderList);