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

export default class BaseInformations extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={[{padding: 15}, styles.container]}>
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
                        placeholder='Last name'
                        keyboardType='numeric'/>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TextInput
                        onChangeText={(callPrefix) => this.setState({callPrefix})}
                        value={this.state.callPrefix}
                        style={{width: window.width / 4, marginLeft: 10, marginRight: 10}}
                        placeholder='Call prefix'
                        keyboardType='numeric'/>
                    <TextInput
                        onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                        value={this.state.phoneNumber}
                        style={{flex: 1, marginLeft: 10, marginRight: 10}}
                        placeholder='Phone number'/>
                </View>
                <View>
                    <Picker
                        style={{width: window.width /10 * 9 -5, marginTop: 5, marginLeft: 5, color: 'grey'}}
                        selectedValue={this.state.timeZone}
                        onValueChange={(timeZone) => this.setState({senderValue: timeZone})}>
                        <Picker.Item label="Europe/Oslo" value="Europe/Oslo" />
                        <Picker.Item label="afrika" value="h" />
                        <Picker.Item label="dfs" value="kk" />
                        <Picker.Item label="dfs" value="ff" />
                    </Picker>
                </View>
                <View>
                    <Picker
                        style={{width: window.width /10 * 9 -5, marginTop: 5, marginLeft: 5, color: 'grey'}}
                        selectedValue={this.state.timeZone}
                        onValueChange={(timeZone) => this.setState({senderValue: timeZone})}>
                        <Picker.Item label="United kingdom" value="Europe/Oslo" />
                        <Picker.Item label="afrika" value="h" />
                        <Picker.Item label="dfs" value="kk" />
                        <Picker.Item label="dfs" value="ff" />
                    </Picker>
                </View>
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
        backgroundColor: 'white'
    }
});