/**
 * Created by Petr on 24.1.2017.
 */
import React, { Component } from 'react';
import { Navigator } from 'react-native';
import Menu from '../components/Menu'
import { DrawerLayoutAndroid, View, Text, BackAndroid } from 'react-native'
import Toolbar from '../components/Toolbar'
import {Scene, Router} from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';


import Dashboard from '../screens/Dashboard/Dashboard';
import DashboardNewUser from '../screens/Dashboard/DashboardNewUser'

import CampaignCreate from '../screens/Campaign/CampaignCreate';
import CampaignRecipients from '../screens/Campaign/CampaignRecipients'
import PhoneRecipients from '../screens/Campaign/PhoneRecipients'
import KeypadRecipients from '../screens/Campaign/KeypadRecipients'
import CampaignText from '../screens/Campaign/CampaignText'
import CampaignSummary from '../screens/Campaign/CampaignSummary'
import CampaignDashboard from '../screens/Campaign/CampaignDashboard'
import CampaignList from '../screens/Campaign/CampaignList'
import CampaignDeal from '../screens/Campaign/CampaignDeal'

import StoreCreate from '../screens/Store/StoreCreate'
import StoreSettings from '../screens/Store/StoreSettings'
import ColorPickerComponent from '../screens/Store/ColorPicker'
import CompanyData from '../screens/Store/CompanyData'
import ShortUrl from '../screens/Store/ShortUrl'
import Notifications from '../screens/Store/Notifications'
import CustomerSms from '../screens/Store/CustomerSms'
import CustomerEmail from '../screens/Store/CustomerEmail'
import OwnerSms from '../screens/Store/OwnerSms'
import OwnerEmail from '../screens/Store/OwnerEmail'
import Language from '../screens/Store/Language'
import StoreList from '../screens/Store/StoreList'

import Order from '../screens/Orders/Order'
import OrderList from '../screens/Orders/OrderList'

import HistoryList from '../screens/History/HistoryList'
import CampaignDetail from '../screens/History/CampaignDetail'

import ScheduledList from '../screens/Scheduled/ScheduledList'
import ScheduledDetail from '../screens/Scheduled/ScheduledDetail'

import InboxList from '../screens/Inbox/InboxList'
import InboxDetail from '../screens/Inbox/InboxDetail'

import OutboxList from '../screens/Outbox/OutboxList'
import OutboxDetail from '../screens/Outbox/OutboxDetail'

import Chat from '../components/Chat'
import ChatDetail from '../components/ChatDetail'

import BuyCredit from '../screens/Payments/BuyCredit'

import Statistics from '../screens/Statistics/Statistics'

import Settings from '../screens/Settings/Settings'

import Sign from '../screens/Sign/Sign'

import Profile from '../screens/Profile/Profile'
import BaseInformations from '../screens/Profile/BaseInformations'
import ChangePassword from '../screens/Profile/ChangePassword'
import PaymentData from '../screens/Profile/PaymentData'
import ContactVerification from '../screens/Profile/ContactVerification'

BackAndroid.addEventListener("hardwareBackPress", () => {
    Actions.pop();
    return true;
});

export default class AppNavigator extends Component {

