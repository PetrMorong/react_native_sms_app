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

export default class ChangePassword extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={[{padding: 15}, styles.container]}>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            onChangeText={(password) => this.setState({password})}
                            value={this.state.password}
                            style={{flex: 1, marginLeft: 10, marginRight: 10, }}
                            placeholder='Password'
                            secureTextEntry={true}/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            onChangeText={(newPassword) => this.setState({newPassword})}
                            value={this.state.newPassword}
                            style={{flex: 1, marginLeft: 10, marginRight: 10}}
                            placeholder='New password'
                            secureTextEntry={true}/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            onChangeText={(newPasswordAgain) => this.setState({newPasswordAgain})}
                            value={this.state.newPasswordAgain}
                            style={{flex: 1, marginLeft: 10, marginRight: 10}}
                            placeholder='New password again'
                            secureTextEntry={true}/>
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