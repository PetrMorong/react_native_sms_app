/**
 * Created by Petr on 7.2.2017.
 */
import React, { Component } from 'react';
import { StyleSheet, Modal,  Button,  Text, Picker, View, Image, Switch,  Dimensions, TextInput, TouchableNativeFeedback, TouchableWithoutFeedback, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const window = Dimensions.get('window');
let Platform = require('react-native').Platform;
let ImagePicker = require('react-native-image-picker');


export default class StoreSettingsComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            coverSource: false,
            logoSource: false,
            modalCoverVisible: false,
            modalLogoVisible: false,
            storeName: 'Guitar shop',
            editingStoreName: false
        }
    }

    render(){
        let cover;
        if(this.state.coverSource){
            cover = <Image style={{width: window.width, height: 180}} resizeMode='stretch' source={this.state.coverSource}/>
        }else{
            cover = <View style={{width: window.width, height: 180, backgroundColor: '#064769'}}/>
        }

        let logo;
        if(this.state.logoSource){
            logo = <Image style={styles.logo} resizeMode='stretch' source={this.state.logoSource}/>
        }else{
            logo = <View style={[styles.logo ,{backgroundColor: '#43433F'}]}/>
        }

        let storeName;
        if(this.state.editingStoreName){
            storeName = <View style={styles.storeWrap}>
                <TextInput
                    onChangeText={(storeName) => this.setState({storeName: storeName})}
                    value={this.state.storeName}
                    style={{width: window.width / 2}}
                    placeholder='Store name'/>
                <TouchableNativeFeedback onPress={() => this.setState({editingStoreName: false})}>
                    <Icon name="done" size={25} style={{marginLeft: 10, color: '#6CC2BA', marginTop: 20}}/>
                </TouchableNativeFeedback>
            </View>
        }else{
            storeName = <View style={styles.storeWrap}>
                <Text style={{fontSize: 20, color: 'black', marginLeft: 20}}>{this.state.storeName}</Text>
                <TouchableNativeFeedback onPress={() => this.setState({editingStoreName: true})}>
                    <Icon name="edit" size={25} style={{marginLeft: 10, color: '#444444'}}/>
                </TouchableNativeFeedback>
            </View>
        }

        return(
            <ScrollView style={styles.container}>
                <View>
                    {cover}
                    <TouchableNativeFeedback onPress={(event) => this.setModalCoverVisible(true)}>
                        <View style={styles.changeCoverButton}>
                            <Icon name="photo-camera" size={20} style={{color: 'black', marginRight: 5}}/>
                            <Text style={{color: 'black', fontSize: 14}}>CHANGE</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={styles.logoWrap}>
                    <View style={styles.logoSmallWrap}>
                        {logo}
                        <TouchableNativeFeedback onPress={(event) => this.setModalLogoVisible(true)}>
                            <View style={styles.changeLogoButton}>
                                <Icon name="photo-camera" size={20} style={{color: 'black', marginRight: 5}}/>
                                <Text style={{color: 'black', fontSize: 14}}>CHANGE</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
                    {storeName}
                <View style={styles.separator}/>
                <View style={styles.infoWrap}>
                    <View style={styles.infoLine}>
                        <Icon name="work" size={20} style={{marginRight: 15}}/>
                        <Text>TOP efekt</Text>
                    </View>
                    <View style={styles.infoLine}>
                        <Icon name="location-on" size={20} style={{marginRight: 15}}/>
                        <Text>Revoluční 24, Šumperk 787 01, Czech republic</Text>
                    </View>
                    <View style={styles.infoLine}>
                        <Icon name="phone" size={20} style={{marginRight: 15}}/>
                        <Text>+420 586 458 122</Text>
                    </View>
                    <View style={styles.infoLine}>
                        <Icon name="mail" size={20} style={{marginRight: 15}}/>
                        <Text>moriandr73@gmail.com</Text>
                    </View>
                    <View style={styles.infoLine}>
                        <Icon name="language" size={20} style={{marginRight: 15}}/>
                        <Text>www.topefekt.com</Text>
                    </View>
                    <TouchableNativeFeedback onPress={() => this.navigateToScreen('CompanyData')}>
                        <Text style={{marginLeft: 35, color: '#1580FD', marginTop: 5}} >EDIT COMPANY DATA</Text>
                    </TouchableNativeFeedback>
                </View>
                <View style={styles.separator}/>
                <View style={styles.actionWrap}>
                    <View style={styles.actionSmallWrap}>
                        <Image source={require('../../images/cs.png')} resizeMode='stretch' style={{width: 30, height: 30, marginBottom: 3}}/>
                        <Text style={{color: '#444444'}}>Language</Text>
                    </View>
                    <TouchableNativeFeedback onPress={() => this.navigateToScreen('ShortUrl')}>
                        <View style={styles.actionSmallWrap}>
                            <Icon name="language" size={25} style={{marginBottom: 5, color: '#444444'}}/>
                            <Text style={{color: '#444444'}}>Shortened url</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <View style={styles.actionSmallWrap}>
                        <Icon name="add-alert" size={25} style={{marginBottom: 5, color: '#444444'}}/>
                        <Text style={{color: '#444444'}}>Notifications</Text>
                    </View>
                </View>
                <View style={styles.separator}/>
                <View style={styles.buttonWrap}>
                    <Button
                        style={styles.button}
                        elevation={2}
                        color="#BE2166"
                        title="save"
                        onPress={() => this.navigateToScreen('CampaignDeal')}/>
                </View>

                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={this.state.modalCoverVisible}
                    onRequestClose={() => this.setModalCoverVisible(false)}>
                    <View style={styles.modalContainer}>
                        <TouchableWithoutFeedback onPress={() => this.setModalCoverVisible(false)} >
                            <View style={styles.touchableClose} />
                        </TouchableWithoutFeedback>
                        <View style={styles.modalSmallContainer}>
                            <TouchableNativeFeedback onPress={() => this.choosePhotoModal()}>
                                <View style={styles.modalRow}>
                                    <Icon name="photo-camera" size={30} style={styles.modalIcon}/>
                                    <Text style={styles.modalText}>Upload photo</Text>
                                </View>
                            </TouchableNativeFeedback>
                            <View style={styles.separator}/>
                            <TouchableNativeFeedback onPress={() => this.handleCoverColorPress()}>
                                <View style={styles.modalRow}>
                                    <Icon name="color-lens" size={30} style={styles.modalIcon}/>
                                    <Text style={styles.modalText}>Choose color</Text>
                                </View>
                            </TouchableNativeFeedback>
                            <View style={styles.separator}/>
                            <View style={styles.modalRow}>
                                <Icon name="delete" size={30} style={styles.modalIcon}/>
                                <Text style={styles.modalText}>Remove photo</Text>
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={this.state.modalLogoVisible}
                    onRequestClose={() => this.setModalLogoVisible(false)}>
                    <View style={styles.modalContainer}>
                        <TouchableWithoutFeedback onPress={() => this.setModalLogoVisible(false)} >
                            <View style={styles.touchableClose} />
                        </TouchableWithoutFeedback>
                        <View style={styles.modalSmallContainer}>
                            <TouchableNativeFeedback onPress={() => this.choosePhotoLogo()}>
                                <View style={styles.modalRow}>
                                    <Icon name="photo-camera" size={30} style={styles.modalIcon}/>
                                    <Text style={styles.modalText}>Upload photo</Text>
                                </View>
                            </TouchableNativeFeedback>
                            <View style={styles.separator}/>
                            <TouchableNativeFeedback onPress={() => this.handleLogoColorPress()}>
                                <View style={styles.modalRow}>
                                    <Icon name="color-lens" size={30} style={styles.modalIcon}/>
                                    <Text style={styles.modalText}>Choose color</Text>
                                </View>
                            </TouchableNativeFeedback>
                            <View style={styles.separator}/>
                            <View style={styles.modalRow}>
                                <Icon name="delete" size={30} style={styles.modalIcon}/>
                                <Text style={styles.modalText}>Remove photo</Text>
                            </View>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        )
    }

    handleCoverColorPress(){
        this.setModalCoverVisible(false)
        this.navigateToScreen('ColorPickerComponent')
    }

    handleLogoColorPress(){
        this.setModalLogoVisible(false)
        this.navigateToScreen('ColorPickerComponent')
    }

    navigateToScreen(link){
        this.props.navigator.push({
            ident: link
        })
    }

    setModalCoverVisible(visible) {
        this.setState({modalCoverVisible: visible});
    };

    setModalLogoVisible(visible) {
        this.setState({modalLogoVisible: visible});
    };

    choosePhotoModal(){
        let options = {
            title: 'Select Avatar',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };

        ImagePicker.launchImageLibrary(options, (response) => {

            if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else {
                let source = { uri: response.uri };
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    coverSource: source
                });
            }
        });
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    coverWrap: {
        position: 'relative'
    },
    changeCoverButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 90,
        height: 25,
        backgroundColor: 'grey',
        opacity: 0.8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2
    },
    logoWrap: {
        alignItems: 'center',
        marginTop: -60,
    },
    logo: {
        borderColor: '#D8D8D8',
        borderWidth: 2,
        padding: 2,
        width: window.width / 3 +10,
        height: window.width / 3+10
    },
    logoSmallWrap: {
        borderColor: '#D8D8D8',
        borderWidth: 2,
        position: 'relative'
    },
    changeLogoButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 90,
        height: 25,
        backgroundColor: 'grey',
        opacity: 0.7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2
    },
    storeWrap: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 15
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'
    },
    infoWrap: {
        padding: 15
    },
    infoLine: {
        flexDirection: 'row',
        marginBottom: 15
    },
    actionWrap: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    actionSmallWrap: {
        alignItems: 'center'
    },
    buttonWrap: {
        width: 110,
        paddingTop: 12,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        marginBottom: 15,
        marginRight: 15,
        marginTop: 5
    },
    modalContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black',
        opacity: 0.9
    },
    touchableClose: {
        width: window.width,
        height: window.height,
        position: 'absolute',
        top: 0
    },
    modalSmallContainer: {
        backgroundColor: 'white',
        width: window.width/2 + 30,
        height: 210,
        elevation: 4,
        padding: 10
    },
    modalRow: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        padding: 15
    },
    modalIcon: {
        marginRight: 10,
        color: '#444444'
    },
    modalText: {
        fontSize: 20,
        color: '#444444'
    }

});