/**
 * Created by Petr on 3.2.2017.
 */
import React, { Component } from 'react';
import { StyleSheet, Image,  Button,  Text,  View, Dimensions, TouchableNativeFeedback, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const window = Dimensions.get('window');

export default class CampaignDashboard extends Component{

    render(){
        return(
            <ScrollView style={styles.container}>
                <View style={[styles.b, {margin: 0, padding: 0}]}>
                    <View style={{padding: 7, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Image style={{width: 80,height: 25}} resizeMode="center" source={require('../../images/white-label/bulkgate/logo/logo-title.png')} />
                        <Text style={{fontWeight: 'bold'}}>
                            [Bulkgate-65654654]
                        </Text>
                        <Text style={{fontSize: 12}}>
                            Delivery rate: 88%
                        </Text>
                    </View>
                    <View>
                        <View style={{width: window.width / 100 *88,  borderBottomWidth: 2, borderBottomColor: '#43A047'}}/>
                    </View>
                </View>
                <View style={[styles.b, {marginTop: 20}]}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 15}}>
                        <View style={{alignItems: 'center', width: window.width/ 3 +25}}>
                            <Text style={{fontSize: 16, marginBottom: 5}}>Cost</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Icon name="account-balance-wallet" size={30} style={{color: '#48974C'}}/>
                                <Text style={[styles.colorText, {color: '#48974C'}]}>55.445 $</Text>
                            </View>
                        </View>
                        <View style={{alignItems: 'center', width: window.width/ 3+25}}>
                            <Text style={{fontSize: 16, marginBottom: 5}}>SMS count</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Icon name="donut-large" size={30} style={{color: '#1565C0'}}/>
                                <Text style={[styles.colorText, {color: '#1565C0'}]}>2</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.y}>
                        <View style={{alignItems: 'center',width: window.width/ 3 +25}}>
                            <Text style={{fontSize: 16, marginBottom: 5}}>Duration</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Icon name="timer" size={30} style={{color: '#FF9800'}}/>
                                <Text style={[styles.colorText, {color: '#FF9800'}]}>00:25:43</Text>
                            </View>
                        </View>
                        <View style={{alignItems: 'center',width: window.width/ 3 +25}}>
                            <Text style={{fontSize: 16, marginBottom: 5}}>Stop SMS</Text>
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
                                <Text style={[styles.textStyle, {color: '#FF9800'}]}>Outbox</Text>
                            </View>
                        </View>
                        <View style={styles.q}>
                            <Text style={{fontSize: 20}}>8</Text>
                            <View style={styles.x}>
                                <Icon name="call-made" size={20} style={{color: '#6EBE71'}}/>
                                <Text style={[styles.textStyle, {color: '#6EBE71'}]}>Sent</Text>
                            </View>
                        </View>
                        <View style={styles.q}>
                            <Text style={{fontSize: 20}}>2</Text>
                            <View style={styles.x}>
                                <Icon name="done" size={20} style={{color: '#6EBE71'}}/>
                                <Text style={[styles.textStyle, {color: '#6EBE71'}]}>Delivered</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.p}>
                        <View style={styles.q}>
                            <Text style={{fontSize: 20}}>2</Text>
                            <View style={styles.x}>
                                <Icon name="access-time" size={20} style={{color: '#4EAAF4'}}/>
                                <Text style={[styles.textStyle, {color: '#4EAAF4'}]}>Scheduled</Text>
                            </View>
                        </View>
                        <View style={styles.q}>
                            <Text style={{fontSize: 20}}>8</Text>
                            <View style={styles.x}>
                                <Icon name="call-missed" size={20} style={{color: '#FF9800'}}/>
                                <Text style={[styles.textStyle, {color: '#FF9800'}]}>Unaviable</Text>
                            </View>
                        </View>
                        <View style={styles.q}>
                            <Text style={{fontSize: 20}}>2</Text>
                            <View style={styles.x}>
                                <Icon name="error" size={20} style={{color: '#E53935'}}/>
                                <Text style={[styles.textStyle, {color: '#E53935'}]}>error</Text>
                            </View>
                        </View>
                    </View>
                </View>
                    <View style={{margin: 15}}>
                        <Text style={{fontSize: 16, marginBottom: 10}}>Campaign text</Text>
                        <View style={{backgroundColor: '#0084FF', padding: 10, borderRadius: 10, elevation: 1}}>
                            <Text style={{color: 'white', fontSize: 15}}>The best way to use these icons on the web is with our icon web font.
                        It's lightweight, easy to use, and hosted by Google Web Fonts. Learn how to use
                        font-based icons in our </Text>
                        </View>
                </View>
            </ScrollView>
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