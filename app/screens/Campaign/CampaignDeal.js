/**
 * Created by Petr on 5.2.2017.
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
import DatePicker from 'react-native-datepicker';
import Menu from '../../components/Menu';
import Toolbar from '../../components/Toolbar';
import Color from '../../config/Variables';
import { connect } from 'react-redux';
import { save } from '../../actions/Actions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import Step from '../../components/StepperSingleStep';


const mapStateToProps = (store) => {
    return{
        _: store.translator.translations
    }
}

const window = Dimensions.get('window');
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
        let menu  = <Menu/>;

        let variables = this.state.variables.map((variable, i) => {
            return(
                <TouchableNativeFeedback key={i} onPress={()=>this.setVariable(variable[0])}>
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
                    <Icon name="add-a-photo" size={25} style={{color: Color.buttonText}}/>
                </View>
                <Text style={{color: '#011D2B'}}>{_('add_photo')}</Text>
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
                        placeholder={_('Old price')}
                        keyboardType='numeric'
                        ref="priceOld"
                        onChangeText={(priceOld) => {this.setState({priceOld})}}
                        value={this.state.priceOld}/>
                    <TextInput
                        style={{flex: 1, marginLeft: 5, marginRight: 5}}
                        placeholder={_('New price')}
                        keyboardType='numeric'
                        ref="priceNew"
                        onChangeText={(priceNew) => {this.setState({priceNew})}}
                        value={this.state.priceNew}/>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <TextInput
                        style={{flex: 1, marginLeft: 5, marginRight: 5}}
                        placeholder={_('Discount')}
                        keyboardType='numeric'
                        ref="discount"
                        onChangeText={(discount) => {this.setState({discount})}}
                        value={this.state.discount}/>
                    <TextInput
                        style={{flex: 1, marginLeft: 5, marginRight: 5}}
                        placeholder={_('Currency')}
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
                    placeholder={_('Quantity')}
                    keyboardType='numeric'
                    ref="quantity"
                    onChangeText={(quantity) => {this.setState({quantity: quantity})}}
                    value={this.state.quantity}/>
                <TextInput
                    style={{flex: 1, marginLeft: 5, marginRight: 5}}
                    placeholder={_('Units')}
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
                        placeholder={_('Select date')}
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
                    <Text>{_.show_expiration}</Text>
                    <Picker
                        style={{width: 140}}
                        selectedValue={this.state.store}
                        onValueChange={(store) => this.setState({store: store})}>
                        <Picker.Item label={_('None')} value="guitar_shop" />
                        <Picker.Item label={_('Counter')} value="short_code" />
                        <Picker.Item label={_('Date')} value="text_sender" />
                    </Picker>
                </View>
            </View>;
        }


        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                ref={(_drawer) => this.drawer = _drawer}
                renderNavigationView={() => menu}>
                <Toolbar
                    openMenu={() => this.drawer.openDrawer()}
                    background="container"
                    title={_('Campaign deal')}
                    elevation={2}/>
                <View style={styles.container}>
                    <View style={styles.stepperContainer} >
                        <Step type="active" number="1" title={_('Recipients')}/>
                        <View style={styles.line}/>
                        <Step type="done" number="2" title={_('Deal')}/>
                        <View style={styles.line}/>
                        <Step type="done" number="3" title={_('Sms text')}/>
                        <View style={styles.line}/>
                        <Step type="disabled" number="4" title={_('Summary')}/>
                    </View>
                    <ScrollView style={{padding: 15}}>
                        <View>
                            <TextInput
                                placeholder={_('Headline')}
                                ref="headline"
                                onChangeText={(headline) => {this.setState({headline})}}
                                value={this.state.headline}/>
                            <TextInput
                                style={{height: 75}}
                                multiline={true}
                                placeholder={_('Description')}
                                ref="description"
                                onChangeText={(description) => {this.setState({description})}}
                                value={this.state.description}/>
                            <View style={{marginTop: 15}}>
                                <View style={styles.switchWrap}>
                                    <Text>{_('Variables')}</Text>
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
                            <Text style={{marginTop: 15, marginBottom: 10}}>{_.template}</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
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
                            <Text style={{marginTop: 15, marginBottom: 10}}>{_('Color scheme')}</Text>
                            <View style={{flexDirection: 'row', marginBottom: 15, justifyContent: 'space-around'}}>
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
                                    <Text>{_('Store')}</Text>
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
                                    <Text>{_('Price')}</Text>
                                    <Switch
                                        onValueChange={(value) => this.setState({switchPrice: value})}
                                        value={this.state.switchPrice} />
                                </View>
                                {price}
                            </View>
                            <View>
                                <View style={styles.separator}/>
                                <View style={styles.switchWrap}>
                                    <Text>{_('Quantity')}</Text>
                                    <Switch
                                        onValueChange={(value) => this.setState({switchQuantity: value})}
                                        value={this.state.switchQuantity} />
                                </View>
                                {quantity}
                            </View>
                            <View>
                                <View style={styles.separator}/>
                                <View style={styles.switchWrap}>
                                    <Text>{_('Expiration')}</Text>
                                    <Switch
                                        onValueChange={(value) => this.setState({switchExpiration: value})}
                                        value={this.state.switchExpiration} />
                                </View>
                                {expiration}
                            </View>
                            <View style={styles.separator}/>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15, marginBottom: 25}}>
                                <TouchableNativeFeedback onPress={() => Actions.pop()}>
                                    <Text style={{color: 'black', fontSize: 15}}>{_('Back').toUpperCase()}</Text>
                                </TouchableNativeFeedback>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <TouchableNativeFeedback >
                                        <View style={styles.secondaryButton}>
                                            <Icon style={{marginRight: 10, color: Color.secondaryButtonText}} size={16} name="search"/>
                                            <Text style={{color: Color.secondaryButtonText}}>{_('Preview').toUpperCase()}</Text>
                                        </View>
                                    </TouchableNativeFeedback>
                                    <TouchableNativeFeedback onPress={() => Actions.CampaignText()}>
                                        <View style={styles.buttonWrap}>
                                            <Text style={styles.buttonText}>{_('next').toUpperCase()}</Text>
                                        </View>
                                    </TouchableNativeFeedback>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </DrawerLayoutAndroid>
        )
    }
    selectTemplate(number){
        this.setState({template: number})
    }

    selectColorTemplate(number){
        this.setState({colorTemplate: number})
    }

    setVariable(variable){
        this.setState({description: this.state.description + " " + variable})
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
        backgroundColor: 'white',
        elevation: 2
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
        backgroundColor: Color.button,
        borderRadius: 50,
        width: 70,
        height: 70,
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
        padding: 10,
        borderColor: Color.secondaryButton,
        borderWidth: 1,
        borderRadius: 2,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 2
    },
    buttonWrap: {
        width: 110,
        borderRadius: 2,
        backgroundColor: Color.button,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
    },
    buttonText: {
        fontWeight: '500',
        color: Color.buttonText
    },
    picker: {
        width: 170
    }
});

module.exports = connect(mapStateToProps)(CampaignDeal);
