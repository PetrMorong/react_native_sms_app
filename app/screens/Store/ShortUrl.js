/**
 * Created by Petr on 8.2.2017.
 */
import React, { Component } from 'react';
import { StyleSheet, Modal,  Button,  Text, Picker, View, Image, Switch,  Dimensions, TextInput, TouchableNativeFeedback, TouchableWithoutFeedback, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class ShortUrl extends Component{
    constructor(props){
        super(props)
        this.state = {
            url: '',
            showHelp: true
        }
    }

    render(){
        let help;
        if(this.state.showHelp){
            help = <View style={{paddingLeft: 30, paddingRight: 30}}>
                <Text style={{color: 'black'}}>It is URL displayed to your clients in SMS. You can choose which one do you like the best.</Text>
                <View style={{paddingTop: 15}}>
                    <Text>Example message:</Text>
                    <View style={{backgroundColor: '#F1F0F0', borderRadius: 5, padding: 15}}>
                        <Text>
                            Hello Martin, we have old guitars for sale. 40 % off until the end of the week. Hope you like it.
                        </Text>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
                            <Text>Check it out here:</Text>
                            <View style={{ padding: 5, borderWidth: 2, borderColor: 'red', marginLeft: 15}}>
                                <Text >www.url7.com/x1</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        }

        return(
            <View style={styles.container}>
                <View style={{padding: 15}}>
                    <TextInput
                        onChangeText={(url) => this.setState({url})}
                        value={this.state.url}
                        style={{marginLeft: 15, marginRight: 15, marginBottom: 15}}
                        placeholder='Short url'/>
                </View>
                <View style={styles.separator}/>
                <TouchableNativeFeedback onPress={() => this.setState({showHelp: !this.state.showHelp})}>
                    <View style={{padding: 30, flexDirection: 'row', alignItems: 'center'}}>
                        <Icon name="help-outline" size={25} style={{marginRight: 5, color: '#1580FD'}}/>
                        <Text style={{marginRight: 10, fontSize: 20, color: '#1580FD'}}>What is deal short url ?</Text>
                    </View>
                </TouchableNativeFeedback>
                {help}
                <View style={{flex: 1, padding: 15, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                    <View style={{width: 110}}>
                        <Button
                            elevation={2}
                            color="#BE2166"
                            title="save"
                            onPress={() => this.navigateToScreen('StoreSettings')}/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'
    },

});