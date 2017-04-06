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
    TouchableNativeFeedback,
    Animated,
    Easing
} = require('react-native');
const { Component } = React;

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';


const mapStateToProps = (store) => {
    return{
        _: store.translator.translations,
        user: store.user.user.user,
        credit: 853.7
    }
}

export default class Menu extends Component {
    constructor(props){
        super(props);

        this.state = {
            toggleSms: false,
            toggleStore: false,
            togglePayments: false,
            animatedValPayments: new Animated.Value(0),
            animatedValStore: new Animated.Value(0),
            animatedValSms: new Animated.Value(0)
        };
    }


    toggleItem(type){

        if(type == 'toggleSms'){

            let height;
            if(this.state.toggleSms){
                height = 0;
            }else{
                height = 350;
            }

            Animated.timing(this.state.animatedValSms, {
                toValue: height,
                duration: 250,
                easing: Easing.inOut(Easing.ease)
            }).start();

            this.setState({toggleSms: !this.state[type]});

        }
        if(type == 'toggleStore'){

            let height;
            if(this.state.toggleStore){
                height = 0;
            }else{
                height = 150;
            }

            Animated.timing(this.state.animatedValStore, {
                toValue: height,
                duration: 250,
                easing: Easing.inOut(Easing.ease)
            }).start();

            this.setState({toggleStore: !this.state[type]});

        }
        if(type == 'togglePayments'){

            let height;
            if(this.state.togglePayments){
                height = 0;
            }else{
                height = 100;
            }

            Animated.timing(this.state.animatedValPayments, {
                toValue: height,
                duration: 250,
                easing: Easing.inOut(Easing.ease)
            }).start();

            this.setState({togglePayments: !this.state[type]});

        }
    }


    render() {

        let image;
        if(this.props.user.photo === ''){
            image = <View style={[styles.avatar, {backgroundColor: 'grey'}]}>
                <Icon name="person" style={{color: 'white'}} size={50}/>
            </View>
        }else{
            image = <Image
                style={styles.avatar}
                source={{ uri: 'data:image/png;base64,' + this.props.user.photo }}/>
        }

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
                        <Text style={styles.menuLinkActive}>{_('Store')}</Text>
                        <View style={{flex: 1}} />
                        <Icon name="arrow-drop-down"  style={styles.menuChevronDownActive} size={25} />
                    </View>
                </TouchableNativeFeedback>
            </View>
        }else{
           store = <TouchableNativeFeedback onPress={() => this.toggleItem('toggleStore')}>
                <View style={styles.menuRow}>
                    <Icon name="store" style={styles.menuRightIcon}/>
                    <Text style={styles.menuLink}>{_('Store')}</Text>
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
                        <Text style={styles.menuLinkActive}>{_('Payments')}</Text>
                        <View style={{flex: 1}} />
                        <Icon name="arrow-drop-down"  style={styles.menuChevronDownActive} size={25} />
                    </View>
                </TouchableNativeFeedback>
            </View>
        }else{
            payments = <TouchableNativeFeedback onPress={() => this.toggleItem('togglePayments')}>
                <View style={styles.menuRow}>
                    <Icon name="payment" style={styles.menuRightIcon}/>
                    <Text style={styles.menuLink}>{_('Payments')}</Text>
                    <View style={{flex: 1}} />
                    <Icon name="arrow-drop-down"  style={styles.menuChevronDown} size={25} />
                </View>
            </TouchableNativeFeedback>
        }


