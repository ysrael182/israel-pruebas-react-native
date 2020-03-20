import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ItemUserComponent } from '../components/ItemUserComponent';
import { db } from '../config';

export default class ListItem extends Component {
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
                <ItemUserComponent items = {this.state.toDoS} />
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