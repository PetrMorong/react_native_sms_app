import Icon from 'react-native-vector-icons/MaterialIcons';
const React = require('react');
const {
    Dimensions,
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
    TouchableNativeFeedback
} = require('react-native');
const { Component } = React;

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';


export default class Menu extends Component {
    constructor(props){
        super(props);

        this.state = {
            toggleSms: false,
            toggleStore: false,
            togglePayments: false
        };
    }

    navigateToScreen(link){
        this.props.navigator.push({
            ident: link
        })
    }

    toggleItem(type){
        if(type == 'toggleSms'){
            this.setState({toggleSms: !this.state[type], toggleStore: false, togglePayments: false});
        }
        if(type == 'toggleStore'){
            this.setState({toggleStore: !this.state[type], toggleSms: false, togglePayments: false});
        }
        if(type == 'togglePayments'){
            this.setState({togglePayments: !this.state[type], toggleSms: false, toggleStore: false});
        }
    }


    render() {
        let smsItem;
        if(this.state.toggleSms){
            smsItem = <View>
                <TouchableNativeFeedback onPress={() => this.toggleItem('toggleSms')}>
                    <View style={styles.menuRowActive} >
                        <Icon name="email" style={styles.menuRightIconActive}/>
                        <Text style={styles.menuLinkActive}>SMS</Text>
                        <View style={{flex: 1}} />
                        <Icon name="arrow-drop-down"  style={styles.menuChevronDownActive} size={25} />
                    </View>
                </TouchableNativeFeedback>
                <View style={styles.collapsableBody}>
                    <TouchableNativeFeedback onPress={(event) => this.navigateToScreen('CampaignCreate')}>
                        <View style={styles.menuRow}>
                            <Icon name="add" style={styles.menuRightIcon}/>
                            <Text style={styles.menuLink} >Start campaign</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={(event) => this.navigateToScreen('CampaignList')}>
                        <View style={styles.menuRow}>
                            <Icon name="sms" style={styles.menuRightIcon}/>
                            <Text style={styles.menuLink} >Campaigns</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={(event) => this.navigateToScreen('HistoryList')}>
                        <View style={styles.menuRow}>
                            <Icon name="history" style={styles.menuRightIcon}/>
                            <Text style={styles.menuLink} >History</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={(event) => this.navigateToScreen('ScheduledList')}>
                        <View style={styles.menuRow}>
                            <Icon name="alarm-on" style={styles.menuRightIcon}/>
                            <Text style={styles.menuLink} >Scheduled</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={(event) => this.navigateToScreen('InboxList')}>
                        <View style={styles.menuRow}>
                            <Icon name="call-received" style={styles.menuRightIcon}/>
                            <Text style={styles.menuLink} >Inbox</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={(event) => this.navigateToScreen('OutboxList')}>
                        <View style={styles.menuRow}>
                            <Icon name="call-made" style={styles.menuRightIcon}/>
                            <Text style={styles.menuLink} >Outbox</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={(event) => this.navigateToScreen('Statistics')}>
                        <View style={styles.menuRow}>
                            <Icon name="timeline" style={styles.menuRightIcon}/>
                            <Text style={styles.menuLink} >Statistics</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        }else{
            smsItem = <TouchableNativeFeedback onPress={() => this.toggleItem('toggleSms')}>
                <View style={styles.menuRow}>
                    <Icon name="email" style={styles.menuRightIcon}/>
                    <Text style={styles.menuLink}>SMS</Text>
                    <View style={{flex: 1}} />
                    <Icon name="arrow-drop-down"  style={styles.menuChevronDown} size={25} />
                </View>
            </TouchableNativeFeedback>
        }

        let store;
        if(this.state.toggleStore){
           store = <View>
                <TouchableNativeFeedback onPress={() => this.toggleItem('toggleStore')}>
                    <View style={styles.menuRowActive} >
                        <Icon name="store" style={styles.menuRightIconActive}/>
                        <Text style={styles.menuLinkActive}>Store</Text>
                        <View style={{flex: 1}} />
                        <Icon name="arrow-drop-down"  style={styles.menuChevronDownActive} size={25} />
                    </View>
                </TouchableNativeFeedback>
                <View style={styles.collapsableBody}>
                    <TouchableNativeFeedback onPress={(event) => this.navigateToScreen('StoreCreate')}>
                        <View style={styles.menuRow}>
                            <Icon name="add" style={styles.menuRightIcon}/>
                            <Text style={styles.menuLink} >Create store</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={(event) => this.navigateToScreen('StoreList')}>
                        <View style={styles.menuRow}>
                            <Icon name="store" style={styles.menuRightIcon}/>
                            <Text style={styles.menuLink} >Stores</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={(event) => this.navigateToScreen('OrderList')}>
                        <View style={styles.menuRow}>
                            <Icon name="shopping-cart" style={styles.menuRightIcon}/>
                            <Text style={styles.menuLink} >Orders</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        }else{
           store = <TouchableNativeFeedback onPress={() => this.toggleItem('toggleStore')}>
                <View style={styles.menuRow}>
                    <Icon name="store" style={styles.menuRightIcon}/>
                    <Text style={styles.menuLink}>Store</Text>
                    <View style={{flex: 1}} />
                    <Icon name="arrow-drop-down"  style={styles.menuChevronDown} size={25} />
                </View>
            </TouchableNativeFeedback>
        }

        let payments;
        if(this.state.togglePayments){
            payments = <View>
                <TouchableNativeFeedback onPress={() => this.toggleItem('togglePayments')}>
                    <View style={styles.menuRowActive} >
                        <Icon name="payment" style={styles.menuRightIconActive}/>
                        <Text style={styles.menuLinkActive}>Payments</Text>
                        <View style={{flex: 1}} />
                        <Icon name="arrow-drop-down"  style={styles.menuChevronDownActive} size={25} />
                    </View>
                </TouchableNativeFeedback>
                <View style={styles.collapsableBody}>
                    <TouchableNativeFeedback onPress={(event) => this.navigateToScreen('BuyCredit')}>
                        <View style={styles.menuRow}>
                            <Icon name="account-balance-wallet" style={styles.menuRightIcon}/>
                            <Text style={styles.menuLink} >Buy credit</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={(event) => this.navigateToScreen('Transactions')}>
                        <View style={styles.menuRow}>
                            <Icon name="compare-arrows" style={styles.menuRightIcon}/>
                            <Text style={styles.menuLink} >Transactions</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        }else{
            payments = <TouchableNativeFeedback onPress={() => this.toggleItem('togglePayments')}>
                <View style={styles.menuRow}>
                    <Icon name="payment" style={styles.menuRightIcon}/>
                    <Text style={styles.menuLink}>Payments</Text>
                    <View style={{flex: 1}} />
                    <Icon name="arrow-drop-down"  style={styles.menuChevronDown} size={25} />
                </View>
            </TouchableNativeFeedback>
        }


        return (
            <ScrollView style={styles.menu}>
                <TouchableNativeFeedback onPress={(event) => this.navigateToScreen('Profile')}>
                    <View style={styles.avatarContainer}>
                        <Image
                            style={styles.avatar}
                            source={{ uri, }}/>
                        <Text style={styles.name}>{this.props.user.user.name}</Text>
                        <Text style={styles.email}>moriandr73@gmail.com</Text>
                    </View>
                </TouchableNativeFeedback>
                <View scrollsToTop={false}>
                    <TouchableNativeFeedback onPress={(event) => this.navigateToScreen('Dashboard')}>
                        <View style={styles.menuRow} >
                            <Icon name="home"  style={styles.menuRightIcon}/>
                            <Text style={styles.menuLink} >Dashboard</Text>
                            <View style={{flex: 1}} />
                        </View>
                    </TouchableNativeFeedback>
                    <View>
                        {smsItem}
                    </View>
                    <View>
                        {store}
                    </View>
                    <View>
                        {payments}
                    </View>
                    <View style={styles.separator} />
                    <TouchableNativeFeedback onPress={(event) => this.navigateToScreen('Settings')}>
                        <View style={styles.menuRow} >
                            <Icon name="settings"  style={styles.menuRightIcon}/>
                            <Text style={styles.menuLink} >Settings</Text>
                            <View style={{flex: 1}} />
                        </View>
                    </TouchableNativeFeedback>
                    <View style={styles.menuRow}>
                        <Icon name="help"  style={styles.menuRightIcon}/>
                        <Text style={styles.menuLink}>Help & feedback</Text>
                        <View style={{flex: 1}} />
                    </View>
                </View>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        width: 300,
        height: window.height,
        backgroundColor: 'white'
    },
    avatarContainer: {
        height: 200,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#064464',
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
    menuRow: {
        padding: 15,
        height: 50,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    menuRowActive: {
        padding: 15,
        height: 55,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#BE2166'
    },
    menuLink: {
        color: '#777777',
        fontSize: 16,
        marginLeft: 20,
        fontWeight: '500'
    },
    menuChevronDown: {
        marginRight: 10
    },
    menuRightIcon: {
        fontSize: 20
    },
    menuLinkActive: {
        fontSize: 16,
        marginLeft: 20,
        color: 'white',
        fontWeight: '500'
    },
    menuChevronDownActive: {
        marginRight: 10,
        color: 'white'
    },
    menuRightIconActive: {
        fontSize: 20,
        color: 'white'
    },
    separator: {
        height: 1,
        backgroundColor: '#cccccc'
    },
    collapsableBody: {
        backgroundColor: '#F2D3E0',
        padding: 10,
        paddingTop: 0,
        paddingBottom: 0
    }
});
