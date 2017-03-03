/**
 * Created by Petr on 22.2.2017.
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

export default class Settings extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableNativeFeedback onPress={()=>this.navigateToScreen('Sign')}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={styles.circle}>
                            <Icon name="power-settings-new" size={25} style={{color: 'white'}}/>
                        </View>
                        <Text style={{fontSize: 18}}>Logout</Text>
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
        padding: 15
    },
    circle: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: 'grey',
        marginRight: 10
    }
});