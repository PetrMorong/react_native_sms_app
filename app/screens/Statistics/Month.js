/**
 * Created by Petr on 17.2.2017.
 */
import React, { Component } from 'react';
import { StyleSheet, Modal,  Button,  Text, Picker, View, Image, Switch,  Dimensions, TextInput, TouchableNativeFeedback, TouchableWithoutFeedback, ScrollView} from 'react-native';
import ElevatedView from 'react-native-elevated-view';

const window = Dimensions.get('window');

export default class Month extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={{flexDirection: 'row'}}>
                    <ElevatedView elevation={1} style={styles.statWrap}>
                        <Text style={{color: '#bdd6d2', marginBottom: 10}}>DECEMBER 2016</Text>
                        <Text style={{color: '#37ab9c', marginBottom: 5, fontWeight: '500', fontSize: 16}}>Sms sent</Text>
                        <Text style={{color: '#bdd6d2'}}>156 546</Text>
                    </ElevatedView>
                    <ElevatedView elevation={1} style={[styles.statWrap, {marginLeft: 10}]}>
                        <Text style={{color: '#bdd6d2', marginBottom: 10}}>DECEMBER 2016</Text>
                        <Text style={{color: '#BE2166', marginBottom: 5, fontWeight: '500', fontSize: 16}}>Credit spent</Text>
                        <Text style={{color: '#bdd6d2'}}>156 546</Text>
                    </ElevatedView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: 'white',
       padding: 15
   },
    statWrap: {
       width: window.width/ 2 - 20,
        height: window.height/ 3,
        backgroundColor: 'rgba(6,71,105, .9)',
        padding: 15
   }
});