/**
 * Created by Petr on 27.2.2017.
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

const window = Dimensions.get('window');

export default class PaymentData extends Component {
    constructor(props){
        super(props)
        this.state = {
            switchCompany: false
        }
    }
    render() {
        let company;
        if(this.state.switchCompany){
            company = <View>
                <TextInput
                    onChangeText={(companyName) => this.setState({companyName})}
                    value={this.state.companyName}
                    style={{marginLeft: 10, marginRight: 10}}
                    placeholder='Company name'/>
                <View style={{flexDirection: 'row'}}>
                    <TextInput
                        onChangeText={(companyId) => this.setState({companyId})}
                        value={this.state.companyId}
                        style={{flex: 1, marginLeft: 10, marginRight: 10}}
                        placeholder='Company ID'/>
                    <TextInput
                        onChangeText={(companyVat) => this.setState({companyVat})}
                        value={this.state.companyVat}
                        style={{flex: 1, marginLeft: 10, marginRight: 10}}
                        placeholder='Company VAT'/>
                </View>
            </View>
        }

        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row'}}>
                    <TextInput
                        onChangeText={(firstName) => this.setState({firstName})}
                        value={this.state.firstName}
                        style={{flex: 1, marginLeft: 10, marginRight: 10, }}
                        placeholder='First name'/>
                    <TextInput
                        onChangeText={(lastName) => this.setState({lastName})}
                        value={this.state.lastName}
                        style={{flex: 1, marginLeft: 10, marginRight: 10, }}
                        placeholder='Last name'/>
                </View>
                <View>
                    <TextInput
                        onChangeText={(street) => this.setState({street})}
                        value={this.state.street}
                        style={{marginLeft: 10, marginRight: 10, }}
                        placeholder='Street'/>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TextInput
                        onChangeText={(city) => this.setState({city})}
                        value={this.state.city}
                        style={{flex: 1, marginLeft: 10, marginRight: 10, }}
                        placeholder='City'/>
                    <TextInput
                        onChangeText={(zip) => this.setState({zip})}
                        value={this.state.zip}
                        style={{flex: 1, marginLeft: 10, marginRight: 10, }}
                        placeholder='ZIP'/>
                </View>
                <View>
                    <Picker
                        style={{width: window.width /10 * 9 -5, marginTop: 5, marginLeft: 5, color: 'grey'}}
                        selectedValue={this.state.timeZone}
                        onValueChange={(timeZone) => this.setState({senderValue: timeZone})}>
                        <Picker.Item label="Country" value="Europe/Oslo" />
                        <Picker.Item label="afrika" value="h" />
                        <Picker.Item label="dfs" value="kk" />
                        <Picker.Item label="dfs" value="ff" />
                    </Picker>
                </View>
                <View style={[styles.separator, {marginLeft: 10, marginRight: 10}]}/>
                <View style={styles.switchWrap}>
                    <Text style={{fontSize: 16}}>Company</Text>
                    <Switch
                        onValueChange={(value) => this.setState({switchCompany: value})}
                        value={this.state.switchCompany} />
                </View>
                {company}
                <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                    <View style={{width: 110}}>
                        <Button
                            elevation={2}
                            color="#BE2166"
                            title="save"
                            onPress={() => this.navigateToScreen('Profile')}/>
                    </View>
                </View>
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
        padding: 15
    },
    switchWrap: {
        height: 50,
        paddingRight: 10,
        paddingLeft: 15,
        marginTop: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
});