    render() {
        return (
                <Router>
                    <Scene key="root">
                        <Scene key='Sign' component={Sign} initial={true} hideNavBar/>
                        <Scene key='Dashboard' component={Dashboard} hideNavBar/>
                        <Scene key='DashboardNewUser' component={DashboardNewUser} hideNavBar/>
                        <Scene key='Profile' component={Profile} hideNavBar/>
                        <Scene key='BaseInformations' component={BaseInformations} hideNavBar/>
                        <Scene key='PaymentData' component={PaymentData} hideNavBar/>
                        <Scene key='ContactVerification' component={ContactVerification} hideNavBar/>
                        <Scene key='ChangePassword' component={ChangePassword} hideNavBar/>
                        <Scene key='StoreList' component={StoreList} hideNavBar/>
                        <Scene key='StoreCreate' component={StoreCreate} hideNavBar/>
                        <Scene key='StoreSettings' component={StoreSettings} hideNavBar/>
                        <Scene key='Language' component={Language} hideNavBar/>
                        <Scene key='ShortUrl' component={ShortUrl} hideNavBar/>
                        <Scene key='Notifications' component={Notifications} hideNavBar/>
                        <Scene key='CustomerSms' component={CustomerSms} hideNavBar/>
                        <Scene key='CustomerEmail' component={CustomerEmail} hideNavBar/>
                        <Scene key='OwnerEmail' component={OwnerEmail} hideNavBar/>
                        <Scene key='OwnerSms' component={OwnerSms} hideNavBar/>
                        <Scene key='CampaignCreate' component={CampaignCreate} hideNavBar/>
                        <Scene key='CampaignList' component={CampaignList} hideNavBar/>
                        <Scene key='HistoryList' component={HistoryList} hideNavBar/>
                        <Scene key='ScheduledList' component={ScheduledList} hideNavBar/>
                        <Scene key='InboxList' component={InboxList} hideNavBar/>
                        <Scene key='Statistics' component={Statistics} hideNavBar/>
                        <Scene key='Order' component={Order} hideNavBar/>
                        <Scene key='OrderList' component={OrderList} hideNavBar/>
                        <Scene key='HistoryList' component={HistoryList} hideNavBar/>
                        <Scene key='CampaignDetail' component={CampaignDetail} hideNavBar/>
                        <Scene key='InboxDetail' component={InboxDetail} hideNavBar/>
                        <Scene key='InboxList' component={InboxList} hideNavBar/>
                        <Scene key='OutboxList' component={OutboxList} hideNavBar/>
                        <Scene key='BuyCredit' component={BuyCredit} hideNavBar/>
                        <Scene key='ScheduledDetail' component={ScheduledDetail} hideNavBar/>
                        <Scene key='ScheduledList' component={ScheduledList} hideNavBar/>
                        <Scene key='Settings' component={Settings} hideNavBar/>
                        <Scene key='ColorPicker' component={ColorPickerComponent} hideNavBar/>




                    </Scene>
                </Router>
        );
    }



