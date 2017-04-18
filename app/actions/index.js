/**
 * Created by Petr on 27.1.2017.
 */
import { post } from '../fetch/index';
import { AsyncStorage } from 'react-native';
import request from 'superagent';

export function save(url, meta={}, data){
    return function(dispatch) {
        dispatch({type: 'SAVE', meta});
        post(url, data)
            .end(function(err, res){
                console.log(res);
                let parsedResponse;
                try{
                    parsedResponse = JSON.parse(res.text);
                    dispatch({type: 'SAVE_FULFILLED', payload: parsedResponse.result, meta});
                }
                catch (err){
                    dispatch({type: 'SAVE_REJECTED', payload: parsedResponse.error, meta});
                }
            });
    }
}

export function saveImage(url, data){
    return function(dispatch) {
        post(url, data)
            .end(function(err, res){
                console.log('saveimage',res);
                let parsedResponse;
                try{
                    parsedResponse = JSON.parse(res.text);
                    dispatch({type: 'SAVE_IMAGE_FULFILLED', payload: parsedResponse.result});
                }
                catch (err){
                    dispatch({type: 'SAVE_REJECTED'});
                }
            });
    }
}

export function fetch(url, meta={}, data={}){
    return function(dispatch) {
        dispatch({type: 'FETCH', meta});
        post(url, data)
            .end(function(err, res){
                console.log('fetch',res);
                let parsedResponse = JSON.parse(res.text);
                try{
                    dispatch({type: 'FETCH_FULFILLED', payload: parsedResponse, meta});
                }
                catch (err){
                    dispatch({type: 'FETCH_REJECTED', meta});
                }
            });
    }
}


export function getTranslations(){
    return function(dispatch) {
        request
            .get('https://bulkgate-node.herokuapp.com/translations')
            .end(function(err, res){
                AsyncStorage.setItem('translations', res.text);
                dispatch({type: 'GOT_TRANSLATIONS', payload: JSON.parse(res.text)})
            });
    }
}
