/**
 * Created by Petr on 10.2.2017.
 */
import React, { Component } from 'react';
import { StyleSheet, Button,  Text, Picker, View, Image, Switch,  Dimensions, TextInput, TouchableNativeFeedback, ScrollView, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


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

    render(){
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


        return(
            <View style={styles.container}>
                {languages}
                <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                    <View style={{width: 110}}>
                        <Button
                            elevation={2}
                            color="#BE2166"
                            title="save"
                            onPress={() => this.navigateToScreen('StoreSettings')}/>
                    </View>
                </View>
            </View>
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
    }
});