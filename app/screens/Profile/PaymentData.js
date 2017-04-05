/**
 * Created by Petr on 27.2.2017.
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
import { save } from '../../actions/Actions'

const window = Dimensions.get('window');

const mapStateToProps = (store) => {
    return{
        _: store.translator.translations,
        user: store.user.user
    }
}

export default class PaymentData extends Component {
    constructor(props){
        super(props)
        this.state = {
            switchCompany: false
        }
    }

    render() {
        let menu  = <Menu/>

        let company;
        if(this.state.switchCompany){
            company = <View>
                <TextInput
                    onChangeText={(companyName) => this.setState({companyName})}
                    value={this.state.companyName}
                    style={{marginLeft: 10, marginRight: 10}}
                    placeholder={_('Company name')}/>
                <View style={{flexDirection: 'row'}}>
                    <TextInput
                        onChangeText={(companyId) => this.setState({companyId})}
                        value={this.state.companyId}
                        style={{flex: 1, marginLeft: 10, marginRight: 10}}
                        placeholder={_('Company id')}/>
                    <TextInput
                        onChangeText={(companyVat) => this.setState({companyVat})}
                        value={this.state.companyVat}
                        style={{flex: 1, marginLeft: 10, marginRight: 10}}
                        placeholder={_('Company vat')}/>
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
                    title={_('Payment data')}
                    elevation={0}
                    back={true}/>
                <View style={styles.container}>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            onChangeText={(first_name) => this.setState({first_name})}
                            value={this.state.first_name}
                            style={{flex: 1, marginLeft: 10, marginRight: 10, }}
                            placeholder={_('First name')}/>
                        <TextInput
                            onChangeText={(last_name) => this.setState({last_name})}
                            value={this.state.last_name}
                            style={{flex: 1, marginLeft: 10, marginRight: 10, }}
                            placeholder={_('Last name')}/>
                    </View>
                    <View>
                        <TextInput
                            onChangeText={(street) => this.setState({street})}
                            value={this.state.street}
                            style={{marginLeft: 10, marginRight: 10, }}
                            placeholder={_('Street')}/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            onChangeText={(city) => this.setState({city})}
                            value={this.state.city}
                            style={{flex: 1, marginLeft: 10, marginRight: 10, }}
                            placeholder={_('City')}/>
                        <TextInput
                            onChangeText={(zip) => this.setState({zip})}
                            value={this.state.zip}
                            style={{flex: 1, marginLeft: 10, marginRight: 10, }}
                            placeholder={_('Zip')}/>
                    </View>
                    <View>
                        <Picker
                            style={{width: window.width /10 * 9 -5, marginTop: 5, marginLeft: 5, color: 'grey'}}
                            selectedValue={this.state.timeZone}
                            onValueChange={(timeZone) => this.setState({senderValue: timeZone})}>
                            <Picker.Item label={_('Country')} value="Europe/Oslo" />
                            <Picker.Item label="afrika" value="h" />
                            <Picker.Item label="dfs" value="kk" />
                            <Picker.Item label="dfs" value="ff" />
                        </Picker>
                    </View>
                    <View style={[styles.separator, {marginLeft: 10, marginRight: 10}]}/>
                    <View style={styles.switchWrap}>
                        <Text style={{fontSize: 16}}>{_('Company')}</Text>
                        <Switch
                            onValueChange={(value) => this.setState({switchCompany: value})}
                            value={this.state.switchCompany} />
                    </View>
                    {company}
                    <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                        <TouchableNativeFeedback onPress={() => this.props.dispatch(save())}>
                            <View style={styles.buttonWrap}>
                                <Text style={styles.buttonText}>{_('save').toUpperCase()}</Text>
                            </View>
                        </TouchableNativeFeedback>
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
        padding: 15
    },
    switchWrap: {
        height: 50,
        paddingRight: 10,
        paddingLeft: 15,
        marginTop: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    buttonWrap: {
        width: 110,
        borderRadius: 2,
        backgroundColor: Color.button,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2
    },
    buttonText: {
        fontWeight: '500',
        color: Color.buttonText
    }
});

module.exports = connect(mapStateToProps)(PaymentData);