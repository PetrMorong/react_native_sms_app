/**
 * Created by Petr on 22.3.2017.
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
import Menu from '../../components/Menu';
import Toolbar from '../../components/Toolbar';
import Color from '../../config/Variables';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

const window = Dimensions.get('window');

export default class StorePreview extends Component {

    render() {
        let cover;
        if(this.props.cover){
            cover = <Image style={{width:window.width, height: 220}} resizeMode='contain' source={{uri: this.props.cover}}/>
        }else{
            cover = <View style={{width: window.width, height: 220, backgroundColor: '#064769'}}/>
        }

        let logo;
        if(this.props.logo){
            logo = <Image style={styles.logo} resizeMode='stretch' source={{uri: this.props.logo}}/>
        }else{
            logo = <View style={[styles.logo ,{backgroundColor: '#43433F'}]}/>
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
                    background="containerNoBg"
                    title={_('Store preview')}
                    elevation={2}
                    back={true}/>
                <ScrollView style={styles.container}>
                    {cover}
                    <View style={styles.logoWrap}>
                        <View style={styles.logoSmallWrap}>
                            <Text style={{marginBottom: 10, color: 'white', fontSize: 25, textShadowColor: 'rgba(0,0,0,0.8)', textShadowOffset: {width: 1, height: 1}, textShadowRadius: 3 }}>Guitar shop</Text>
                            {logo}
                        </View>
                    </View>
                    <View style={{padding: 15}}>
                        <Text style={{fontSize: 25, fontWeight: '500', color: 'black', marginTop: 20}}>Topefekt</Text>
                        <View style={{marginTop: 25, flexDirection: 'row'}}>
                            <View style={styles.circle}>
                                <Icon name="location-on" size={30} style={{color: Color.circleIcon}}/>
                            </View>
                            <View >
                                <Text style={{fontSize: 16, marginBottom: 2}}>Revoluční 24</Text>
                                <Text style={{fontSize: 16, marginBottom: 2}}>Šumperk</Text>
                                <Text style={{fontSize: 16, marginBottom: 2}}>Czech republic</Text>
                            </View>
                        </View>
                        <View style={{marginTop: 25, flexDirection: 'row'}}>
                            <View style={styles.circle}>
                                <Icon name="language" size={30} style={{color: Color.circleIcon}}/>
                            </View>
                            <View style={{justifyContent: 'center'}}>
                                <Text style={{fontSize: 16, marginBottom: 2, color: '#1580FD'}}>www.topefekt.com</Text>
                            </View>
                        </View>
                        <View style={{marginTop: 25, flexDirection: 'row'}}>
                            <View style={styles.circle}>
                                <Icon name="phone" size={30} style={{color: Color.circleIcon}}/>
                            </View>
                            <View style={{justifyContent: 'center'}}>
                                <Text style={{fontSize: 16, marginBottom: 2, color: '#1580FD'}}>+420737211315</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </DrawerLayoutAndroid>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    logoWrap: {
        alignItems: 'center',
        marginTop: -100,
    },
    logo: {
        borderColor: '#D8D8D8',
        borderWidth: 2,
        padding: 2,
        width: window.width / 3 +10,
        height: window.width / 3+10
    },
    logoSmallWrap: {
        position: 'relative',
        alignItems: 'center'
    },
    circle: {
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: Color.circleColor,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20
    }
});