/**
 * Created by Petr on 20.2.2017.
 */
import React, { Component } from 'react';
import { StyleSheet, Modal,  Button,  Text, Picker, View, Image, Switch,  Dimensions, TextInput, TouchableNativeFeedback, TouchableWithoutFeedback, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class StoreList extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TouchableNativeFeedback onPress={()=> this.navigateToScreen('StoreSettings')}>
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
                <TouchableNativeFeedback onPress={()=> this.navigateToScreen('StoreSettings')}>
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
                <TouchableNativeFeedback onPress={()=> this.navigateToScreen('StoreSettings')}>
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
            </View>
        )
    }

    navigateToScreen(link){
        this.props.navigator.push({
            ident: link
        })
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
    }

});