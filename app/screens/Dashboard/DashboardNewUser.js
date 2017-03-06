/**
 * Created by Petr on 23.2.2017.
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
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class DashboardNewUser extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{backgroundColor: '#312F31', height: 120, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: 'white', fontSize: 23}}>Welcome to bulkgate</Text>
                </View>
                <TouchableNativeFeedback onPress={()=>this.navigateToScreen('BuyCredit')}>
                    <View style={[styles.item, {backgroundColor: '#A35485'}]}>
                        <View style={styles.iconOutline}>
                            <Icon name="account-balance-wallet" size={30} style={styles.icon}/>
                        </View>
                        <Text style={styles.text}>Buy credit</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={()=>this.navigateToScreen('Profile')}>
                    <View style={[styles.item, {backgroundColor: '#FD7552'}]}>
                        <View style={styles.iconOutline}>
                            <Icon name="person" size={30} style={styles.icon}/>
                        </View>
                        <Text style={styles.text}>Fill out your profile</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={()=>this.navigateToScreen('CampaignCreate')}>
                    <View style={[styles.item, {backgroundColor: '#06B7AB'}]}>
                        <View style={styles.iconOutline}>
                            <Icon name="email" size={30} style={styles.icon}/>
                        </View>
                        <Text style={styles.text}>Start campaign</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={()=>this.navigateToScreen('StoreCreate')}>
                    <View style={[styles.item, {backgroundColor: '#536D79'}]}>
                        <View style={styles.iconOutline}>
                            <Icon name="store" size={30} style={styles.icon}/>
                        </View>
                        <Text style={styles.text}>Create store</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    navigateToScreen(link) {
        this.props.navigator.push({
            ident: link
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 80,
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 5,
        elevation: 1,
        paddingLeft: 25
    },
    icon: {
        color: 'white'
    },
    iconOutline: {
        width: 50,
        height: 50,
        backgroundColor: 'rgba(255,255,255,.3)',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 18,
        marginLeft: 15
    }
});