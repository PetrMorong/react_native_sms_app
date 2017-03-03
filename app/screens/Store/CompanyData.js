/**
 * Created by Petr on 8.2.2017.
 */
import React, { Component } from 'react';
import { StyleSheet, Modal,  Button,  Text, Picker, View, Image, Switch,  Dimensions, TextInput, TouchableNativeFeedback, TouchableWithoutFeedback, ScrollView} from 'react-native';

const window = Dimensions.get('window');

export default class CompanyData extends Component{
    constructor(props){
        super(props)
        this.state = {
            companyName: '',
            callPrefix: '',
            phoneNumber: '',
            email: '',
            www: '',
            street: '',
            city: '',
            zip: '',
            country: ''
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <View>
                    <TextInput
                        onChangeText={(companyName) => this.setState({companyName})}
                        value={this.state.companyName}
                        style={{marginLeft: 10, marginRight: 10}}
                        placeholder='Company name'/>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TextInput
                        onChangeText={(callPrefix) => this.setState({callPrefix})}
                        value={this.state.callPrefix}
                        style={{width: window.width / 3, marginLeft: 10, marginRight: 10}}
                        placeholder='Call prefix'
                        keyboardType='numeric'/>
                    <TextInput
                        onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                        value={this.state.phoneNumber}
                        style={{flex: 1, marginLeft: 10, marginRight: 10}}
                        placeholder='Phone number'
                        keyboardType='numeric'/>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TextInput
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                        style={{flex: 1, marginLeft: 10, marginRight: 10}}
                        placeholder='Email'/>
                    <TextInput
                        onChangeText={(www) => this.setState({www})}
                        value={this.state.www}
                        style={{flex: 1, marginLeft: 10, marginRight: 10}}
                        placeholder='www'/>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TextInput
                        onChangeText={(street) => this.setState({street})}
                        value={this.state.street}
                        style={{flex: 1, marginLeft: 10, marginRight: 10}}
                        placeholder='Street'/>
                    <TextInput
                        onChangeText={(city) => this.setState({city})}
                        value={this.state.city}
                        style={{flex: 1, marginLeft: 10, marginRight: 10}}
                        placeholder='City'/>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TextInput
                        onChangeText={(zip) => this.setState({zip})}
                        value={this.state.zip}
                        style={{flex: 1, marginLeft: 10, marginRight: 10}}
                        placeholder='Zip'
                        keyboardType='numeric'/>
                    <TextInput
                        onChangeText={(country) => this.setState({country})}
                        value={this.state.country}
                        style={{flex: 1, marginLeft: 10, marginRight: 10}}
                        placeholder='Country'/>
                </View>
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 15
    }

});