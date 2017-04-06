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
import Menu from '../../components/Menu';
import Toolbar from '../../components/Toolbar';
import Color from '../../config/Variables';
import { connect } from 'react-redux';
import { save } from '../../actions/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';

const window = Dimensions.get('window');

const mapStateToProps = (store) => {
    return{
        _: store.translator.translations
    }
}


export default class CampaignCreate  extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: '',
            campaignType: 'sms'
        }
    }

    render(){
        let menu  = <Menu/>;

        let sms;
        if(this.state.campaignType == 'sms'){
            sms = <View style={styles.choiceWrapActive}>
                <Icon style={styles.iconActive} name="textsms" size={35}/>
                <Text style={styles.textActive}>SMS</Text>
            </View>;
        } else{
            sms= <View style={styles.choiceWrap}>
                <Icon style={styles.icon} name="textsms" size={35}/>
                <Text style={styles.icon}>SMS</Text>
            </View>;
        }

        let smartSms;
        if(this.state.campaignType == 'smartSms'){
            smartSms =  <View style={styles.choiceWrapTwoActive}>
                <View style={styles.flexRow}>
                    <Icon style={styles.iconActive} name="textsms" size={35}/>
                    <Text style={styles.marginActive}>+</Text>
                    <Icon style={styles.iconActive} name="shopping-cart" size={35}/>
                </View>
                <Text style={styles.textActive}>Smart SMS</Text>
            </View>;
        }else{
            smartSms =  <View style={styles.choiceWrapTwo}>
                <View style={styles.flexRow}>
                    <Icon style={styles.icon} name="textsms" size={35}/>
                    <Text style={styles.margin}>+</Text>
                    <Icon style={styles.icon} name="shopping-cart" size={35}/>
                </View>
                <Text style={styles.icon}>Smart SMS</Text>
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
                    background="containerNoBg"
                    title={_('Create campaign')}
                    elevation={0}/>
                <ScrollView style={styles.container}>
                    <View style={{ height: window.height - 140}}>
                        <View style={styles.image}>
                            <Image style={{width: 180, height: 180}} resizeMode="stretch" source={require('../../images/campaignCreateNoLogo.png')}/>
                        </View>
                        <View style={styles.padding}>
                            <TextInput
                                style={styles.input}
                                onChangeText={(text) => this.setState({text})}
                                value={this.state.text}
                                placeholder={_('Campaign name')}
                            />
                            <View style={styles.wrap}>
                                <TouchableNativeFeedback onPress={(event) => this.chooseType('sms')} >
                                    {sms}
                                </TouchableNativeFeedback>
                                <TouchableNativeFeedback onPress={(event) => this.chooseType('smartSms')} >
                                    {smartSms}
                                </TouchableNativeFeedback>
                            </View>
                        </View>
                    </View>
                    <View style={{alignItems: 'flex-end'}}>
                        <TouchableNativeFeedback onPress={() => Actions.CampaignRecipients()}>
                            <View style={styles.buttonWrap}>
                                <Text style={styles.buttonText}>{_('Create').toUpperCase()}</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </ScrollView>
            </DrawerLayoutAndroid>
        )

    }

    chooseType(type){
        this.setState({campaignType: type})
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'

    },
    padding: {
        padding: 30
    },
    image: {
        backgroundColor: Color.secondaryColor,
        height: window.height/3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        color: '#808080'
    },
    iconActive: {
        color: '#BE2166'
    },
    textActive: {
        color: 'black'
    },
    wrap: {
        marginTop: 10,
       justifyContent: 'center',
       flexDirection: 'row'
    },
    choiceWrap: {
        width: 100,
        height: 90,
        borderColor: '#999999',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFAFA',
        margin: 15,
        borderRadius: 2
    },
    choiceWrapActive: {
        width: 100,
        height: 90,
        borderColor: '#26A69A',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFAFA',
        margin: 15,
        borderRadius: 2
    },
    choiceWrapTwo: {
        width: 150,
        height: 90,
        borderColor: '#999999',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFAFA',
        margin: 15,
        borderRadius: 2
    },
    choiceWrapTwoActive: {
        width: 150,
        height: 90,
        borderColor: '#26A69A',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFAFA',
        margin: 15,
        borderRadius: 2
    },
    flexRow: {
        flexDirection: 'row'
    },
    margin: {
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        color: '#999999'
    },
    marginActive: {
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        color: '#26A69A'
    },
    buttonWrap: {
        width: 110,
        borderRadius: 2,
        backgroundColor: Color.button,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        marginRight: 15,
    },
    buttonText: {
        fontWeight: '500',
        color: Color.buttonText
    }

});

module.exports = connect(mapStateToProps)(CampaignCreate);

