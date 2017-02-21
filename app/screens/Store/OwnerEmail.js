/**
 * Created by Petr on 9.2.2017.
 */
import React, { Component } from 'react';
import { StyleSheet, Button,  Text, Picker, View, Image, Switch,  Dimensions, TextInput, TouchableNativeFeedback, ScrollView, } from 'react-native';

export default class OwnerEmail extends Component{
    constructor(props){
        super(props)
        this.state = {
            message: '',
            active: true,
        }
    }

    render(){
        let view;
        if(this.state.active){
            view = <View>
                <View style={{paddingLeft: 10, paddingRight: 10}}>
                    <TextInput
                        style={{height: 100}}
                        placeholder='Email text'
                        ref="message"
                        multiline={true}
                        onChangeText={(message) => this.setState({message})}
                        value={this.state.message}/>
                    <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
                        <Text style={styles.fontSize10}>Total SMS:</Text>
                        <Text style={styles.messageStats}>2</Text>
                        <Text style={styles.fontSize10}>Recipients:</Text>
                        <Text style={styles.messageStats}>3</Text>
                        <Text style={styles.fontSize10}>SMS:</Text>
                        <Text style={styles.messageStats}>5</Text>
                        <Text style={styles.fontSize10}>Length:</Text>
                        <Text style={styles.messageStats}>130/120</Text>
                    </View>
                </View>
            </View>
        }

        return(
            <View style={[styles.container, {padding: 15}]}>
                <View>
                    <View style={styles.switchWrap}>
                        <Text>Activate</Text>
                        <Switch
                            onValueChange={(value) => this.setState({active: value})}
                            value={this.state.active} />
                    </View>
                    <View style={styles.separator}/>
                </View>
                {view}
                <View style={{flex: 1, padding: 15, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
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
        paddingTop: 12,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
    }
});
