/**
 * Created by Petr on 30.1.2017.
 */
import React, { Component } from 'react';
import { StyleSheet, Button,   Text,  View, Image, ActivityIndicator, TextInput, TouchableNativeFeedback } from 'react-native';
import { Checkbox } from 'react-native-material-design';

export default class PhoneRecipients extends Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            selectAll: false,
            contacts: []
        }
    }

    componentDidMount(){
        let Contacts = require('react-native-contacts');

        Contacts.getAll((err, contacts) => {
            if(err && err.type === 'permissionDenied'){
                // x.x
            } else {
                 let newOne = contacts.map((contact, i) => {
                    return ([contact.givenName, contact.phoneNumbers[0].number, contact.thumbnailPath, false]);
                });
                this.setState({loading: false, contacts: newOne})
            }
        })


    }

    render(){
        let thumbnail;
        let contactList = this.state.contacts.map((contact, i) => {

            if(contact[2] == ''){
                thumbnail = <Text style={styles.thumbLetter}>{contact[0].charAt(0)}</Text>;
            }else{
                thumbnail = <Image source={contact[2]}/>
            }

            return(
                <View key={i}>
                    <View style={styles.item}>
                        <View style={styles.thumbnail}>
                            {thumbnail}
                        </View>
                        <Text style={styles.name}>{contact[0]}</Text>
                        <View style={{flex: 1}}/>
                        <Checkbox
                            style={styles.checkbox}
                            value='checkbox'
                            checked={this.state.contacts[i][3]}
                            onCheck={() => this.selectOne(i)}/>
                    </View>
                </View>
            );
        });

        let view;
        if(this.state.loading){
            view = <View>
                <ActivityIndicator
                    animating={this.state.animating}
                    style={{height: 150}}
                    size="large"
              />
            </View>
        }else{
            view = <View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
                    <Text>Select all</Text>
                    <Checkbox
                        value="checkbox"
                        overrides={styles.checkbox}
                        checked={this.state.selectAll}
                        onCheck={() => this.selectAll()}
                    />
                </View>
                <View style={styles.separator}/>
                {contactList}
            </View>;
        }
        return(
            <View style={styles.container}>
                <View style={{flex: 1}}>
                    {view}
                </View>
                <View style={styles.buttonWrap}>
                    <Button
                        style={styles.button}
                        elevation={2}
                        color="#BE2166"
                        title="Save"
                        onPress={() => this.save()}/>
                </View>
            </View>
        )
    }

    selectAll(){
        let newArray =  this.state.contacts.map((value, i) => {
            value[3] = !this.state.selectAll;
            return value;
        });
        this.setState({selectAll: !this.state.selectAll, contacts: newArray })
    }

    selectOne(i){
        let array = this.state.contacts.slice();
        array[i][3] = !array[i][3];
        this.setState({contats: array})
    }

    save(){

    }

}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: 'white',
        flex: 1
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60
    },
    thumbnail: {
        backgroundColor: '#3F51B5',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 50
    },
    thumbLetter: {
        color: 'white',
        fontSize: 19
    },
    name: {
        fontSize: 16,
        marginLeft: 20
    },
    checkbox: {
        backgroundColor: '#BE2166',
        color: '#BE2166',
    },
    buttonWrap: {
        width: 160,
        paddingTop: 12,
        marginTop: 35,
        alignSelf: 'flex-end',
        marginBottom: 15
    }

});