/**
 * Created by Petr on 10.2.2017.
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
import { save } from '../../actions/index'
import { Actions } from 'react-native-router-flux';
import Menu from '../../components/Menu';
import Toolbar from '../../components/Toolbar';


const mapStateToProps = (store) => {
    return{
        _: store.translator.translations,
    }
}

export default class Language extends Component{
    constructor(props){
        super(props)
        this.state = {
            languages: {
                gb: [false, 'English', ],
                cz: [true, 'Čeština', '../../images/flags/32/cz.png'],
                sk: [false, 'Slovenština', '../../images/flags/32/sk.png'],
                fr: [false, 'French', '../../images/flags/32/fr.png']
            },
            active: 'cz'
        }
    }

    render() {
        let menu  = <Menu/>;

        let languages;
        languages = Object.keys(this.state.languages).map((key) => {
            return(
                <TouchableNativeFeedback onPress={() => this.select(key)} key={key}>
                    <View style={styles.row}>
                        {this.flag(key)}
                        <View style={[styles.a, styles.border]}>
                            <Text style={{color: 'black', fontSize: 20}}>{this.state.languages[key][1]}</Text>
                            {this.state.active == key && <Icon name="check-circle" size={25} style={styles.b}/>}
                        </View>
                    </View>
                </TouchableNativeFeedback>
            )
        });


        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                ref={(_drawer) => this.drawer = _drawer}
                renderNavigationView={() => menu}>
                <Toolbar
                    openMenu={() => this.drawer.openDrawer()}
                    background="container"
                    title={_('Language')}
                    elevation={2}
                    back={true}/>
                <View style={styles.container}>
                    {languages}
                    <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
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

    flag(name){
        if(name == 'gb'){
            return(<Image source={require('../../images/flags/32/gb.png')}/>)
        }
        if(name == 'cz'){
            return(<Image source={require('../../images/flags/32/cz.png')}/>)
        }
        if(name == 'sk'){
            return(<Image source={require('../../images/flags/32/sk.png')}/>)
        }
        if(name == 'fr'){
            return(<Image source={require(`../../images/flags/32/fr.png`)}/>)
        }
    }

    select(key){
        this.setState({active: key})
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 80
    },
    a: {
        height: 80,
        flexDirection: 'row',
        marginLeft: 25,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'
    },
    b: {
        color: '#4CAF50'
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

module.exports = connect(mapStateToProps)(Language);