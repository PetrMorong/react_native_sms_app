import React, {Component} from 'react';
import { connect } from 'react-redux';
import AppNavigator from './navigation/AppNavigator'
import { getTranslations } from './actions/Actions'
import { AsyncStorage } from 'react-native';



export default class Root extends Component {

    componentWillMount(){

        AsyncStorage.getItem('translations', (err, result) => {
            this.props.dispatch({type: 'GOT_TRANSLATIONS', payload: JSON.parse(result)})
            if(!result){
                this.props.dispatch(getTranslations())
            }
        });

    }

    render() {
        return (
           <AppNavigator  initialRoute={{ident: "Sign"}}/>
        )
    }

}

module.exports = connect()(Root);