/**
 * Created by Petr on 6.2.2017.
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
import { save } from '../../actions/Actions'

import { TabViewAnimated, TabBar } from 'react-native-tab-view';


import StoreSettingsComponent from './StoreSettingsComponent'
import OrderFormComponent from './OrderFormComponent'

const mapStateToProps = (store) => {
    return{
        translate: store.translator.translations,
        user: store.user.user
    }
}

export default class StoreSettings extends Component{
    constructor(props){
        super(props)
        this.state = {
            index: 0,
            routes: [
                { key: '1', title: this.props.translate.store_settings},
                { key: '2', title: this.props.translate.order_form },
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


    render() {
        const _=this.props._;
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
                    title={this.props.translate.store}
                    elevation={0}
                    back={true}/>
                <TabViewAnimated
                    style={styles.container}
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    onRequestChangeTab={this._handleChangeTab}
                />
            </DrawerLayoutAndroid>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

});

module.exports = connect(mapStateToProps)(StoreSettings);