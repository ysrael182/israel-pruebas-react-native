import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ItemToDoComponent } from '../components/ItemToDoComponent';
import { db } from '../config';

export default class ListToDo extends Component {
    state = {
       toDoS: []     
    };
    componentDidMount() {
        
        db.ref('/chores').on('value', snapshot => {
            let data = snapshot.val();
            let toDoS = Object.values(data);
            this.setState({toDoS});
        });
    }
    renderToDoS() {
        if(this.state.toDoS.length > 0) {
            return (
                <ItemToDoComponent items = {this.state.toDoS} />
            );
        }
        return <Text>No To Do's.</Text>;
    }
    render() {
        return (
            <View>
                { this.renderToDoS() }
            </View>
        );
    }
}