        return (
            <ScrollView style={styles.menu}>
                <TouchableNativeFeedback onPress={(event) => Actions.Profile()}>
                    <View style={styles.avatarContainer}>
                        <View style={[styles.avatar, {backgroundColor: Color.secondaryColor}]}>
                            {image}
                        </View>
                        <Text style={styles.name}>{this.props.user.first_name} {this.props.user.last_name}</Text>
                        <Text style={styles.email}>{this.props.user.email}</Text>
                    </View>
                </TouchableNativeFeedback>
                <View scrollsToTop={false}>
                    <TouchableNativeFeedback onPress={(event) => Actions.Dashboard()}>
                        <View style={styles.menuRow} >
                            <Icon name="home"  style={styles.menuRightIcon}/>
                            <Text style={styles.menuLink} >{_('Dashboard')}</Text>
                            <View style={{flex: 1}} />
                        </View>
                    </TouchableNativeFeedback>
                    <View>
                        {smsItem}
                        <Animated.View style={[styles.collapsableBody, {height: this.state.animatedValSms}]}>
                            <TouchableNativeFeedback onPress={(event) => Actions.CampaignCreate()}>
                                <View style={styles.menuRow}>
                                    <Icon name="add" style={styles.menuRightIcon}/>
                                    <Text style={styles.menuLink} >{_('Start campaign')}</Text>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={(event) => Actions.CampaignList()}>
                                <View style={styles.menuRow}>
                                    <Icon name="sms" style={styles.menuRightIcon}/>
                                    <Text style={styles.menuLink} >{_('Campaigns')}</Text>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={(event) => Actions.HistoryList()}>
                                <View style={styles.menuRow}>
                                    <Icon name="history" style={styles.menuRightIcon}/>
                                    <Text style={styles.menuLink} >{_('History')}</Text>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={(event) => Actions.ScheduledList()}>
                                <View style={styles.menuRow}>
                                    <Icon name="alarm-on" style={styles.menuRightIcon}/>
                                    <Text style={styles.menuLink} >{_('Scheduled')}</Text>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={(event) => Actions.InboxList()}>
                                <View style={styles.menuRow}>
                                    <Icon name="call-received" style={styles.menuRightIcon}/>
                                    <Text style={styles.menuLink} >{_('Inbox')}</Text>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={(event) => Actions.OutboxList()}>
                                <View style={styles.menuRow}>
                                    <Icon name="call-made" style={styles.menuRightIcon}/>
                                    <Text style={styles.menuLink} >{_('Outbox')}</Text>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={(event) => Actions.Statistics()}>
                                <View style={styles.menuRow}>
                                    <Icon name="timeline" style={styles.menuRightIcon}/>
                                    <Text style={styles.menuLink} >{_('Statistics')}</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </Animated.View>
                    </View>
                    <View>
                        {store}
                        <Animated.View style={[styles.collapsableBody, {height: this.state.animatedValStore}]}>
                            <TouchableNativeFeedback onPress={(event) => Actions.StoreCreate()}>
                                <View style={styles.menuRow}>
                                    <Icon name="add" style={styles.menuRightIcon}/>
                                    <Text style={styles.menuLink} >{_('Create store')}</Text>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={(event) => Actions.StoreList()}>
                                <View style={styles.menuRow}>
                                    <Icon name="store" style={styles.menuRightIcon}/>
                                    <Text style={styles.menuLink} >{_('Stores')}</Text>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={(event) => Actions.OrderList()}>
                                <View style={styles.menuRow}>
                                    <Icon name="shopping-cart" style={styles.menuRightIcon}/>
                                    <Text style={styles.menuLink} >{_('Orders')}</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </Animated.View>
                    </View>
                    <View>
                        {payments}
                        <Animated.View style={[styles.collapsableBody, {height: this.state.animatedValPayments}]}>
                            <TouchableNativeFeedback onPress={(event) => Actions.BuyCredit()}>
                                <View style={styles.menuRow}>
                                    <Icon name="account-balance-wallet" style={styles.menuRightIcon}/>
                                    <Text style={styles.menuLink}>{_('Buy credit')}</Text>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={(event) => Actions.Transactions()}>
                                <View style={styles.menuRow}>
                                    <Icon name="compare-arrows" style={styles.menuRightIcon}/>
                                    <Text style={styles.menuLink}>{_('Transactions')}</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </Animated.View>
                    </View>
                    <View style={styles.separator} />
                    <TouchableNativeFeedback onPress={(event) => Actions.Settings()}>
                        <View style={styles.menuRow} >
                            <Icon name="settings"  style={styles.menuRightIcon}/>
                            <Text style={styles.menuLink} >{_('Settings')}</Text>
                            <View style={{flex: 1}} />
                        </View>
                    </TouchableNativeFeedback>
                    <View style={styles.menuRow}>
                        <Icon name="help"  style={styles.menuRightIcon}/>
                        <Text style={styles.menuLink}>{_('Help and feedback')}</Text>
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
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
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