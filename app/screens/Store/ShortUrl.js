/**
 * Created by Petr on 8.2.2017.
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
import Icon from 'react-native-vector-icons/MaterialIcons';
import Color from '../../config/Variables';
import { connect } from 'react-redux';
import { save } from '../../actions/Actions'
import { Actions } from 'react-native-router-flux';
import Menu from '../../components/Menu';
import Toolbar from '../../components/Toolbar';


const mapStateToProps = (store) => {
    return{
        _: store.translator.translations,
    }
}


export default class ShortUrl extends Component{
    constructor(props){
        super(props)
        this.state = {
            url: '',
            showHelp: false
        }
    }


    render() {
        let menu  = <Menu/>;

        let help;
        if(this.state.showHelp){
            help = <View style={{paddingLeft: 30, paddingRight: 30}}>
                <Text style={{color: 'black'}}>It is URL displayed to your clients in SMS. You can choose which one do you like the best.</Text>
                <View style={{paddingTop: 15}}>
                    <Text>{_('Example message')}:</Text>
                    <View style={{backgroundColor: '#F1F0F0', borderRadius: 5, padding: 15}}>
                        <Text>
                            Hello Martin, we have old guitars for sale. 40 % off until the end of the week. Hope you like it.
                        </Text>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
                            <Text>{_('Check it out here')}:</Text>
                            <View style={{ padding: 5, borderWidth: 2, borderColor: 'red', marginLeft: 15}}>
                                <Text style={{color: '#1580FD'}}>www.url7.com/x1</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
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
                    title={_('Short url')}
                    elevation={2}
                    back={true}/>
                <View style={styles.container}>
                    <View style={{padding: 15}}>
                        <TextInput
                            onChangeText={(url) => this.setState({url})}
                            value={this.state.url}
                            style={{marginLeft: 15, marginRight: 15, marginBottom: 15}}
                            placeholder={_('Short url')}/>
                    </View>
                    <View style={styles.separator}/>
                    <TouchableNativeFeedback onPress={() => this.setState({showHelp: !this.state.showHelp})}>
                        <View style={{padding: 30, flexDirection: 'row', alignItems: 'center'}}>
                            <Icon name="help-outline" size={25} style={{marginRight: 5, color: '#1580FD'}}/>
                            <Text style={{marginRight: 10, fontSize: 20, color: '#1580FD'}}>{_('What is deal short url')} ?</Text>
                        </View>
                    </TouchableNativeFeedback>
                    {help}
                    <View style={{flex: 1, padding: 15, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                        <View style={{ alignItems: 'flex-end'}}>
                            <TouchableNativeFeedback onPress={() => this.props.dispatch(save())}>
                                <View style={styles.buttonWrap}>
                                    <Text style={styles.buttonText}>{_('save').toUpperCase()}</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </View>
            </DrawerLayoutAndroid>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'
    },
    buttonWrap: {
        width: 110,
        borderRadius: 2,
        backgroundColor: Color.button,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
    },
    buttonText: {
        color: Color.buttonText,
        fontWeight: '500'
    }

});

module.exports = connect(mapStateToProps)(ShortUrl);