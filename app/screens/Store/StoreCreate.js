import React, {Component} from 'react';
import {
    StyleSheet,
    Modal,
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
import { save } from './actions';
import { Actions } from 'react-native-router-flux';
import Button from '../../components/Button';



const window = Dimensions.get('window');

const mapStateToProps = (store) => {
    return{
        user: store.user.user
    }
}

export default class StoreCreate extends Component{
    constructor(props){
        super(props)
        this.state = {
            text: '',
            buttonStatus: 'default'
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
                    background="containerNoBg"
                    title={_('Create store')}
                    elevation={0}/>
                <ScrollView >
                    <View style={styles.container}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} resizeMode='stretch' source={require('../../images/CreateStore.png')}/>
                        </View>
                        <View style={{padding: 15, marginTop: 30}}>
                            <TextInput
                                onChangeText={(text) => this.setState({text})}
                                value={this.state.text}
                                placeholder={_('Store name')}/>
                        </View>
                        <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                            <Button
                                click={() => this.handleSave()}
                                text={_('Save').toUpperCase()}
                                buttonStatus={this.state.buttonStatus}
                            />
                        </View>
                    </View>
                </ScrollView>
            </DrawerLayoutAndroid>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: window.height-70
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'
    },
    imageContainer: {
        height: window.height / 5 * 2,
        backgroundColor: Color.secondaryColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 250,
        width: 300
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
        color: Color.buttonText,
        fontWeight: '500',
    }
});

module.exports = connect(mapStateToProps)(StoreCreate);