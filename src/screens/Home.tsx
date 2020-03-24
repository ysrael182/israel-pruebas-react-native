import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ItemToDoComponent } from '../components/ItemToDoComponent';
import { styleHome } from '../screens/styleHome';
import{ ToDoModal } from '../components/ToDoModal';
import { ToDoService } from '../shared/ToDoService';
import Icon from 'react-native-vector-icons/Ionicons';
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
            <View style={styleHome.container}>
                <View style={styleHome.listToDo}>
                    { this.renderToDoS() }
                </View>
                <Icon style={styleHome.iconAddToDo}
                        size={70} 
                        name="ios-add-circle"
                        onPress={() => this.props.navigation.navigate('AddToDo')}
                    />
            </View>
        );
    }
    /**
     * <!--
                <Icon.Button 
                    title="Add to Do with Modal"
                    onPress={() => this.setState({isModalvisible: true})}
                />-->
     */
}