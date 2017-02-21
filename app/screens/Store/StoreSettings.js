/**
 * Created by Petr on 6.2.2017.
 */
import React, { Component } from 'react';
import { StyleSheet, Button,  Text, Picker, View, Image, Switch,  Dimensions, TextInput, TouchableNativeFeedback, ScrollView} from 'react-native';

import { TabViewAnimated, TabBar } from 'react-native-tab-view';

import StoreSettingsComponent from './StoreSettingsComponent'
import OrderFormComponent from './OrderFormComponent'

export default class StoreSettings extends Component{
    constructor(props){
        super(props)
        this.state = {
            index: 0,
            routes: [
                { key: '1', title: 'Store settings' },
                { key: '2', title: 'Order form' },
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
                return <StoreSettingsComponent navigator={this.props.navigator}/>;
            case '2':
                return <OrderFormComponent/>;
            default:
                return null;
        }
    };

    render(){
        return(
            <TabViewAnimated
                style={styles.container}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                onRequestChangeTab={this._handleChangeTab}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

});