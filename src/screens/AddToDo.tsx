import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { db } from '../config';
let addItem = item => {
    db.ref("/chores").push({
        name: item
    })
};
export default class AddToDo extends Component {
    
    state = {
        name: ""
    };
    
    handleSubmit = () => {
        addItem(this.state.name);
        this.props.navigation.navigate('Home');
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