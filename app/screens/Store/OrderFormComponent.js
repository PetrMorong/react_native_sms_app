/**
 * Created by Petr on 7.2.2017.
 */
import React, { Component } from 'react';
import { StyleSheet, Button,  Text, Picker, View, Image, Switch,  Dimensions, TextInput, TouchableNativeFeedback, ScrollView} from 'react-native';
import Checkbox from '../../components/CheckBox'
import Icon from 'react-native-vector-icons/MaterialIcons';

const window = Dimensions.get('window');

export default class OrderFormComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            form_headline: 'Order form',
            send_button: 'SEND',
            active: true,
            checked: {
                firstName: true,
                lastName: true,
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
        let firstName;
        if(this.state.checked.firstName){
            firstName = <View style={{width: window.width/3, height: 60}}>
                <Text>First name</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let lastName;
        if(this.state.checked.lastName){
            lastName = <View style={{width: window.width/3, height: 60}}>
                <Text>Last name</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let phone;
        if(this.state.checked.phone){
            phone = <View style={{width: window.width/3, height: 60}}>
                <Text>Phone number</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let email;
        if(this.state.checked.email){
            email = <View style={{width: window.width/3, height: 60}}>
                <Text>Email</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let country;
        if(this.state.checked.country){
            country = <View style={{width: window.width/3, height: 60}}>
                <Text>Country</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let city;
        if(this.state.checked.city){
            city = <View style={{width: window.width/3, height: 60}}>
                <Text>City</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let state;
        if(this.state.checked.state){
            state = <View style={{width: window.width/3, height: 60}}>
                <Text>State</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let street;
        if(this.state.checked.street){
            street = <View style={{width: window.width/3, height: 60}}>
                <Text>Street</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let zip;
        if(this.state.checked.zip){
            zip = <View style={{width: window.width/3, height: 60}}>
                <Text>Zip</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let company;
        if(this.state.checked.company){
            company = <View style={{width: window.width/3, height: 60}}>
                <Text>Company</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let company_id;
        if(this.state.checked.company_id){
            company_id = <View >
                <Text>Company ID</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let company_vat;
        if(this.state.checked.company_vat){
            company_vat = <View style={{width: window.width/3, height: 60}}>
                <Text>Company VAT</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let view;
        if(this.state.active){
            view = <View style={{marginBottom: 20}}>
                <View style={[styles.separator, {marginBottom: 20}]}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableNativeFeedback onPress={() => this.check('firstName')}>
                        <View style={styles.a}>
                            <Checkbox checked={this.state.checked.firstName} onCheck={() => this.check('firstName')} />
                            <Text style={styles.b}>First name</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => this.check('lastName')}>
                        <View style={styles.a}>
                            <Checkbox checked={this.state.checked.lastName} onCheck={() => this.check('lastName')} />
                            <Text style={styles.b}>Last name</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => this.check('phone')}>
                        <View style={styles.a}>
                            <Checkbox checked={this.state.checked.phone} onCheck={() => this.check('phone')}/>
                            <Text style={styles.b}>Phone number</Text>
                        </View>
                    </TouchableNativeFeedback>
                     <TouchableNativeFeedback onPress={() => this.check('email')}>
                         <View style={styles.a}>
                             <Checkbox checked={this.state.checked.email} onCheck={() => this.check('email')} />
                             <Text style={styles.b}>Email</Text>
                         </View>
                     </TouchableNativeFeedback>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                    <TouchableNativeFeedback onPress={() => this.check('country')}>
                        <View style={styles.a}>
                            <Checkbox checked={this.state.checked.country} onCheck={() => this.check('country')}/>
                            <Text style={styles.b}>Country</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => this.check('city')}>
                        <View style={styles.a}>
                            <Checkbox checked={this.state.checked.city} onCheck={() => this.check('city')}/>
                            <Text style={styles.b}>City</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => this.check('state')}>
                        <View style={styles.a}>
                            <Checkbox checked={this.state.checked.state} onCheck={() => this.check('state')}/>
                            <Text style={styles.b}>State</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => this.check('street')}>
                        <View style={styles.a}>
                            <Checkbox checked={this.state.checked.street} onCheck={() => this.check('street')}/>
                            <Text style={styles.b}>Street</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15}}>
                    <TouchableNativeFeedback onPress={() => this.check('zip')}>
                        <View style={styles.a}>
                            <Checkbox checked={this.state.checked.zip} onCheck={() => this.check('zip')}/>
                            <Text style={styles.b}>Zip</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => this.check('company')}>
                        <View style={styles.a}>
                            <Checkbox checked={this.state.checked.company} onCheck={() => this.check('company')}/>
                            <Text style={styles.b}>Company</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => this.check('company_id')}>
                        <View style={styles.a}>
                            <Checkbox checked={this.state.checked.company_id} onCheck={() => this.check('company_id')}/>
                            <Text style={styles.b}>Company ID</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => this.check('company_vat')}>
                        <View style={styles.a}>
                            <Checkbox checked={this.state.checked.company_vat} onCheck={() => this.check('company_vat')}/>
                            <Text style={styles.b}>Company VAT</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={styles.separator}/>
                <View style={{flexDirection: 'row', marginBottom: 15}}>
                    <TextInput
                        onChangeText={(form_headline) => this.setState({form_headline})}
                        value={this.state.form_headline}
                        style={{flex: 1, marginLeft: 10, marginRight: 10}}
                        placeholder='Form headline'/>
                    <TextInput
                        onChangeText={(send_button) => this.setState({send_button})}
                        value={this.state.send_button}
                        style={{flex: 1, marginLeft: 10, marginRight: 10}}
                        placeholder='Send button'/>
                </View>
                <View style={{backgroundColor: '#C3CAD4', padding: 15,  }}>
                    <View style={{alignItems: 'center', marginTop: 10}}>
                        <Text style={{fontSize: 18}}>{this.state.form_headline}</Text>
                    </View>
                    <View style={{marginTop: 15, flexWrap: 'wrap', flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
                            {firstName}
                            {lastName}
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
                        <Text style={styles.fakeButton}>{this.state.send_button}</Text>
                    </View>
                </View>

            </View>
        }

        return(
            <ScrollView style={styles.container}>
                <View style={{marginBottom: 10}}>
                    <View style={styles.switchWrap}>
                        <Text>Activate</Text>
                        <Switch
                            onValueChange={(value) => this.setState({active: value})}
                            value={this.state.active} />
                    </View>
                </View>
                {view}
                <View style={styles.separator}/>
                <View style={styles.buttonWrap}>
                    <Button
                        style={styles.button}
                        elevation={2}
                        color="#BE2166"
                        title="save"
                        onPress={() => this.navigateToScreen('CampaignDeal')}/>
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
        padding: 15,
        marginBottom: 15,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end'
    }
});