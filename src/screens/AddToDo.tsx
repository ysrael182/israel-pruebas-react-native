import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import {ToDo, ToDoService} from '../shared/ToDoService';
export default class AddToDo extends Component {
    
    state = {
        name: "",
        done: false
    };
    
    handleSubmit = () => {
        let newTodo = new ToDo(this.state.name, false);
        ToDoService.save(newTodo).then(() => {
            this.props.navigation.navigate('Home');
        });
    };
    render() {
        
         return (
            <View>
                <Text>Add new Chore</Text>
                <TextInput onChangeText={name => this.setState({name})} />
                <Button onPress={this.handleSubmit}
                        title= "Add To Do"/>
            </View>
         );
    }
}