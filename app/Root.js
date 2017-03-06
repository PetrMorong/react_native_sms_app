import React, {Component} from 'react';
import { connect } from 'react-redux';
import AppNavigator from './navigation/AppNavigator'

const mapStateToProps = (store) => {
    return{
        user: store.user,
        credit: 853.7
    }
}

export default class Root extends Component {

    render() {
        return (
           <AppNavigator user={this.props.user} credit={this.props.credit} initialRoute={{ident: "Sign"}}/>
        )
    }

}

module.exports = connect(mapStateToProps)(Root);