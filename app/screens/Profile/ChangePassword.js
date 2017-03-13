/**
 * Created by Petr on 27.2.2017.
 */
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

export default class ChangePassword extends Component {
    constructor(props){
        super(props)
        this.state = {}
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
                <View style={styles.container}>
                    <View style={[{padding: 15}, styles.container]}>
                        <View style={{flexDirection: 'row'}}>
                            <TextInput
                                onChangeText={(password) => this.setState({password})}
                                value={this.state.password}
                                style={{flex: 1, marginLeft: 10, marginRight: 10, }}
                                placeholder='Password'
                                secureTextEntry={true}/>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <TextInput
                                onChangeText={(newPassword) => this.setState({newPassword})}
                                value={this.state.newPassword}
                                style={{flex: 1, marginLeft: 10, marginRight: 10}}
                                placeholder='New password'
                                secureTextEntry={true}/>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <TextInput
                                onChangeText={(newPasswordAgain) => this.setState({newPasswordAgain})}
                                value={this.state.newPasswordAgain}
                                style={{flex: 1, marginLeft: 10, marginRight: 10}}
                                placeholder='New password again'
                                secureTextEntry={true}/>
                        </View>
                        <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                            <TouchableNativeFeedback onPress={() => this.props.dispatch(save())}>
                                <View style={styles.buttonWrap}>
                                    <Text style={styles.buttonText}>{_.save.toUpperCase()}</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </View>
            </DrawerLayoutAndroid>
        )
    }




    navigateToScreen(link) {
        this.props.navigator.push({
            ident: link
        })
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

module.exports = connect(mapStateToProps)(ChangePassword);