import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import Color from '../config/Variables';
import { Actions } from 'react-native-router-flux';

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


const mapStateToProps = (store) => {
    return{
        _: store.translator.translations,
        user: store.user.user,
        credit: 853.7
    }
}

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

    componentWillMount(){
        console.log(this.props)
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
        const _=this.props._;

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
                    <TouchableNativeFeedback onPress={(event) => Actions.CampaignCreate()}>
                        <View style={styles.menuRow}>
                            <Icon name="add" style={styles.menuRightIcon}/>
                            <Text style={styles.menuLink} >{_.start_campaign}</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={(event) => Actions.CampaignList()}>
                        <View style={styles.menuRow}>
                            <Icon name="sms" style={styles.menuRightIcon}/>
                            <Text style={styles.menuLink} >{_.campaigns}</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={(event) => Actions.HistoryList()}>
                        <View style={styles.menuRow}>
                            <Icon name="history" style={styles.menuRightIcon}/>
                            <Text style={styles.menuLink} >{_.history}</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={(event) => Actions.ScheduledList()}>
                        <View style={styles.menuRow}>
                            <Icon name="alarm-on" style={styles.menuRightIcon}/>
                            <Text style={styles.menuLink} >{_.scheduled}</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={(event) => Actions.InboxList()}>
                        <View style={styles.menuRow}>
                            <Icon name="call-received" style={styles.menuRightIcon}/>
                            <Text style={styles.menuLink} >{_.inbox}</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={(event) => Actions.OutboxList()}>
                        <View style={styles.menuRow}>
                            <Icon name="call-made" style={styles.menuRightIcon}/>
                            <Text style={styles.menuLink} >{_.outbox}</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={(event) => Actions.Statistics()}>
                        <View style={styles.menuRow}>
                            <Icon name="timeline" style={styles.menuRightIcon}/>
                            <Text style={styles.menuLink} >{_.statistics}</Text>
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
                        <Text style={styles.menuLinkActive}>{_.store}</Text>
                        <View style={{flex: 1}} />
                        <Icon name="arrow-drop-down"  style={styles.menuChevronDownActive} size={25} />
                    </View>
                </TouchableNativeFeedback>
                <View style={styles.collapsableBody}>
                    <TouchableNativeFeedback onPress={(event) => Actions.StoreCreate()}>
                        <View style={styles.menuRow}>
                            <Icon name="add" style={styles.menuRightIcon}/>
                            <Text style={styles.menuLink} >{_.create_store}</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={(event) => Actions.StoreList()}>
                        <View style={styles.menuRow}>
                            <Icon name="store" style={styles.menuRightIcon}/>
                            <Text style={styles.menuLink} >{_.store}</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={(event) => Actions.OrderList()}>
                        <View style={styles.menuRow}>
                            <Icon name="shopping-cart" style={styles.menuRightIcon}/>
                            <Text style={styles.menuLink} >{_.orders}</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        }else{
           store = <TouchableNativeFeedback onPress={() => this.toggleItem('toggleStore')}>
                <View style={styles.menuRow}>
                    <Icon name="store" style={styles.menuRightIcon}/>
                    <Text style={styles.menuLink}>{_.store}</Text>
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
                        <Text style={styles.menuLinkActive}>{_.payments}</Text>
                        <View style={{flex: 1}} />
                        <Icon name="arrow-drop-down"  style={styles.menuChevronDownActive} size={25} />
                    </View>
                </TouchableNativeFeedback>
                <View style={styles.collapsableBody}>
                    <TouchableNativeFeedback onPress={(event) => Actions.BuyCredit()}>
                        <View style={styles.menuRow}>
                            <Icon name="account-balance-wallet" style={styles.menuRightIcon}/>
                            <Text style={styles.menuLink}>{_.buy_credit}</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={(event) => Actions.Transactions()}>
                        <View style={styles.menuRow}>
                            <Icon name="compare-arrows" style={styles.menuRightIcon}/>
                            <Text style={styles.menuLink}>{_.transactions}</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        }else{
            payments = <TouchableNativeFeedback onPress={() => this.toggleItem('togglePayments')}>
                <View style={styles.menuRow}>
                    <Icon name="payment" style={styles.menuRightIcon}/>
                    <Text style={styles.menuLink}>{_.payments}</Text>
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
                        <Text style={styles.name}>{this.props.user.first_name} {this.props.user.last_name}</Text>
                        <Text style={styles.email}>{this.props.user.email}</Text>
                    </View>
                </TouchableNativeFeedback>
                <View scrollsToTop={false}>
                    <TouchableNativeFeedback onPress={(event) => Actions.Dashboard()}>
                        <View style={styles.menuRow} >
                            <Icon name="home"  style={styles.menuRightIcon}/>
                            <Text style={styles.menuLink} >{_.dashboard}</Text>
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
                    <TouchableNativeFeedback onPress={(event) => Actions.Settings()}>
                        <View style={styles.menuRow} >
                            <Icon name="settings"  style={styles.menuRightIcon}/>
                            <Text style={styles.menuLink} >{_.settings}</Text>
                            <View style={{flex: 1}} />
                        </View>
                    </TouchableNativeFeedback>
                    <View style={styles.menuRow}>
                        <Icon name="help"  style={styles.menuRightIcon}/>
                        <Text style={styles.menuLink}>{_.help_and_feedback}</Text>
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
        backgroundColor: Color.secondaryColor,
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 50
    },
    name: {
        color: Color.menuName,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5
    },
    email: {
        color: Color.menuName,
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
        backgroundColor: Color.menuPrimary
    },
    menuLink: {
        color: Color.menuText,
        fontSize: 16,
        marginLeft: 20,
        fontWeight: '500'
    },
    menuChevronDown: {
        marginRight: 10,
        color: Color.menuText
    },
    menuRightIcon: {
        fontSize: 20
    },
    menuLinkActive: {
        fontSize: 16,
        marginLeft: 20,
        color: Color.menuTextHighlight,
        fontWeight: '500'
    },
    menuChevronDownActive: {
        marginRight: 10,
        color: Color.menuTextHighlight
    },
    menuRightIconActive: {
        fontSize: 20,
        color: Color.menuTextHighlight
    },
    separator: {
        height: 1,
        backgroundColor: '#cccccc'
    },
    collapsableBody: {
        backgroundColor: Color.menuSecondary,
        padding: 10,
        paddingTop: 0,
        paddingBottom: 0
    }
});


module.exports = connect(mapStateToProps)(Menu);