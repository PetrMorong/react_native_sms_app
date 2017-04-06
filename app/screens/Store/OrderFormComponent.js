/**
 * Created by Petr on 7.2.2017.
 */
import React, { Component } from 'react';
import { StyleSheet, Button,  Text, Picker, View, Image, Switch,  Dimensions, TextInput, TouchableNativeFeedback, ScrollView} from 'react-native';
import Checkbox from '../../components/CheckBox'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Color from '../../config/Variables';
import { connect } from 'react-redux';
import { save } from '../../actions/index'
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (store) => {
    return{
        _: store.translator.translations,
    }
}


const window = Dimensions.get('window');

export default class OrderFormComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            form_headline: 'Order form',
            send_button: 'SEND',
            active: true,
            checked: {
                first_name: true,
                last_name: true,
                phone: false,
                email: false,
                country: false,
                city: false,
                state: false,
                street: false,
                zip: false,
                company: false,
                company_id: false,
                company_vat: false
            }

        }
    }

    render(){

        let first_name;
        if(this.state.checked.first_name){
            first_name = <View style={{width: window.width/3, height: 60, alignSelf: 'flex-end'}}>
                <Text>{_('First name')}</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let last_name;
        if(this.state.checked.last_name){
            last_name = <View style={{width: window.width/3, height: 60, alignSelf: 'flex-end'}}>
                <Text>{_('Last name')}</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let phone;
        if(this.state.checked.phone){
            phone = <View style={{width: window.width/3, height: 60, alignSelf: 'flex-end'}}>
                <Text>{_('Phone number')}</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let email;
        if(this.state.checked.email){
            email = <View style={{width: window.width/3, height: 60, alignSelf: 'flex-end'}}>
                <Text>{_('Email')}</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let country;
        if(this.state.checked.country){
            country = <View style={{width: window.width/3, height: 60, alignSelf: 'flex-end'}}>
                <Text>{_('Country')}</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let city;
        if(this.state.checked.city){
            city = <View style={{width: window.width/3, height: 60, alignSelf: 'flex-end'}}>
                <Text>{_('City')}</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let state;
        if(this.state.checked.state){
            state = <View style={{width: window.width/3, height: 60, alignSelf: 'flex-end'}}>
                <Text>{_('State')}</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let street;
        if(this.state.checked.street){
            street = <View style={{width: window.width/3, height: 60, alignSelf: 'flex-end'}}>
                <Text>{_('Street')}</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let zip;
        if(this.state.checked.zip){
            zip = <View style={{width: window.width/3, height: 60, alignSelf: 'flex-end'}}>
                <Text>{_('Zip')}</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let company;
        if(this.state.checked.company){
            company = <View style={{width: window.width/3, height: 60, alignSelf: 'flex-end'}}>
                <Text>{_('Company')}</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let company_id;
        if(this.state.checked.company_id){
            company_id = <View style={{width: window.width/3, height: 60, alignSelf: 'flex-end'}}>
                <Text>{_('Company id')}</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let company_vat;
        if(this.state.checked.company_vat){
            company_vat = <View style={{width: window.width/3, height: 60, alignSelf: 'flex-end'}}>
                <Text>{_('Company vat')}</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let view;
        if(this.state.active){
            view = <View style={{marginBottom: 20}}>
                <View style={[styles.separator, {marginBottom: 20}]}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableNativeFeedback onPress={() => this.check('first_name')}>
                        <View style={styles.a}>
                            <Checkbox checked={this.state.checked.first_name} onCheck={() => this.check('first_name')} />
                            <Text style={styles.b}>{_('First name')}</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => this.check('last_name')}>
                        <View style={styles.a}>
                            <Checkbox checked={this.state.checked.lastName} onCheck={() => this.check('last_name')} />
                            <Text style={styles.b}>{_('Last name')}</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => this.check('phone')}>
                        <View style={styles.a}>
                            <Checkbox checked={this.state.checked.phone} onCheck={() => this.check('phone')}/>
                            <Text style={styles.b}>{_('Phone number')}</Text>
                        </View>
                    </TouchableNativeFeedback>
                     <TouchableNativeFeedback onPress={() => this.check('email')}>
                         <View style={styles.a}>
                             <Checkbox checked={this.state.checked.email} onCheck={() => this.check('email')} />
                             <Text style={styles.b}>{_('Email')}</Text>
                         </View>
                     </TouchableNativeFeedback>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                    <TouchableNativeFeedback onPress={() => this.check('country')}>
                        <View style={styles.a}>
                            <Checkbox checked={this.state.checked.country} onCheck={() => this.check('country')}/>
                            <Text style={styles.b}>{_('Country')}</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => this.check('city')}>
                        <View style={styles.a}>
                            <Checkbox checked={this.state.checked.city} onCheck={() => this.check('city')}/>
                            <Text style={styles.b}>{_('City')}</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => this.check('state')}>
                        <View style={styles.a}>
                            <Checkbox checked={this.state.checked.state} onCheck={() => this.check('state')}/>
                            <Text style={styles.b}>{_('State')}</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => this.check('street')}>
                        <View style={styles.a}>
                            <Checkbox checked={this.state.checked.street} onCheck={() => this.check('street')}/>
                            <Text style={styles.b}>{_('Street')}</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15}}>
                    <TouchableNativeFeedback onPress={() => this.check('zip')}>
                        <View style={styles.a}>
                            <Checkbox checked={this.state.checked.zip} onCheck={() => this.check('zip')}/>
                            <Text style={styles.b}>{_('Zip')}</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => this.check('company')}>
                        <View style={styles.a}>
                            <Checkbox checked={this.state.checked.company} onCheck={() => this.check('company')}/>
                            <Text style={styles.b}>{_('Company')}</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => this.check('company_id')}>
                        <View style={styles.a}>
                            <Checkbox checked={this.state.checked.company_id} onCheck={() => this.check('company_id')}/>
                            <Text style={styles.b}>{_('Company id')}</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => this.check('company_vat')}>
                        <View style={styles.a}>
                            <Checkbox checked={this.state.checked.company_vat} onCheck={() => this.check('company_vat')}/>
                            <Text style={styles.b}>{_('Company vat')}</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={styles.separator}/>
                <View style={{flexDirection: 'row', marginBottom: 15}}>
                    <TextInput
                        onChangeText={(form_headline) => this.setState({form_headline})}
                        value={this.state.form_headline}
                        style={{flex: 1, marginLeft: 10, marginRight: 10}}
                        placeholder={_('Form headline')}/>
                    <TextInput
                        onChangeText={(send_button) => this.setState({send_button})}
                        value={this.state.send_button}
                        style={{flex: 1, marginLeft: 10, marginRight: 10}}
                        placeholder={_('Send button')}/>
                </View>
                <View style={{backgroundColor: '#C3CAD4', padding: 15}}>
                    <View style={{alignItems: 'center', marginTop: 10}}>
                        <Text style={{fontSize: 18}}>Form headline</Text>
                    </View>
                    <View style={{marginTop: 15, flexWrap: 'wrap', flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
                            {first_name}
                            {last_name}
                            {phone}
                            {email}
                            {country}
                            {city}
                            {state}
                            {street}
                            {zip}
                            {company}
                            {company_id}
                            {company_vat}
                    </View>
                    <View style={{alignItems: 'center', marginTop: 15}}>
                        <Text style={styles.fakeButton}>SEND</Text>
                    </View>
                </View>

            </View>
        }

        return(
            <ScrollView style={styles.container}>
                <View style={{marginBottom: 10}}>
                    <View style={styles.switchWrap}>
                        <Text>{_('Activate')}</Text>
                        <Switch
                            onValueChange={(value) => this.setState({active: value})}
                            value={this.state.active} />
                    </View>
                </View>
                {view}
                <View style={styles.separator}/>
                <View style={{margin: 15, alignItems: 'flex-end'}}>
                    <TouchableNativeFeedback onPress={() => this.props.dispatch(save())}>
                        <View style={styles.buttonWrap}>
                            <Text style={styles.buttonText}>{_('save').toUpperCase()}</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </ScrollView>

        )
    }

    check(key){
        let array = JSON.parse(JSON.stringify(this.state.checked));
        array[key] = !array[key];
        this.setState({checked: array})
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 15
    },
    checkWrap: {
        width: 20,
        height: 20,
        backgroundColor: '#BE2166',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2
    },
    a: {
        alignItems: 'center',
        width: window.width / 4 - 30,
    },
    b: {
        marginTop: 5,
        textAlign: 'center'
    },
    switchWrap: {
        height: 50,
        paddingRight: 10,
        paddingLeft: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'
    },
    formInput: {
        backgroundColor: 'white',
        width: window.width/3,
        height: 30,
        borderRadius: 4,
        marginTop: 5
    },
    fakeButton: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 25,
        paddingRight: 25,
        backgroundColor: '#D9E1E8'
    },
    buttonWrap: {
        width: 110,
        borderRadius: 2,
        backgroundColor: Color.button,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        marginBottom: 15
    },
    buttonText: {
        color: Color.buttonText,
        fontWeight: '500'
    }
});

module.exports = connect(mapStateToProps)(OrderFormComponent);