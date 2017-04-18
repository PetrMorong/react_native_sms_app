/**
 * Created by Petr on 20.2.2017.
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
import Menu from '../../../components/Menu';
import Toolbar from '../../../components/Toolbar';
import Color from '../../../config/Variables';
import { connect } from 'react-redux';
import { save, fetch } from '../../../actions/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';

const window = Dimensions.get('window');

const mapStateToProps = (store) => {
    return{
        storeList: store.storeList
    }
};

export default class StoreList extends Component{
    constructor(props){
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: ds.cloneWithRows([]),
            refreshing: false,
            data: []
        }
    }

    componentWillMount(){
        this.initialFetch()
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.storeList.data){
            let newData = this.state.data.concat(nextProps.storeList.data.result.list);
            this.setState({dataSource: ds.cloneWithRows(newData), data: newData})
        }
    }

    onEndReached(){

    }

    initialFetch(){
        this.props.dispatch(fetch('store/get-store-list', {reducer: 'storeList'}, {limit: 20, offset: 0}))
    }

    renderItem(item){
        console.log(item)
        return <TouchableNativeFeedback onPress={()=> Actions.StoreSettings({id: item.id})}>
            <View>
                <View style={styles.itemWrap}>
                    <View>
                        <Image style={styles.itemImage} resizeMode='stretch' source={require('../../../images/guitarLogo.jpg')}/>
                    </View>
                    <View style={{flexDirection: 'row', flex: 1}}>
                        <Text style={styles.itemText}>{item.name}</Text>
                    </View>
                </View>
                <View style={styles.separator}/>
            </View>
        </TouchableNativeFeedback>
    }


    render() {

        let loader;
        if(this.props.fetching){
            loader = <View style={{backgroundColor: 'white', height: window.height-60, width: window.width, justifyContent: 'center'}}>
                <ActivityIndicator
                    style={{height: 150}}
                    size="large"
                />
            </View>
        }



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
                    title={_('Stores')}
                    elevation={2}/>
                {loader}
                <View style={styles.container}>
                    <ListView
                        refreshControl={
                          <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={() => this.initialFetch()}/>
                        }
                        dataSource={this.state.dataSource}
                        renderRow={this.renderItem}
                        onEndReached={() => this.onEndReached()}
                        onEndReachedThreshold={10}
                    />
                    <TouchableNativeFeedback onPress={() => Actions.StoreCreate()}>
                        <View style={styles.bottomButton} elevation={3}>
                            <Icon name="add" style={{color: 'white'}} size={30}/>
                        </View>
                    </TouchableNativeFeedback>
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
        fontSize: 16,
        color: 'black',
        fontWeight: '500'
    },
    itemPrice: {
        fontSize: 16,
        color: '#BE2166',
        fontWeight: '500',
        marginLeft: 5
    },
    itemDate: {
        fontWeight: '500',
        color: '#0FACE0'
    },
    iconOrange: {
        color: 'orange',
        marginTop: 5
    },
    itemTextRead: {
        fontSize: 16,
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
    bottomButton: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        borderRadius: 50,
        backgroundColor: '#F44336',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50
    }

});

module.exports = connect(mapStateToProps)(StoreList);