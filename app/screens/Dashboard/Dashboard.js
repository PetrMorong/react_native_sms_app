import React, { Component } from 'react';
import { StyleSheet, Modal,  Button,  Text, Picker, View, Image, Switch,  Dimensions, TextInput, TouchableNativeFeedback, TouchableWithoutFeedback, ScrollView} from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import ElevatedView from 'react-native-elevated-view';

import Sms from './Sms'
import SmartSms from './SmartSms'

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';


export default class Dashboard  extends Component {
    constructor(props){
        super(props)
        this.state = {
            index: 0,
            routes: [
                { key: '1', title: 'Sms' },
                { key: '2', title: 'Smart sms' },
            ],
        }
    }

    _handleChangeTab = (index) => {
        this.setState({ index });
    };

    _renderHeader = (props) => {
        return <TabBar
            {...props}
            indicatorStyle={{backgroundColor: 'white'}}
        />;
    };

    _renderScene = ({ route }) => {
        switch (route.key) {
            case '1':
                return <Sms/>;
            case '2':
                return <SmartSms/>;
            default:
                return null;
        }
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <ElevatedView style={styles.cover}>
                    <View style={styles.avatarContainer}>
                        <Image
                            style={styles.avatar}
                            source={{ uri, }}/>
                        <Text style={styles.name}>Petr Morong</Text>
                        <Text style={styles.email}>moriandr73@gmail.com</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 25, justifyContent: 'space-between', paddingLeft: 15, paddingRight: 15}}>
                        <View style={styles.coverNumbersWrap}>
                            <Text style={styles.highlightText}>254 896</Text>
                            <Text style={{color: '#bdd6d2' }}>SMS SENT</Text>
                        </View>
                        <View style={styles.coverNumbersWrap}>
                            <Text style={styles.highlightText}>78 546</Text>
                            <Text style={{color: '#bdd6d2' }}>CREDIT SPENT</Text>
                        </View>
                        <View style={styles.coverNumbersWrap}>
                            <Text style={styles.highlightText}>January</Text>
                            <Text style={{color: '#bdd6d2' }}>MONTH</Text>
                        </View>
                    </View>
                </ElevatedView>
                <TabViewAnimated
                    style={{height: 505}}
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    onRequestChangeTab={this._handleChangeTab}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#011D2B',
        flexDirection: 'column'
    },
    cover: {
        height: window.height/3 + 30,
        backgroundColor: '#011D2B',
    },
    avatarContainer: {
        height: 140,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#011D2B',
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
        color: '#37ab9c',
        fontSize: 18,
        lineHeight: 25
    }
});

