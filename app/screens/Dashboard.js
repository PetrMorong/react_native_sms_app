import React, { Component } from 'react';
import { StyleSheet,  Text,  View } from 'react-native';

export default class Dashboard  extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text>Já sem dashboard</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E7F0F6',
        flexDirection: 'column'
    }
});

