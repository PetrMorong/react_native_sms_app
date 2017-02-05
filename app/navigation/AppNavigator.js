/**
 * Created by Petr on 24.1.2017.
 */
import React, { Component } from 'react';
import { Navigator } from 'react-native';
import Menu from '../components/Menu'
import { DrawerLayoutAndroid, View, Text } from 'react-native'
import Toolbar from '../components/Toolbar'

import Dashboard from '../screens/Dashboard';
import CampaignCreate from '../screens/campaign/CampaignCreate';
import CampaignRecipients from '../screens/campaign/CampaignRecipients'
import PhoneRecipients from '../screens/campaign/PhoneRecipients'
import KeypadRecipients from '../screens/campaign/KeypadRecipients'
import CampaignText from '../screens/campaign/CampaignText'
import CampaignSummary from '../screens/campaign/CampaignSummary'
import CampaignDashboard from '../screens/campaign/CampaignDashboard'
import CampaignList from '../screens/campaignList'
import CampaignDeal from '../screens/campaign/CampaignDeal'

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
                        title="Campaign dashboard"
                        elevation={2}
                        credit={this.props.credit}
                        navigator={navigator}/>
                    <CampaignDeal navigator={navigator}/>
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





