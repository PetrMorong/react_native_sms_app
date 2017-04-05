/**
 * Created by Petr on 21.2.2017.
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
    DrawerLayoutAndroid,
    ActivityIndicator,
    ListView,
    RefreshControl
} from 'react-native';
import Menu from '../../components/Menu';
import Toolbar from '../../components/Toolbar';
import Color from '../../config/Variables';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Actions} from 'react-native-router-flux';
import {fetchInbox} from './actions';

const window = Dimensions.get('window');

const mapStateToProps = (store) => {
    return {
        _: store.translator.translations,
        inbox: store.inbox
    }
};

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class InboxList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: ds.cloneWithRows([]),
            refreshing: false,
            offset: 0,
            data: [],
            reachedEndFetching: false
        };

    }

    componentDidMount() {
        if (!this.props.inbox.data) {
            this.props.dispatch(fetchInbox(20,0))
        }
    }

    componentWillReceiveProps(next){
        if(next.inbox.data){
            let newData = this.state.data.concat(next.inbox.data.data.list.data);
            this.setState({dataSource: ds.cloneWithRows(newData), data: newData, reachedEndFetching: false})
        }
    }

    renderItem(item){
        if(item.campaign){
            return <TouchableNativeFeedback onPress={()=> Actions.InboxDetail()} key={item}>
                <View>
                    <View style={styles.itemWrap}>
                        <View>
                            <Image style={styles.itemImage} resizeMode='stretch' source={require('../../images/guitarCover.jpg')}/>
                            <View style={styles.numberCircle}>
                                <Text style={{color: 'white', fontSize: 12}}>4</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', flex: 1}}>
                            <Text style={styles.itemText}>{item.campaign_id.substr(0, 30)}</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <Text>{item.time.slice(0, 5)}</Text>
                        </View>
                    </View>
                    <View style={styles.separator}/>
                </View>
            </TouchableNativeFeedback>
        }else{
            return <TouchableNativeFeedback onPress={()=> Actions.Chat()} key={item}>
                <View>
                    <View style={styles.itemWrap}>
                        <View>
                            <View style={styles.itemIconPerson}><Icon name="person" size={25} style={{color: 'white'}}/></View>
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={styles.itemText}>{item.from}</Text>
                            <Text style={styles.itemTextRead}>{item.message.substr(0, 35)}</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <Text>{item.time.slice(0, 5)}</Text>
                        </View>
                    </View>
                    <View style={styles.separator}/>
                </View>
            </TouchableNativeFeedback>
        }
    }


    onEndReached(){

        let offset = this.state.offset + 20;
        this.setState({offset: offset, reachedEndFetching: true});
        this.props.dispatch(fetchInbox(20, offset));
    }

    render() {

        let menu = <Menu/>;

        let loader;
        if (this.state.reachedEndFetching) {
            loader = <ActivityIndicator
                style={{height: 50}}
                size="large"
            />
        }
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                ref={(_drawer) => this.drawer = _drawer}
                renderNavigationView={() => menu}>
                <Toolbar
                    openMenu={() => this.drawer.openDrawer()}
                    background="container"
                    title={_('Inbox')}
                    elevation={2}/>
                <View style={styles.container}>
                    <ListView
                        refreshControl={
                          <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={() => this.props.dispatch(fetchInbox(20,0))}/>
                        }
                        dataSource={this.state.dataSource}
                        renderRow={this.renderItem}
                        onEndReached={() => this.onEndReached()}
                        onEndReachedThreshold={10}
                    />
                    <View>
                        {loader}
                    </View>
                </View>

            </DrawerLayoutAndroid>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'
    },
    itemWrap: {
        flexDirection: 'row',
        height: 70,
        alignItems: 'center',
        padding: 15
    },
    itemImage: {
        width: 45,
        height: 45,
        borderRadius: 100,
        marginRight: 15
    },
    itemText: {
        fontSize: 14,
        color: 'black',
        fontWeight: '500'
    },
    itemPrice: {
        fontSize: 16,
        color: '#BE2166',
        fontWeight: '500',
        marginLeft: 5
    },
    iconOrange: {
        color: 'orange',
        marginTop: 5
    },
    itemTextRead: {
        fontSize: 14,
    },
    itemPriceRead: {
        fontSize: 16,
        color: '#BE2166',
        marginLeft: 5
    },
    iconGreen: {
        color: 'green',
        marginTop: 5
    },
    numberCircle: {
        position: 'relative',
        bottom: 20,
        left: 30,
        backgroundColor: '#DE4232',
        borderWidth: 1,
        borderColor: 'lightgrey',
        width: 23,
        height: 23,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
    itemIconBulkgate: {
        width: 45,
        height: 45,
        backgroundColor: '#3FAEA0',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15
    },
    itemIconSunsms: {
        width: 45,
        height: 45,
        backgroundColor: '#2B2B2A',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15
    },
    itemIconPerson: {
        width: 45,
        height: 45,
        backgroundColor: Color.secondaryColor,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15
    }

});

module.exports = connect(mapStateToProps)(InboxList);