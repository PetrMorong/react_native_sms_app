/**
 * Created by Petr on 5.2.2017.
 */
import React, { Component } from 'react';
import { StyleSheet, Button,  Text, Picker, View, Image, Switch,  Dimensions, TextInput, TouchableNativeFeedback, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Step from '../../components/StepperSingleStep';
import ElevatedView from 'react-native-elevated-view';
import DatePicker from 'react-native-datepicker';


let Platform = require('react-native').Platform;
let ImagePicker = require('react-native-image-picker');

export default class CampaignDeal extends Component{
    constructor(props){
        super(props);
        this.state = {
            headline: '',
            description: '',
            template: 1,
            colorTemplate: 1,
            switchVariables: false,
            dealImageSource: '',
            store: '',
            priceNew: '',
            priceOld: '',
            discount: '',
            currency: '',
            quantity: '',
            units: '',
            switchPrice: false,
            switchQuantity: false,
            switchExpiration: false,
            timeZone: 'Europe/Oslo',
            expirationDate: new Date().toJSON().slice(0,10).replace(/-/g,'/'),

            variables: [ ['< first_name >', '100%'],['< last_name >', '100%'], ['< email >', '100%'], ['< phone_number >', '100%'], ['< gender >', '100%']]
        }
    }

    render(){
        let variables = this.state.variables.map((variable, i) => {
            return(
                <TouchableNativeFeedback key={i}>
                    <View style={styles.variableStyle}>
                        <Text  style={{color: '#4CAF76'}}>{variable[0]}</Text>
                        <Text  style={{color: '#4CAF76'}}>{variable[1]}</Text>
                    </View>
                </TouchableNativeFeedback>
            )
        });
        let variablesView;
        let variablesSeparator;
        if(this.state.switchVariables){
            variablesView = variables;
            variablesSeparator = <View style={{marginBottom: 15}}/>
        }

        let imageDeal;
        if(this.state.dealImageSource == ''){
            imageDeal = <View style={styles.a}>
                <View style={styles.b}>
                    <Icon name="add-a-photo" size={25} style={{color: 'white'}}/>
                </View>
                <Text style={{color: '#011D2B'}}>Add photos</Text>
            </View>
        }else{
            imageDeal = <View>
                <Image source={this.state.dealImageSource}/>
            </View>
        }

        let price;
        if(this.state.switchPrice){
            price = <View>
                <View style={{flexDirection: 'row'}}>
                    <TextInput
                        style={{flex: 1, marginLeft: 5, marginRight: 5}}
                        placeholder='Old price'
                        keyboardType='numeric'
                        ref="priceOld"
                        onChangeText={(priceOld) => {this.setState({priceOld})}}
                        value={this.state.priceOld}/>
                    <TextInput
                        style={{flex: 1, marginLeft: 5, marginRight: 5}}
                        placeholder='New price'
                        keyboardType='numeric'
                        ref="priceNew"
                        onChangeText={(priceNew) => {this.setState({priceNew})}}
                        value={this.state.priceNew}/>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <TextInput
                        style={{flex: 1, marginLeft: 5, marginRight: 5}}
                        placeholder='Discount'
                        keyboardType='numeric'
                        ref="discount"
                        onChangeText={(discount) => {this.setState({discount})}}
                        value={this.state.discount}/>
                    <TextInput
                        style={{flex: 1, marginLeft: 5, marginRight: 5}}
                        placeholder='Currency'
                        keyboardType='numeric'
                        ref="currency"
                        onChangeText={(currency) => {this.setState({currency})}}
                        value={this.state.currency}/>
                </View>
            </View>
        }

        let quantity;
        if(this.state.switchQuantity){
            quantity = <View style={{flexDirection: 'row'}}>
                <TextInput
                    style={{flex: 1, marginLeft: 5, marginRight: 5}}
                    placeholder='Quantity'
                    keyboardType='numeric'
                    ref="quantity"
                    onChangeText={(quantity) => {this.setState({quantity: quantity})}}
                    value={this.state.quantity}/>
                <TextInput
                    style={{flex: 1, marginLeft: 5, marginRight: 5}}
                    placeholder='Units'
                    keyboardType='numeric'
                    ref="units"
                    onChangeText={(units) => {this.setState({units})}}
                    value={this.state.units}/>
            </View>
        }

        let expiration;
        if(this.state.switchExpiration){
            expiration = <View>
                <View style={{alignItems: 'center', justifyContent: 'space-between', paddingLeft: 15, paddingRight: 15, flexDirection: 'row'}}>
                    <DatePicker
                        style={{width: 150}}
                        date={this.state.expirationDate}
                        mode="datetime"
                        placeholder="select date"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        showIcon={false}
                        onDateChange={(expirationDate) => {this.setState({expirationDate: expirationDate})}}
                    />
                    <Picker
                        style={{width: 140}}
                        selectedValue={this.state.timeZone}
                        onValueChange={(timeZone) => this.setState({senderValue: timeZone})}>
                        <Picker.Item label="Europe/Oslo" value="Europe/Oslo" />
                        <Picker.Item label="afrika" value="h" />
                        <Picker.Item label="dfs" value="kk" />
                        <Picker.Item label="dfs" value="ff" />
                    </Picker>
                </View>
                <View  style={[styles.switchWrap, {paddingLeft: 15, paddingRight: 15}]}>
                    <Text>Show expiration</Text>
                    <Picker
                        style={{width: 140}}
                        selectedValue={this.state.store}
                        onValueChange={(store) => this.setState({store: store})}>
                        <Picker.Item label="None" value="guitar_shop" />
                        <Picker.Item label="Counter" value="short_code" />
                        <Picker.Item label="Date" value="text_sender" />
                    </Picker>
                </View>
            </View>;
        }

        return(
            <View style={styles.container}>
                <ElevatedView style={styles.stepperContainer} elevation={2}>
                    <Step type="done" number="1" title="Recipients"/>
                    <View style={styles.line}/>
                    <Step type="active" number="2" title="Deal"/>
                    <View style={styles.line}/>
                    <Step type="disabled" number="3" title="Sms text"/>
                    <View style={styles.line}/>
                    <Step type="disabled" number="4" title="Summary"/>
                </ElevatedView>
                <ScrollView style={{padding: 15}}>
                    <View>
                        <TextInput
                            placeholder='Headline'
                            ref="headline"
                            onChangeText={(headline) => {this.setState({headline})}}
                            value={this.state.headline}/>
                        <TextInput
                            style={{height: 75}}
                            multiline={true}
                            placeholder='Description'
                            ref="description"
                            onChangeText={(description) => {this.setState({description})}}
                            value={this.state.description}/>
                        <View style={{marginTop: 15}}>
                            <View style={styles.switchWrap}>
                                <Text >Variables</Text>
                                <Switch
                                    onValueChange={(value) => this.setState({switchVariables: value})}
                                    value={this.state.switchVariables} />
                            </View>
                            <View>
                                {variablesView}
                                {variablesSeparator}
                            </View>
                            <View style={styles.separator}/>
                        </View>
                        <TouchableNativeFeedback  onPress={(event) => this.openImageLibrary()}>
                            {imageDeal}
                        </TouchableNativeFeedback>
                        <Text style={{marginTop: 15, marginBottom: 10}}>Template</Text>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableNativeFeedback onPress={(event) => this.selectTemplate(1)}>
                                <View style={(this.state.template == 1 ? styles.activeTemplate : styles.template)}>
                                    <Image style={{width: 90, height: 70}} resizeMode="stretch" source={require('../../images/deal/template1.png')}/>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={(event) => this.selectTemplate(2)}>
                                <View style={[(this.state.template == 2 ? styles.activeTemplate : styles.template), {marginLeft: 10, marginRight: 10}]}>
                                    <Image style={{width: 90, height: 70}} source={require('../../images/deal/template2.png')}/>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={(event) => this.selectTemplate(3)}>
                                <View style={(this.state.template == 3 ? styles.activeTemplate : styles.template)}>
                                    <Image style={{width: 90, height: 70}} source={require('../../images/deal/template3.png')}/>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        <Text style={{marginTop: 15, marginBottom: 10}}>Color scheme</Text>
                        <View style={{flexDirection: 'row', marginBottom: 15}}>
                            <TouchableNativeFeedback onPress={(event) => this.selectColorTemplate(1)}>
                                <View style={(this.state.colorTemplate == 1 ? styles.activeTemplate : styles.template)}>
                                    <Image style={{width: 90, height: 70}} resizeMode="stretch" source={require('../../images/deal/color1.png')}/>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={(event) => this.selectColorTemplate(2)}>
                                <View style={[(this.state.colorTemplate == 2 ? styles.activeTemplate : styles.template), {marginLeft: 10, marginRight: 10}]}>
                                    <Image style={{width: 90, height: 70}} source={require('../../images/deal/color2.png')}/>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={(event) => this.selectColorTemplate(3)}>
                                <View style={(this.state.colorTemplate == 3 ? styles.activeTemplate : styles.template)}>
                                    <Image style={{width: 90, height: 70}} source={require('../../images/deal/color3.png')}/>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        <View>
                            <View style={styles.separator}/>
                            <View  style={styles.switchWrap}>
                                <Text >Store</Text>
                                <Picker
                                    style={styles.picker}
                                    selectedValue={this.state.store}
                                    onValueChange={(store) => this.setState({store: store})}>
                                    <Picker.Item label="Guitar shop" value="guitar_shop" />
                                    <Picker.Item label="Short code" value="short_code" />
                                    <Picker.Item label="Text sender" value="text_sender" />
                                    <Picker.Item label="Own number" value="own_number" />
                                </Picker>
                            </View>
                        </View>
                        <View>
                            <View style={styles.separator}/>
                            <View style={styles.switchWrap}>
                                <Text>Price</Text>
                                <Switch
                                    onValueChange={(value) => this.setState({switchPrice: value})}
                                    value={this.state.switchPrice} />
                            </View>
                            {price}
                        </View>
                        <View>
                            <View style={styles.separator}/>
                            <View style={styles.switchWrap}>
                                <Text>Quantity</Text>
                                <Switch
                                    onValueChange={(value) => this.setState({switchQuantity: value})}
                                    value={this.state.switchQuantity} />
                            </View>
                            {quantity}
                        </View>
                        <View>
                            <View style={styles.separator}/>
                            <View style={styles.switchWrap}>
                                <Text>Expiration</Text>
                                <Switch
                                    onValueChange={(value) => this.setState({switchExpiration: value})}
                                    value={this.state.switchExpiration} />
                            </View>
                            {expiration}
                        </View>
                        <View style={styles.separator}/>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15, marginBottom: 25}}>
                            <TouchableNativeFeedback onPress={() => this.navigateToScreen('CampaignRecipients')}>
                                <Text style={{color: 'black', fontSize: 15}}>BACK</Text>
                            </TouchableNativeFeedback>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <TouchableNativeFeedback >
                                    <ElevatedView elevation={1} style={styles.secondaryButton}>
                                        <Icon style={{marginRight: 10, color: '#BE2166'}} size={16} name="search"/>
                                        <Text style={{color: '#BE2166'}}>PREVIEW</Text>
                                    </ElevatedView>
                                </TouchableNativeFeedback>
                                <View style={styles.buttonWrap}>
                                    <Button
                                        elevation={2}
                                        color="#BE2166"
                                        title="next"
                                        onPress={() => this.navigateToScreen('CampaignText')}/>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
    selectTemplate(number){
        this.setState({template: number})
    }

    selectColorTemplate(number){
        this.setState({colorTemplate: number})
    }

    navigateToScreen(link){
        this.props.navigator.push({
            ident: link
        })
    }

    openImageLibrary(){
        let options = {
            title: 'Choose photo',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };

        ImagePicker.showImagePicker(options, (response) => {

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else {
                let source;
                source = { uri: 'data:image/jpeg;base64,' + response.data };

                // Or a reference to the platform specific asset location
                if (Platform.OS === 'android') {
                    source = { uri: response.uri };
                } else {
                    source = { uri: response.uri.replace('file://', '') };
                }

                this.setState({
                    dealImageSource: source
                });
            }
        });
    }

}



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    smallContainer: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5
    },
    stepperContainer: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: 'white'
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
    switchWrap: {
        height: 50,
        paddingRight: 10,
        paddingLeft: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    variableStyle: {
        paddingLeft: 15,
        paddingRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5
    },
    a: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D3D3D3',
        height: 150,
        marginTop: 15
    },
    b: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BE2166',
        borderRadius: 50,
        width: 60,
        height: 60,
        marginBottom: 10
    },
    activeTemplate: {
        borderWidth: 4,
        borderColor: '#6A96B4',
        width: 102,
        height: 82,
        padding: 2,
        borderRadius: 2
    },
    template: {
        borderColor: '#baceda',
        borderWidth: 4,
        width: 102,
        height: 82,
        padding: 2,
        borderRadius: 2
    },
    secondaryButton: {
        marginRight: 10,
        padding: 7,
        borderColor: '#BE2166',
        borderWidth: 1,
        borderRadius: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonWrap: {
        width: 110,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end'
    },
    picker: {
        width: 170
    }
});
