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


export default class BaseInformations extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: this.props.user.first_name,
            lastName: this.props.user.last_name,
            phoneNumber: this.props.user.phone_number,
            timeZone: this.props.user.timezone,
            country: this.props.user.country,
            phone_prefix: this.props.user.phone_prefix

        }
    }

    render() {
        const _=this.props._;
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
                    title={_.base_informations}
                    elevation={0}
                    back={true}/>
                <View style={[{padding: 15}, styles.container]}>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            onChangeText={(firstName) => this.setState({firstName})}
                            value={this.state.firstName}
                            style={{flex: 1, marginLeft: 10, marginRight: 10, }}
                            placeholder={_.first_name}
                            placeholderTextColor={Color.displayText}
                            underlineColorAndroid={Color.displayText}/>
                        <TextInput
                            onChangeText={(lastName) => this.setState({lastName})}
                            value={this.state.lastName}
                            style={{flex: 1, marginLeft: 10, marginRight: 10, }}
                            placeholder={_.last_name}
                            keyboardType='numeric'
                            placeholderTextColor={Color.displayText}
                            underlineColorAndroid={Color.displayText}/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            onChangeText={(callPrefix) => this.setState({callPrefix})}
                            value={this.state.callPrefix}
                            style={{width: window.width / 4, marginLeft: 10, marginRight: 10}}
                            placeholder={_.call_prefix}
                            keyboardType='numeric'
                            placeholderTextColor={Color.displayText}
                            underlineColorAndroid={Color.displayText}/>
                        <TextInput
                            onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                            value={this.state.phoneNumber}
                            style={{flex: 1, marginLeft: 10, marginRight: 10}}
                            placeholder={_.phone_number}
                            placeholderTextColor={Color.displayText}
                            underlineColorAndroid={Color.displayText}/>
                    </View>
                    <View>
                        <Picker
                            style={{width: window.width /10 * 9 -5, marginTop: 5, marginLeft: 5, color: Color.displayText}}
                            selectedValue={this.state.timeZone}
                            onValueChange={(timeZone) => this.setState({senderValue: timeZone})}>
                            <Picker.Item label="Europe/Oslo" value="Europe/Oslo" />
                            <Picker.Item label="afrika" value="h" />
                            <Picker.Item label="dfs" value="kk" />
                            <Picker.Item label="dfs" value="ff" />
                        </Picker>
                    </View>
                    <View>
                        <Picker
                            style={{width: window.width /10 * 9 -5, marginTop: 5, marginLeft: 5, color: Color.displayText}}
                            selectedValue={this.state.timeZone}
                            onValueChange={(timeZone) => this.setState({senderValue: timeZone})}>
                            <Picker.Item label="United kingdom" value="Europe/Oslo" />
                            <Picker.Item label="afrika" value="h" />
                            <Picker.Item label="dfs" value="kk" />
                            <Picker.Item label="dfs" value="ff" />
                        </Picker>
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                        <TouchableNativeFeedback onPress={() => this.props.dispatch(save())}>
                            <View style={styles.buttonWrap}>
                                <Text style={styles.buttonText}>{_.save.toUpperCase()}</Text>
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
        backgroundColor: 'white'
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
        fontSize: 17,
        fontWeight: '500'
    }
});

module.exports = connect(mapStateToProps)(BaseInformations);