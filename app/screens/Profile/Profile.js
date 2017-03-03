/**
 * Created by Petr on 24.2.2017.
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

const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';
const window = Dimensions.get('window');

export default class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <TouchableNativeFeedback onPress={()=>this.navigateToScreen('BaseInformations')}>
                    <View style={styles.actionStatus}>
                        <Icon name="edit" size={25} style={{color: 'white'}}/>
                    </View>
                </TouchableNativeFeedback>
                <View>
                    <View style={styles.avatarWrap}>
                        <Image
                            style={styles.avatar}
                            source={{ uri, }}/>
                        <Text style={styles.email}>moriandr73@gmail.com</Text>
                    </View>
                    <View style={styles.infoWrap}>
                        <View style={{padding: 15}}>
                            <Text style={styles.textHighlight}>Name</Text>
                            <Text style={styles.textHighlight}>Phone number</Text>
                            <Text style={styles.textHighlight}>Timezone</Text>
                            <Text style={styles.textHighlight}>Country</Text>
                        </View>
                        <View style={{padding: 15}}>
                            <Text style={styles.marginTop}>Petr Morong</Text>
                            <Text style={styles.marginTop}>+452 156 888 456</Text>
                            <Text style={styles.marginTop}>Europe/Prague</Text>
                            <Text style={styles.marginTop}>Norway</Text>
                        </View>

                    </View>

                    <View style={styles.actionWrap}>
                        <TouchableNativeFeedback onPress={()=>this.navigateToScreen('ChangePassword')}>
                            <View style={{alignItems: 'center'}}>
                                <Icon name="lock-outline" size={30} style={{color: '#444444'}}/>
                                <Text style={{color: '#444444', marginTop: 5}}>Change</Text>
                                <Text style={{color: '#444444'}}>password</Text>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={()=>this.navigateToScreen('PaymentData')}>
                            <View style={{alignItems: 'center'}}>
                                <Icon name="location-on" size={30} style={{color: '#444444'}}/>
                                <Text style={{color: '#444444', marginTop: 5}}>Payment</Text>
                                <Text style={{color: '#444444'}}>data</Text>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={()=>this.navigateToScreen('ContactVerification')}>
                            <View style={{alignItems: 'center'}}>
                                <Icon name="phone-android" size={30} style={{color: '#444444'}}/>
                                <Text style={{color: '#444444', marginTop: 5}}>Contact</Text>
                                <Text style={{color: '#444444'}}>verification</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
            </ScrollView>
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
        backgroundColor: '#E7F0F6'
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 100
    },
    avatarWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 75,
        backgroundColor: '#064464'
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'
    },
    buttonWrap: {
        width: 110,
        paddingTop: 12,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        marginRight: 15,
        marginTop: 5
    },
    name: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5
    },
    email: {
        color: 'white',
        fontSize: 16,
        marginTop: 15
    },
    textHighlight: {
        fontWeight: '500', marginBottom: 7
    },
    infoWrap: {
        margin: 15,
        height: 130,
        backgroundColor: 'white',
        borderRadius: 3,
        marginTop: -40,
        elevation: 1,
        flexDirection: 'row',
        position: 'relative'
    },
    marginTop: {
        marginBottom: 7
    },
    actionStatus: {
        position: 'absolute',
        width: 50,
        height: 50,
        borderRadius: 50,
        top: 280,
        right: 30,
        backgroundColor: '#BE2166',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99,
        elevation: 3
    },
    actionWrap: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between',
        margin: 15,
        backgroundColor: 'white',
        borderRadius: 2,
        elevation: 1,
        marginTop: 20
    }
});