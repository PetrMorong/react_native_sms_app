/**
 * Created by Petr on 4.2.2017.
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
import { save } from '../../actions/Actions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';

const window = Dimensions.get('window');

const mapStateToProps = (store) => {
    return{
        _: store.translator.translations
    }
}

export default class CampaignList extends Component{
    constructor(props){
        super(props);
        this.state = {
            selecting: false,
            selectCount: 0,
            data: {
                nice: {
                    type: 'smart',
                    name: 'real camp',
                    id: '009',
                    status: 'deal',
                    selected: false
                },
                lol: {
                    type: 'classic',
                    name: 'clasic',
                    id: '009',
                    status: 'recipients',
                    selected: false
                },
                oo: {
                    type: 'smart',
                    name: 'real camp',
                    id: '005',
                    status: 'text',
                    selected: false
                }
            }
        }
    }

    render(){
        let menu  = <Menu/>;
        let status;
        let list = Object.keys(this.state.data).map((key) => {
            if(this.state.data[key].status == 'text'){
                status = <View style={styles.d} >
                    <Icon name="group" style={{color: '#2196F3'}} size={15}/>
                    <Text style={styles.e}>Recipients</Text>
                </View>
            }
            if(this.state.data[key].status == 'recipients'){
                status = <View style={styles.d} >
                    <Icon name="group" style={{color: '#2196F3'}} size={15}/>
                    <Text style={styles.e}>Recipients</Text>
                </View>
            }
            if(this.state.data[key].status == 'deal'){
                status = <View style={styles.d} >
                    <Icon name="shopping-cart" style={{color: '#2196F3'}} size={15}/>
                    <Text style={styles.e}>Deal</Text>
                </View>
            }

            if(this.state.data[key].selected){
                return(
                    <TouchableWithoutFeedback key={key}  onLongPress={(event) => this.select(key)}>
                        <View>
                            <View style={styles.h} >
                                <View style={styles.g}>
                                    <Icon name="done" style={{color: 'white'}} size={20}/>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text style={styles.c}>[{this.state.data[key].id}] {this.state.data[key].name}</Text>
                                </View>
                                {status}
                            </View>
                            <View style={styles.separator}/>
                        </View>
                    </TouchableWithoutFeedback>
                )
            }else{
                if(this.state.data[key].type == 'smart'){
                    return(
                        <TouchableWithoutFeedback key={key} onPress={(event) => Actions.CampaignRecipients()} onLongPress={(event) => this.select(key)}>
                           <View>
                               <View style={styles.a} >
                                   <View style={styles.b}>
                                       <Icon name="shopping-cart" style={{color: 'white'}} size={20}/>
                                   </View>
                                   <View style={{flex: 1}}>
                                       <Text style={styles.c}>[{this.state.data[key].id}] {this.state.data[key].name}</Text>
                                   </View>
                                   {status}
                               </View>
                               <View style={styles.separator}/>
                           </View>
                        </TouchableWithoutFeedback>
                    )
                }
                if(this.state.data[key].type == 'classic'){
                    return(
                        <TouchableWithoutFeedback key={key} onPress={(event) => Actions.CampaignRecipients()} onLongPress={(event) => this.select(key)}>
                            <View>
                                <View style={styles.a}  >
                                    <View style={styles.f}>
                                        <Icon name="textsms" style={{color: 'white'}} size={20}/>
                                    </View>
                                    <View style={{flex: 1}}>
                                        <Text style={styles.c}>[{this.state.data[key].id}] {this.state.data[key].name}</Text>
                                    </View>
                                    {status}
                                </View>
                                <View style={styles.separator}/>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                }
            }
        });

        let toolbar;
        if(this.state.selecting){
            toolbar = <TouchableNativeFeedback onPress={()=>this.cancelSelection()}>
                <View style={styles.toolbarContainer} elevation={2}>
                    <Icon style={{color: 'white'}} name="close" size={30}/>
                    <View style={{flex: 1}}>
                        <Text style={{color: 'white', marginLeft: 15, fontSize: 20}}>{this.state.selectCount}</Text>
                    </View>
                    <Icon style={{color: 'white'}} name="delete" size={22}/>
                </View>
            </TouchableNativeFeedback>
        }else{
            toolbar = <Toolbar
                openMenu={() => this.drawer.openDrawer()}
                background="container"
                title={_('Campaigns')}
                elevation={2}/>
        }

        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                ref={(_drawer) => this.drawer = _drawer}
                renderNavigationView={() => menu}>
                <View style={styles.container}>
                    {toolbar}
                    <ScrollView >
                        {list}
                    </ScrollView>
                    <TouchableNativeFeedback onPress={(event) => Actions.CampaignCreate()}>
                        <View style={styles.bottomButton} elevation={2}>
                            <Icon name="add" style={{color: Color.addButtonColor}} size={30}/>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </DrawerLayoutAndroid>
        )

    }

    select(key){
        let selected = JSON.parse(JSON.stringify(this.state.data));
        selected[key].selected = !selected[key].selected;

        let selectCount = this.state.selectCount;
        if(selected[key].selected){
            selectCount++;
        }else{
            selectCount--;
        }

        let selecting;
        if(selectCount > 0){
            selecting = true;
        }else{
            selecting = false;
        }

        this.setState({data: selected, selecting: selecting, selectCount: selectCount})
    }

    cancelSelection(){
        let selected = JSON.parse(JSON.stringify(this.state.data));

        let newSelected = Object.keys(selected).map((key)=>{
            selected[key].selected = false;
            return selected[key];
        });

        this.setState({selecting: false, data: newSelected, selectCount: 0})
    }

}


const styles = StyleSheet.create({
    toolbarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#8B8B8B',
        height: 60,
        padding: 15,
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'
    },
    a: {
        flexDirection: 'row',
        height: 70,
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15
    },
    b: {
        backgroundColor: '#CC2166',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    c: {
        color: 'black',
        marginLeft: 10
    },
    d: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    e: {
        color: '#2196F3',
        marginLeft: 3
    },
    f: {
        backgroundColor: '#3FAEA0',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    g: {
        backgroundColor: '#8B8B8B',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    h: {
        flexDirection: 'row',
        height: 70,
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#D8D8D8'
    },
    bottomButton: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        borderRadius: 50,
        backgroundColor: Color.addButtonBackground,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60
    }
});

module.exports = connect(mapStateToProps)(CampaignList);