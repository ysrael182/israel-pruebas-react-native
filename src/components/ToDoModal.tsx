/**
 * @author Israel Yasis
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { ReactNativeModal } from 'react-native-modal';
import PropTypes from 'prop-types';

export class ToDoModal extends Component {
    state = {
        isModalvisible: this.props.isModalvisible
    };
    toggleModal= () => {
        //this.setState({isModalvisible: false});
        this.props.isModalvisible = false;
    };
    render() {
        return (
            <ReactNativeModal isVisible={this.state.isModalvisible}>
                <View style={{flex: 1}}>
                    <Text>Add To Do</Text>
                    <Button onPress={this.toggleModal} title="Add new To Do" />
                </View>        
            </ReactNativeModal>
        );
    }
}