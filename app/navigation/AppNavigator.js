/**
 * Created by Petr on 24.1.2017.
 */
import React, { Component } from 'react';
import { Navigator } from 'react-native';
import Menu from '../components/Menu'
import { DrawerLayoutAndroid, View, Text } from 'react-native'
import Toolbar from '../components/Toolbar'

import Dashboard from '../screens/Dashboard';
import CampaignCreate from '../screens/Campaign/CampaignCreate';
import CampaignRecipients from '../screens/Campaign/CampaignRecipients'
import PhoneRecipients from '../screens/Campaign/PhoneRecipients'
import KeypadRecipients from '../screens/Campaign/KeypadRecipients'
import CampaignText from '../screens/Campaign/CampaignText'
import CampaignSummary from '../screens/Campaign/CampaignSummary'
import CampaignDashboard from '../screens/Campaign/CampaignDashboard'
import CampaignList from '../screens/campaignList'
import CampaignDeal from '../screens/Campaign/CampaignDeal'

import StoreCreate from '../screens/Store/StoreCreate'
import StoreSettings from '../screens/Store/StoreSettings'
import StoreSettingsComponent from '../screens/Store/StoreSettingsComponent'
import ColorPickerComponent from '../screens/Store/ColorPicker'
import CompanyData from '../screens/Store/CompanyData'
import ShortUrl from '../screens/Store/ShortUrl'

export default class AppNavigator extends Component {

