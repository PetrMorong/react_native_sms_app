/**
 * Created by Petr on 8.2.2017.
 */
import React, { Component } from 'react';
import { StyleSheet, Modal,  Button,  Text, Picker, View, Image, Switch,  Dimensions, TextInput, TouchableNativeFeedback, TouchableWithoutFeedback, ScrollView} from 'react-native';
import { ColorPicker } from 'react-native-color-picker'


export default class ColorPickerComponent extends Component{
    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'white', padding: 15}}>
                <ColorPicker
                    onColorSelected={color => alert(`Color selected: ${color}`)}
                    style={{flex: 1, padding: 15}}
                />
                <View style={{width: 110, justifyContent: 'flex-end', alignSelf: 'flex-end', marginTop: 30}}>
                    <Button
                        elevation={2}
                        color="#BE2166"
                        title="save"
                        onPress={() => this.navigateToScreen('StoreSettings')}/>
                </View>
            </View>
        )
    }
}