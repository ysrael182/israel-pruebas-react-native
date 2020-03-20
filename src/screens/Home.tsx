import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { ItemUserComponent } from '../components/ItemUserComponent';
import { db } from '../config';
export default class Home extends Component {
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
                <View>
                    { this.renderToDoS() }
                </View>
                <Button
                    title="Add To Do"
                    onPress={() => this.props.navigation.navigate('AddItem')}
                />
                
            </View>
        );
    }
}