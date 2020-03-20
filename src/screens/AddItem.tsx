import React, { Component, useState } from 'react';
import { View, Text, Button, TouchableHighlight, TextInput, Alert } from 'react-native';
import { db } from '../config';
let addItem = item => {
    db.ref("/chores").push({
        name: item
    })
};
export default class AddItem extends Component {
    
    state = {
        name: ""
    };
    
    handleSubmit = () => {
        addItem(this.state.name);
    };
    render() {
        
         return (
            <View>
                <Text>Add Item</Text>
                <TextInput onChangeText={name => this.setState({name})} />
                <Button onPress={this.handleSubmit}
                        title= "Add To Do"/>
            </View>
         );
    }
}