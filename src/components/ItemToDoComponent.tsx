/**
 * @author Israel Yasis
 */
import React, { Component } from 'react';
import { View, Text, CheckBox } from 'react-native';
import PropTypes from 'prop-types';
import { styleComponent } from '../components/StyleComponent';
import { ToDo, ToDoService } from '../shared/ToDoService';

export class ItemToDoComponent extends Component {
    static propTypes = {
        users: PropTypes.array.isRequired
    };
    deleteToDo(toDoId: string) {
        ToDoService.delete(toDoId).then(() => {
            //Filter the items.maps    
        });
    }
    render() {
        return (
            <View>
                { this.props.items.map((item: ToDo) => {
                    return (
                        <View style={styleComponent.container}>
                              <CheckBox 
                                    onValueChange = {() => this.deleteToDo(item.id)}
                                    value = {false}
                              />
                              <Text style={styleComponent.text}>{item.name}</Text>  
                        </View>
                    );
                })}
            </View>
        );
    }
}