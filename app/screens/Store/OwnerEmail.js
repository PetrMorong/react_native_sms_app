/**
 * Created by Petr on 9.2.2017.
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

export default class OwnerEmail extends Component{
    constructor(props){
        super(props)
        this.state = {
            message: '',
            active: true,
        }
    }

    render(){
        const _=this.props._;
        let menu  = <Menu/>;

        let view;
        if(this.state.active){
            view = <View>
                <View style={{paddingLeft: 10, paddingRight: 10}}>
                    <TextInput
                        style={{height: 100}}
                        placeholder={_.email_text}
                        ref="message"
                        multiline={true}
                        onChangeText={(message) => this.setState({message})}
                        value={this.state.message}/>
                    <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
                        <Text style={styles.fontSize10}>{_.total_sms}:</Text>
                        <Text style={styles.messageStats}>2</Text>
                        <Text style={styles.fontSize10}>{_.recipients}:</Text>
                        <Text style={styles.messageStats}>3</Text>
                        <Text style={styles.fontSize10}>SMS:</Text>
                        <Text style={styles.messageStats}>5</Text>
                        <Text style={styles.fontSize10}>{_.length}:</Text>
                        <Text style={styles.messageStats}>130/120</Text>
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
                    title='Owner email'
                    elevation={2}
                    back={true}/>
                <View style={[styles.container, {padding: 15}]}>
                    <View>
                        <View style={styles.switchWrap}>
                            <Text>{_.activate}</Text>
                            <Switch
                                onValueChange={(value) => this.setState({active: value})}
                                value={this.state.active} />
                        </View>
                        <View style={styles.separator}/>
                    </View>
                    {view}
                    <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                        <View style={{alignItems: 'flex-end'}}>
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
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    picker: {
        width: 170
    },
    line: {
        marginLeft: 5,
        marginRight: 5,
        flex: 1,
        borderBottomColor: '#D0DFE8',
        borderBottomWidth: 1,
        marginBottom: 15
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'
    },
    messageStats: {
        fontWeight: '500',
        color: '#423D3C',
        marginLeft: 3,
        marginRight: 10,
        fontSize: 12
    },
    fontSize10: {
        fontSize: 12
    },
    switchWrap: {
        height: 50,
        paddingRight: 10,
        paddingLeft: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
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
        fontSize: 17,
        fontWeight: '500'
    }
});

module.exports = connect(mapStateToProps)(OwnerEmail);