    renderScene(route, navigator) {
        let menu  = <Menu user={this.props.user} navigator={navigator}/>
        if(route == 'Dashboard'){
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
                        elevation={0}/>
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
        if(route.ident == 'Notifications'){
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
                        title="Notifications"
                        elevation={2}
                        credit={this.props.credit}
                        back={true}
                        backLink='StoreSettings'
                        navigator={navigator}/>
                    <Notifications navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'CustomerSms'){
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
                        title="Customer sms"
                        elevation={2}
                        credit={this.props.credit}
                        back={true}
                        backLink='Notifications'
                        navigator={navigator}/>
                    <CustomerSms navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'CustomerEmail'){
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
                        title="Customer email"
                        elevation={2}
                        credit={this.props.credit}
                        back={true}
                        backLink='Notifications'
                        navigator={navigator}/>
                    <CustomerEmail navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'OwnerEmail'){
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
                        title="Shop owner email"
                        elevation={2}
                        credit={this.props.credit}
                        back={true}
                        backLink='Notifications'
                        navigator={navigator}/>
                    <OwnerEmail navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'OwnerSms'){
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
                        title="Shop owner sms"
                        elevation={2}
                        credit={this.props.credit}
                        back={true}
                        backLink='Notifications'
                        navigator={navigator}/>
                    <OwnerSms navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'Language'){
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
                        title="Language"
                        elevation={2}
                        credit={this.props.credit}
                        back={true}
                        backLink='StoreSettings'
                        navigator={navigator}/>
                    <Language navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'Order'){
            return(
                <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    ref={(_drawer) => this.drawer = _drawer}
                    renderNavigationView={() => menu}>
                    <Order navigator={navigator} />
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'OrderList'){
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
                        title="Orders"
                        credit={this.props.credit}
                        elevation={2}/>
                    <OrderList navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'BuyCredit'){
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
                        title="Buy credit"
                        credit={this.props.credit}
                        elevation={0}/>
                    <BuyCredit navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'Statistics'){
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
                        title="Statistics"
                        elevation={0}
                        credit={this.props.credit}
                        navigator={navigator}/>
                    <Statistics navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'StoreList'){
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
                        title="Stores"
                        elevation={2}
                        credit={this.props.credit}
                        navigator={navigator}/>
                    <StoreList navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'HistoryList'){
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
                        title="History"
                        elevation={2}
                        credit={this.props.credit}
                        navigator={navigator}/>
                    <HistoryList navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'CampaignDetail'){
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
                        title="Campaign detail"
                        elevation={2}
                        credit={this.props.credit}
                        back={true}
                        backLink='HistoryList'
                        navigator={navigator}/>
                    <CampaignDetail navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'Chat'){
            return(
                <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    ref={(_drawer) => this.drawer = _drawer}
                    renderNavigationView={() => menu}>
                    <Chat navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'ChatDetail'){
            return(
                <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    ref={(_drawer) => this.drawer = _drawer}
                    renderNavigationView={() => menu}>
                    <ChatDetail navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'ScheduledList'){
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
                        title="Scheduled"
                        elevation={2}
                        credit={this.props.credit}
                        navigator={navigator}/>
                    <ScheduledList navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'ScheduledDetail'){
            return(
                <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    ref={(_drawer) => this.drawer = _drawer}
                    renderNavigationView={() => menu}>
                    <ScheduledDetail navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'InboxList'){
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
                        title="Inbox"
                        elevation={2}
                        credit={this.props.credit}
                        navigator={navigator}/>
                    <InboxList navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'InboxDetail'){
            return(
                <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    ref={(_drawer) => this.drawer = _drawer}
                    renderNavigationView={() => menu}>
                    <InboxDetail navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'OutboxList'){
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
                        title="Outbox"
                        elevation={2}
                        credit={this.props.credit}
                        navigator={navigator}/>
                    <OutboxList navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'OutboxDetail'){
            return(
                <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    ref={(_drawer) => this.drawer = _drawer}
                    renderNavigationView={() => menu}>
                    <InboxDetail navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'Settings'){
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
                        title="Settings"
                        elevation={2}
                        credit={this.props.credit}
                        navigator={navigator}/>
                    <Settings navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'Sign'){
            return(
                <Sign navigator={navigator}/>
            );
        }
        if(route.ident == 'DashboardNewUser'){
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
                    elevation={2}
                    credit={this.props.credit}
                    navigator={navigator}/>
                <DashboardNewUser navigator={navigator}/>
            </DrawerLayoutAndroid>

            );
        }
        if(route.ident == 'Profile'){
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
                        title="Profile"
                        elevation={0}
                        credit={this.props.credit}
                        navigator={navigator}/>
                    <Profile navigator={navigator}/>
                </DrawerLayoutAndroid>

            );
        }
        if(route.ident == 'BaseInformations'){
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
                        title="Base informations"
                        elevation={2}
                        credit={this.props.credit}
                        back={true}
                        backLink='Profile'
                        navigator={navigator}/>
                    <BaseInformations navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'ChangePassword'){
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
                        title="Change password"
                        elevation={2}
                        credit={this.props.credit}
                        back={true}
                        backLink='Profile'
                        navigator={navigator}/>
                    <ChangePassword navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'PaymentData'){
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
                        title="Payment data"
                        elevation={2}
                        credit={this.props.credit}
                        back={true}
                        backLink='Profile'
                        navigator={navigator}/>
                    <PaymentData navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
        if(route.ident == 'ContactVerification'){
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
                        title="Contact verification"
                        elevation={2}
                        credit={this.props.credit}
                        back={true}
                        backLink='Profile'
                        navigator={navigator}/>
                    <ContactVerification navigator={navigator}/>
                </DrawerLayoutAndroid>
            );
        }
    }


}