    renderScene(route, navigator) {
        let menu  = <Menu user={this.props.user} navigator={navigator}/>
        if(route.ident == 'Dashboard'){
            return(
                <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    ref={(_drawer) => this.drawer = _drawer}
                    renderNavigationView={() => menu}>
                    <Toolbar
                        openMenu={() => this.drawer.openDrawer()}
                        icon="account-balance-wallet"
                        background="container"
                        title="Dashboard"
                        credit={this.props.credit}
                        elevation={2}/>
                    <Dashboard />
                </DrawerLayoutAndroid>
            )
        }
        if(route.ident == 'CampaignCreate'){
            return(
                <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    ref={(_drawer) => this.drawer = _drawer}
                    renderNavigationView={() => menu}>
                    <Toolbar
                        openMenu={() => this.drawer.openDrawer()}
                        icon="account-balance-wallet"
                        background="containerNoBg"
                        title="Create campaign"
                        credit={this.props.credit}
                        elevation={0}/>
                    <CampaignCreate navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'CampaignRecipients'){
            return(
                <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    ref={(_drawer) => this.drawer = _drawer}
                    renderNavigationView={() => menu}>
                    <Toolbar
                        openMenu={() => this.drawer.openDrawer()}
                        icon="account-balance-wallet"
                        background="container"
                        title="Campaign recipients"
                        credit={this.props.credit}
                        elevation={2}/>
                    <CampaignRecipients navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'PhoneRecipients'){
            return(
                <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    ref={(_drawer) => this.drawer = _drawer}
                    renderNavigationView={() => menu}>
                    <Toolbar
                        openMenu={() => this.drawer.openDrawer()}
                        icon="account-balance-wallet"
                        background="container"
                        title="All contacts"
                        elevation={2}
                        credit={this.props.credit}
                        back={true}
                        backLink='CampaignRecipients'
                        navigator={navigator}/>
                    <PhoneRecipients />
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'KeypadRecipients'){
            return(
                <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    ref={(_drawer) => this.drawer = _drawer}
                    renderNavigationView={() => menu}>
                    <Toolbar
                        openMenu={() => this.drawer.openDrawer()}
                        icon="account-balance-wallet"
                        background="container"
                        title="Add contact"
                        elevation={2}
                        credit={this.props.credit}
                        back={true}
                        backLink='CampaignRecipients'
                        navigator={navigator}/>
                    <KeypadRecipients />
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'CampaignText'){
            return(
                <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    ref={(_drawer) => this.drawer = _drawer}
                    renderNavigationView={() => menu}>
                    <Toolbar
                        openMenu={() => this.drawer.openDrawer()}
                        icon="account-balance-wallet"
                        background="container"
                        title="Campaign SMS text"
                        elevation={2}
                        credit={this.props.credit}
                        navigator={navigator}/>
                    <CampaignText navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'CampaignSummary'){
            return(
                <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    ref={(_drawer) => this.drawer = _drawer}
                    renderNavigationView={() => menu}>
                    <Toolbar
                        openMenu={() => this.drawer.openDrawer()}
                        icon="account-balance-wallet"
                        background="container"
                        title="Campaign summary"
                        elevation={2}
                        credit={this.props.credit}
                        navigator={navigator}/>
                    <CampaignSummary navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'CampaignDashboard'){
            return(
                <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    ref={(_drawer) => this.drawer = _drawer}
                    renderNavigationView={() => menu}>
                    <Toolbar
                        openMenu={() => this.drawer.openDrawer()}
                        icon="account-balance-wallet"
                        background="container"
                        title="Campaign dashboard"
                        elevation={2}
                        credit={this.props.credit}
                        navigator={navigator}/>
                    <CampaignDashboard navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'CampaignList'){
            return(
                <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    ref={(_drawer) => this.drawer = _drawer}
                    renderNavigationView={() => menu}>
                    <CampaignList
                        navigator={navigator}
                        openMenu={() => this.drawer.openDrawer()}
                        icon="account-balance-wallet"
                        background="container"
                        title="Campaigns"
                        elevation={2}
                        credit={this.props.credit}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'CampaignDeal'){
            return(
                <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    ref={(_drawer) => this.drawer = _drawer}
                    renderNavigationView={() => menu}>
                    <Toolbar
                        openMenu={() => this.drawer.openDrawer()}
                        icon="account-balance-wallet"
                        background="container"
                        title="Deal settings"
                        elevation={2}
                        credit={this.props.credit}
                        navigator={navigator}/>
                    <CampaignDeal navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'StoreCreate'){
            return(
                <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    ref={(_drawer) => this.drawer = _drawer}
                    renderNavigationView={() => menu}>
                    <Toolbar
                        openMenu={() => this.drawer.openDrawer()}
                        icon="account-balance-wallet"
                        title="Create store"
                        background="containerNoBg"
                        elevation={0}
                        credit={this.props.credit}
                        navigator={navigator}/>
                    <StoreCreate navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'StoreSettings'){
            return(
                <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    ref={(_drawer) => this.drawer = _drawer}
                    renderNavigationView={() => menu}>
                    <Toolbar
                        openMenu={() => this.drawer.openDrawer()}
                        icon="account-balance-wallet"
                        title="Store"
                        background="container"
                        elevation={0}
                        credit={this.props.credit}
                        navigator={navigator}/>
                    <StoreSettings navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        //TODO remove
        if(route.ident == 'StoreSettingsComponent'){
            return(
                <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    ref={(_drawer) => this.drawer = _drawer}
                    renderNavigationView={() => menu}>
                    <Toolbar
                        openMenu={() => this.drawer.openDrawer()}
                        icon="account-balance-wallet"
                        title="Store"
                        background="container"
                        elevation={0}
                        credit={this.props.credit}
                        navigator={navigator}/>
                    <StoreSettingsComponent navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'ColorPickerComponent'){
            return(
                <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    ref={(_drawer) => this.drawer = _drawer}
                    renderNavigationView={() => menu}>
                    <Toolbar
                        openMenu={() => this.drawer.openDrawer()}
                        icon="account-balance-wallet"
                        background="container"
                        title="Choose color"
                        elevation={2}
                        credit={this.props.credit}
                        back={true}
                        backLink='StoreSettings'
                        navigator={navigator}/>
                    <ColorPickerComponent navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'CompanyData'){
            return(
                <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    ref={(_drawer) => this.drawer = _drawer}
                    renderNavigationView={() => menu}>
                    <Toolbar
                        openMenu={() => this.drawer.openDrawer()}
                        icon="account-balance-wallet"
                        background="container"
                        title="Company data"
                        elevation={2}
                        credit={this.props.credit}
                        back={true}
                        backLink='StoreSettings'
                        navigator={navigator}/>
                    <CompanyData navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'ShortUrl'){
            return(
                <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    ref={(_drawer) => this.drawer = _drawer}
                    renderNavigationView={() => menu}>
                    <Toolbar
                        openMenu={() => this.drawer.openDrawer()}
                        icon="account-balance-wallet"
                        background="container"
                        title="Short url"
                        elevation={2}
                        credit={this.props.credit}
                        back={true}
                        backLink='StoreSettings'
                        navigator={navigator}/>
                    <ShortUrl navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
    }

    render() {
        return (
            <Navigator
                initialRoute={this.props.initialRoute}
                ref="appNavigator"
                renderScene={this.renderScene.bind(this)}
                configureScene={(route) => {
                      return Navigator.SceneConfigs.PushFromRight;
                  }}/>
        );
    }


}





