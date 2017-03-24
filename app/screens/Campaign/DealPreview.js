/**
 * Created by Petr on 22.3.2017.
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
import Icon from 'react-native-vector-icons/MaterialIcons';
import Menu from '../../components/Menu';
import Toolbar from '../../components/Toolbar';
import Color from '../../config/Variables';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

const window = Dimensions.get('window');

export default class DealPreview extends Component {
    constructor(props){
        super(props)
        this.state = {
            checked: {
                firstName: true,
                lastName: true,
                phone: true,
                email: true,
                country: true,
                city: true,
                state: false,
                street: false,
                zip: false,
                company: false,
                company_id: false,
                company_vat: false
            }
        }
    }

    render() {
        let firstName;
        if(this.state.checked.firstName){
            firstName = <View style={{width: window.width/2, alignItems: 'center', height: 60, alignSelf: 'flex-end'}}>
                <Text>{_('First name')}</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let lastName;
        if(this.state.checked.lastName){
            lastName = <View style={{width: window.width/2, alignItems: 'center', height: 60, alignSelf: 'flex-end'}}>
                <Text>{_('Last name')}</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let phone;
        if(this.state.checked.phone){
            phone = <View style={{width: window.width/2, alignItems: 'center', height: 60, alignSelf: 'flex-end'}}>
                <Text>{_('Phone number')}</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let email;
        if(this.state.checked.email){
            email = <View style={{width: window.width/2, alignItems: 'center', height: 60, alignSelf: 'flex-end'}}>
                <Text>{_('Email')}</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let country;
        if(this.state.checked.country){
            country = <View style={{width: window.width/2, alignItems: 'center', height: 60, alignSelf: 'flex-end'}}>
                <Text>{_('Country')}</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let city;
        if(this.state.checked.city){
            city = <View style={{width: window.width/2, alignItems: 'center', height: 60, alignSelf: 'flex-end'}}>
                <Text>{_('City')}</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let state;
        if(this.state.checked.state){
            state = <View style={{width: window.width/2, alignItems: 'center', height: 60, alignSelf: 'flex-end'}}>
                <Text>{_('State')}</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let street;
        if(this.state.checked.street){
            street = <View style={{width: window.width/2, alignItems: 'center', height: 60, alignSelf: 'flex-end'}}>
                <Text>{_('Street')}</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let zip;
        if(this.state.checked.zip){
            zip = <View style={{width: window.width/2, alignItems: 'center', height: 60, alignSelf: 'flex-end'}}>
                <Text>{_('Zip')}</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let company;
        if(this.state.checked.company){
            company = <View style={{width: window.width/2, alignItems: 'center', height: 60, alignSelf: 'flex-end'}}>
                <Text>{_('Company')}</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let company_id;
        if(this.state.checked.company_id){
            company_id = <View style={{width: window.width/2, alignItems: 'center', height: 60, alignSelf: 'flex-end'}}>
                <Text>{_('Company id')}</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let company_vat;
        if(this.state.checked.company_vat){
            company_vat = <View style={{width: window.width/2, alignItems: 'center', height: 60, alignSelf: 'flex-end'}}>
                <Text>{_('Company vat')}</Text>
                <View style={styles.formInput}>
                </View>
            </View>
        }

        let cover;
        if(this.props.cover){
            cover = <Image style={{width:window.width, height: 220,borderColor: 'white', borderBottomWidth: 3}} resizeMode='contain' source={{uri: this.props.cover}}/>
        }else{
            cover = <View style={{width: window.width, height: 220, backgroundColor: '#064769',borderColor: 'white', borderBottomWidth: 3}}/>
        }

        let logo;
        if(this.props.logo){
            logo = <Image style={styles.logo} resizeMode='stretch' source={{uri: this.props.logo}}/>
        }else{
            logo = <View style={[styles.logo ,{backgroundColor: '#43433F'}]}/>
        }

        let clock;
        if(this.props.showExpiration == 'counter'){
            clock = <Image style={{width: window.width-40, height: 90}} resizeMode='stretch' source={require('../../images/dealClock.jpg')} />
        }else if(this.props.showExpiration == 'date'){
            clock = <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 25, color: 'black'}}>{this.props.expirationDate}</Text>
            </View>
        }

        let image;
        if(this.props.image){
            image = <Image style={{width: window.width-40, height: 200, marginTop: 20}} resizeMode='stretch' source={{uri: this.props.image}}/>
        }

        let discount;
        if(this.props.discount){
            let style;
            if(this.props.template === 1 || this.props.template === 3){
                style = styles.circle
            } else if(this.props.template === 2){
                style = styles.circleTemplateTwo
            }

            discount = <View style={style}>
                <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}>- {this.props.discount} %</Text>
            </View>
        }

        let quantity;
        if(this.props.quantity){
            let style;
            if(this.props.template === 1 || this.props.template === 3){
                style = styles.circleQuantity
            } else if(this.props.template === 2){
                style = styles.circleQuantityTemplateTwo
            }

            quantity = <View style={style}>
                <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}> {this.props.quantity} </Text>
                <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}> {this.props.units} </Text>
            </View>
        }

        let middle;
        if(this.props.template === 1){
            middle = <View style={{padding: 20}}>
                {clock}
                <View>
                    {image}
                    {discount}
                    {quantity}
                </View>
                <View style={{alignItems: 'center', marginTop: 15}}>
                    <Text style={{fontSize: 30, color: 'black', fontWeight: '500'}}>{this.props.headline.toUpperCase()}</Text>
                    <Text style={{marginTop: 10}}>{this.props.description}</Text>
                    <View style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
                        <Text style={{marginRight: 15, fontSize: 30, fontWeight: '500', color: 'blue'}}>{this.props.priceNew} {this.props.currency}</Text>
                        <Text style={{textDecorationLine: 'line-through', fontSize: 20, fontWeight: '500'}}>{this.props.priceOld} {this.props.currency}</Text>
                    </View>
                </View>
            </View>
        }else if(this.props.template === 2){
            middle = <View style={{marginTop: -70,height: 500}}>
                <Image style={{flex: 1}} resizeMode='cover' source={{uri: this.props.image}}/>
                <View style={styles.middleWrapTemplateTwo}>
                    <View style={{flexDirection: 'row', marginTop: -10, marginBottom: 20}}>
                        {discount}
                        {quantity}
                    </View>
                    <Text style={styles.headlineTemplateTwo}>{this.props.headline.toUpperCase()}</Text>
                    <Text style={styles.descriptionTemplateTwo}>{this.props.description}</Text>
                    <View style={{flexDirection: 'column', marginTop: 15, alignItems: 'center', marginBottom: 20}}>
                        <Text style={{marginBottom: 10,fontSize: 30, fontWeight: '500', color: 'blue'}}>{this.props.priceNew} {this.props.currency}</Text>
                        <Text style={styles.priceOldTemplateTwo}>{this.props.priceOld} {this.props.currency}</Text>
                    </View>
                    {clock}
                </View>

            </View>
        }else if(this.props.template === 3){
            middle = <View style={{padding: 20}}>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 30, color: 'black', fontWeight: '500'}}>{this.props.headline.toUpperCase()}</Text>
                    <Text style={{marginTop: 10}}>{this.props.description}</Text>
                </View>
                <View>
                    {image}
                    {discount}
                    {quantity}
                </View>
                <View style={{alignItems: 'center'}}>
                    <View style={{ alignItems: 'center', flexDirection: 'column'}}>
                        <Text style={{fontSize: 50, fontWeight: '500', color: 'blue'}}>{this.props.priceNew} {this.props.currency}</Text>
                        <Text style={{textDecorationLine: 'line-through', fontSize: 20, fontWeight: '500'}}>{this.props.priceOld} {this.props.currency}</Text>
                    </View>
                </View>
                {clock}
            </View>
        }


        let menu  = <Menu/>;
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                ref={(_drawer) => this.drawer = _drawer}
                renderNavigationView={() => menu}>
                <Toolbar
                    openMenu={() => this.drawer.openDrawer()}
                    background="containerNoBg"
                    title={_('Deal preview')}
                    elevation={2}
                    back={true}/>
                <ScrollView style={styles.container}>
                    {cover}
                    <View style={styles.logoWrap}>
                        <View style={styles.logoSmallWrap}>
                            <Text style={styles.storeName}>Guitar shop</Text>
                            {logo}
                        </View>
                    </View>
                    {middle}
                    <View style={{backgroundColor: '#C3CAD4', paddingBottom: 20}}>
                        <View style={{alignItems: 'center', marginTop: 10}}>
                            <Text style={{fontSize: 25, marginTop: 15}}>Form headline</Text>
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
                            <Text style={styles.fakeButton}>SEND</Text>
                        </View>
                    </View>
                </ScrollView>
            </DrawerLayoutAndroid>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    logoWrap: {
        alignItems: 'center',
        marginTop: -100,
        zIndex: 50
    },
    logo: {
        borderColor: '#D8D8D8',
        borderWidth: 2,
        padding: 2,
        width: window.width / 3 +10,
        height: window.width / 3+10
    },
    logoSmallWrap: {
        position: 'relative',
        alignItems: 'center'
    },
    storeName: {
        marginBottom: 10,
        color: 'white',
        fontSize: 25,
        textShadowColor: 'rgba(0,0,0,0.8)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 3
    },
    circle: {
        height: 70,
        width: 70,
        borderRadius: 50,
        backgroundColor: 'red',
        position: 'absolute',
        top: 0,
        left: -20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    circleQuantity: {
        height: 70,
        width: 70,
        borderRadius: 50,
        backgroundColor: 'blue',
        position: 'absolute',
        top: 60,
        left: -20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    circleTemplateTwo: {
        height: 70,
        width: 70,
        borderRadius: 50,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circleQuantityTemplateTwo: {
        height: 70,
        width: 70,
        borderRadius: 50,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: -15
    },
    formInput: {
        backgroundColor: 'white',
        width: window.width/2- 30,
        height: 30,
        borderRadius: 4,
        marginTop: 5
    },
    fakeButton: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 25,
        paddingRight: 25,
        backgroundColor: 'red'
    },
    middleWrapTemplateTwo: {
        alignItems: 'center',
        marginTop: 15,
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'center',
        height: 500,
        width: window.width,
        padding: 20,
        top: 0,
        right: 0
    },
    descriptionTemplateTwo: {
        marginTop: 10,
        textShadowColor: 'rgba(0,0,0,0.8)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 3,
        color: 'white'
    },
    headlineTemplateTwo: {
        fontSize: 30,
        color: 'white',
        fontWeight: '500',
        textShadowColor: 'rgba(0,0,0,0.8)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 3,
    },
    priceOldTemplateTwo: {
        textDecorationLine: 'line-through',
        fontSize: 20,
        fontWeight: '500',
        color: 'white'
    }

});
