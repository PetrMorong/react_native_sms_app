/**
 * Created by Petr on 6.2.2017.
 */
import React, { Component } from 'react';
import { StyleSheet, Button,  Text, Picker, View, Image, Switch,  Dimensions, TextInput, TouchableNativeFeedback, ScrollView} from 'react-native';


const window = Dimensions.get('window');

export default class StoreCreate extends Component{
    constructor(props){
        super(props)
        this.state = {
            text: ''
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} resizeMode='stretch' source={require('../../images/CreateStore.png')}/>
                </View>
                <View style={{padding: 15, marginTop: 30}}>
                    <TextInput
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                        placeholder='Store name'/>
                </View>
                <View style={{flex: 1}}/>
                <View >
                    <View style={styles.buttonWrap}>
                        <Button
                            style={styles.button}
                            elevation={2}
                            color="#BE2166"
                            title="Create"
                            onPress={() => this.navigateToScreen('StoreSettings')}/>
                    </View>
                </View>
            </View>
        )
    }

    navigateToScreen(link){
        this.props.navigator.push({
            ident: link
        })
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'
    },
    imageContainer: {
        height: window.height / 5 * 2,
        backgroundColor: '#064464',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: window.height / 3 + 20,
        width: window.width / 5 *4
    },
    buttonWrap: {
        width: 160,
        paddingTop: 12,
        marginRight: 15,
        marginBottom: 15,
        alignSelf: 'flex-end',
    }
});