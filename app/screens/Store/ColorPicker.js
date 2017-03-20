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
import { save } from '../../actions/Actions'
import { ColorPicker } from 'react-native-color-picker'

const window = Dimensions.get('window');

export default class ColorPickerComponent extends Component{

    render() {
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                ref={(_drawer) => this.drawer = _drawer}
                renderNavigationView={() => menu}>
                <Toolbar
                    openMenu={() => this.drawer.openDrawer()}
                    background="container"
                    title={_('Choose color')}
                    elevation={2}
                    back={true}/>
                <View style={{flex: 1, backgroundColor: 'white', padding: 15}}>
                    <ColorPicker
                        onColorSelected={color => alert(`Color selected: ${color}`)}
                        style={{flex: 1, padding: 15}}
                    />
                    <View style={{width: 110, justifyContent: 'flex-end', alignSelf: 'flex-end', marginTop: 30}}>
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