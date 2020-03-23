import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { ItemToDoComponent } from '../components/ItemToDoComponent';
import{ ToDoModal } from '../components/ToDoModal';
import { ToDoService } from '../shared/ToDoService';
export default class Home extends Component {
    state = {
        toDoS: [],
        isModalvisible: false    
     };
    componentDidMount() {
         ToDoService.getList.then(response => {
             this.setState({toDoS: response});
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
                <View>
                    { this.renderToDoS() }
                </View>
                <Button
                    title="Add To Do With Navigation"
                    onPress={() => this.props.navigation.navigate('AddToDo')}
                />
                <Button 
                    title="Add to Do with Modal"
                    onPress={() => this.setState({isModalvisible: true})}
                />
            </View>
        );
    }
}