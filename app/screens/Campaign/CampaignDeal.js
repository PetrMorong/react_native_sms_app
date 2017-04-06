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
import { save } from '../../actions/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import Step from '../../components/StepperSingleStep';
import ImagePicker from 'react-native-image-crop-picker';



const mapStateToProps = (store) => {
    return{
        _: store.translator.translations
    }
}

const window = Dimensions.get('window');

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
            variables: [ ['< first_name >', '100%'],['< last_name >', '100%'], ['< email >', '100%'], ['< phone_number >', '100%'], ['< gender >', '100%']],
            modalVisible: false,
            showExpiration: false
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
                <Text style={{color: '#011D2B'}}>{_('Add photo')}</Text>
            </View>
        }else{
            imageDeal = <View >
                <Image style={{ height: 220, width: window.width-30}} source={{uri: this.state.dealImageSource}}/>
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
                    <Text>{_('Show expiration')}</Text>
                    <Picker
                        style={{width: 140}}
                        selectedValue={this.state.showExpiration}
                        onValueChange={(showExpiration) => this.setState({showExpiration: showExpiration})}>
                        <Picker.Item label={_('None')} value={false} />
                        <Picker.Item label={_('Counter')} value="counter" />
                        <Picker.Item label={_('Date')} value="date" />
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
                            <TouchableNativeFeedback  onPress={(event) => this.setModalVisible(true)}>
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
                                    <TouchableNativeFeedback onPress={() => this.goToPreview()}>
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

                        <Modal
                            animationType={"slide"}
                            transparent={true}
                            visible={this.state.modalVisible}
                            onRequestClose={() => this.setModalVisible(false)}>
                            <View style={styles.modalContainer}>
                                <TouchableWithoutFeedback onPress={() => this.setModalVisible(false)} >
                                    <View style={styles.touchableClose} />
                                </TouchableWithoutFeedback>
                                <View style={styles.modalSmallContainer}>
                                    <TouchableNativeFeedback onPress={() => this.takePhoto()}>
                                        <View style={styles.modalRow}>
                                            <Icon name="photo-camera" size={30} style={styles.modalIcon}/>
                                            <Text style={styles.modalText}>Take a photo</Text>
                                        </View>
                                    </TouchableNativeFeedback>
                                    <TouchableNativeFeedback onPress={() => this.choosePhoto()}>
                                        <View style={styles.modalRow}>
                                            <Icon name="collections" size={30} style={styles.modalIcon}/>
                                            <Text style={styles.modalText}>Choose from gallery</Text>
                                        </View>
                                    </TouchableNativeFeedback>
                                    <View style={styles.separator}/>
                                    <TouchableNativeFeedback onPress={()=>this.removePhoto()}>
                                        <View style={styles.modalRow}>
                                            <Icon name="delete" size={30} style={styles.modalIcon}/>
                                            <Text style={styles.modalText}>Remove photo</Text>
                                        </View>
                                    </TouchableNativeFeedback>
                                </View>
                            </View>
                        </Modal>

                    </ScrollView>
                </View>
            </DrawerLayoutAndroid>
        )
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    };


    selectTemplate(number){
        this.setState({template: number})
    }

    selectColorTemplate(number){
        this.setState({colorTemplate: number})
    }

    setVariable(variable){
        this.setState({description: this.state.description + " " + variable})
    }

    choosePhoto(){
        ImagePicker.openPicker({
            width: window.width-30,
            height: 220,
            cropping: true,
            includeBase64: true,
            cropperTintColor: '#011D2B'

        }).then(image => {
            this.setModalVisible(false);
            this.setState({
                dealImageSource: image.path
            });
        });

    }

    takePhoto(){
        ImagePicker.openCamera({
            width: window.width-30,
            height: 220,
            cropping: true,
            includeBase64: true,
            cropperTintColor: '#011D2B'

        }).then(image => {
            this.setModalVisible(false);
            this.setState({
                dealImageSource: image.path
            });
        });
    }

    removePhoto(){
        this.setState({dealImageSource: '', modalVisible: false});
    }

    goToPreview(){
        let data = {
            headline: this.state.headline,
            description: this.state.description,
            image: this.state.dealImageSource,
            template: this.state.template,
            colorTemplate: this.state.colorTemplate,
            store: this.state.store,
            priceNew: this.state.priceNew,
            priceOld: this.state.priceOld,
            discount: this.state.discount,
            currency: this.state.currency,
            quantity: this.state.quantity,
            units: this.state.units,
            timeZone: this.state.timeZone,
            expirationDate: this.state.expirationDate,
            showExpiration: this.state.showExpiration,
        };

        Actions.DealPreview(data);
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
        height: 220,
        width: window.width-30,
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
        padding: 11,
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
    },
    modalContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black',
        opacity: 0.9
    },
    modalSmallContainer: {
        backgroundColor: 'white',
        width: window.width/3 * 2 + 20,
        height: 200,
        elevation: 4,
        padding: 5
    },
    modalRow: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        padding: 15
    },
    modalIcon: {
        marginRight: 10,
        color: '#444444'
    },
    modalText: {
        fontSize: 20,
        color: '#444444'
    },

});

module.exports = connect(mapStateToProps)(CampaignDeal);
