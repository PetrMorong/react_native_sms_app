/**
 * Created by Petr on 24.1.2017.
 */
import React, { Component } from 'react';
import { Navigator } from 'react-native';
import Menu from '../components/Menu'
import { DrawerLayoutAndroid, View, Text } from 'react-native'
import Toolbar from '../components/Toolbar'

import Dashboard from '../screens/Dashboard';
import CampaignCreate from '../screens/CampaignCreate';
import CampaignRecepients from '../screens/CampaignRecipients'

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
                        credit={this.props.credit}/>
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
                        credit={this.props.credit}/>
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
                        credit={this.props.credit}/>
                    <CampaignRecepients/>
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





