/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import {connect} from 'react-redux';


class WorldItem extends Component{
    render(){
        return (
            <Text style={styles.listItem}>
                {this.props.title}
            </Text>
        )
    }
}


export default class App extends Component {
    render() {
        const {helloWorld} = this.props;

        return (
            <View style={styles.container}>
                {
                    helloWorld.map(item => <WorldItem {...item} />)
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    listItem: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});

function mapStateToProps(state){
    const {helloWorld} = state;
    return {
        helloWorld
    }
}

export default connect(mapStateToProps)(App)
