/**
 * Created by Petr on 17.2.2017.
 */

import React, { Component } from 'react';
import { StyleSheet, Modal,  Button,  Text, Picker, View, Image, Switch,  Dimensions, TextInput, TouchableNativeFeedback, TouchableWithoutFeedback, ScrollView} from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';

import Month from './Month'

export default class Statistics extends Component{
    constructor(props){
        super(props)
        this.state = {
            index: 0,
            routes: [
                { key: '1', title: 'December' },
                { key: '2', title: 'January' },
                { key: '3', title: 'February' },
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
                return <Month/>;
            case '2':
                return <Month/>;
            case '3':
                return <Month/>;
            default:
                return null;
        }
    };


    render(){
        return(
            <View style={styles.container}>
                <TabViewAnimated
                    style={{flex: 1}}
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    onRequestChangeTab={this._handleChangeTab}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
   container: {
       backgroundColor: 'white',
       flex: 1
   }
});