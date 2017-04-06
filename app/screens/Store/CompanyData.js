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
import Menu from '../../components/Menu';
import Toolbar from '../../components/Toolbar';
import Color from '../../config/Variables';
import { connect } from 'react-redux';
import { save } from '../../actions/index'

const window = Dimensions.get('window');

export default class CompanyData extends Component{
    constructor(props){
        super(props)
        this.state = {
            companyName: '',
            callPrefix: '',
            phoneNumber: '',
            email: '',
            www: '',
            street: '',
            city: '',
            zip: '',
            country: ''
        }
    }

    render() {
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
                    title={_('Company data')}
                    elevation={2}
                    back={true}/>
                <View style={styles.container}>
                    <View>
                        <TextInput
                            onChangeText={(companyName) => this.setState({companyName})}
                            value={this.state.companyName}
                            style={{marginLeft: 10, marginRight: 10}}
                            placeholder={_('Company name')}/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            onChangeText={(callPrefix) => this.setState({callPrefix})}
                            value={this.state.callPrefix}
                            style={{width: window.width / 3, marginLeft: 10, marginRight: 10}}
                            placeholder={_('Call prefix')}
                            keyboardType='numeric'/>
                        <TextInput
                            onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                            value={this.state.phoneNumber}
                            style={{flex: 1, marginLeft: 10, marginRight: 10}}
                            placeholder={_('Phone number')}
                            keyboardType='numeric'/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            onChangeText={(email) => this.setState({email})}
                            value={this.state.email}
                            style={{flex: 1, marginLeft: 10, marginRight: 10}}
                            placeholder={_('Email')}/>
                        <TextInput
                            onChangeText={(www) => this.setState({www})}
                            value={this.state.www}
                            style={{flex: 1, marginLeft: 10, marginRight: 10}}
                            placeholder={_('www')}/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            onChangeText={(street) => this.setState({street})}
                            value={this.state.street}
                            style={{flex: 1, marginLeft: 10, marginRight: 10}}
                            placeholder={_('Street')}/>
                        <TextInput
                            onChangeText={(city) => this.setState({city})}
                            value={this.state.city}
                            style={{flex: 1, marginLeft: 10, marginRight: 10}}
                            placeholder={_('City')}/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            onChangeText={(zip) => this.setState({zip})}
                            value={this.state.zip}
                            style={{flex: 1, marginLeft: 10, marginRight: 10}}
                            placeholder={_('Zip')}
                            keyboardType='numeric'/>
                        <TextInput
                            onChangeText={(country) => this.setState({country})}
                            value={this.state.country}
                            style={{flex: 1, marginLeft: 10, marginRight: 10}}
                            placeholder={_('Country')}/>
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                        <TouchableNativeFeedback onPress={() => this.props.dispatch(save())}>
                            <View style={styles.buttonWrap}>
                                <Text style={styles.buttonText}>{_('Save').toUpperCase()}</Text>
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