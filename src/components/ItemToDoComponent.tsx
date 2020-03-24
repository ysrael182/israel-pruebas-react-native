/**
 * @author Israel Yasis
 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CheckBox  from '@react-native-community/checkbox';
import PropTypes from 'prop-types';
import { styleToDo } from '../components/styleToDo';
import { ToDo, ToDoService } from '../shared/ToDoService';

export class ItemToDoComponent extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    };
    state = {
        chores: this.props.items
    };
    doneToDo(toDo: ToDo) {
        toDo.done = !toDo.done;
        ToDoService.update(toDo).then(() => {
            this.refreshListToDoS();
        });
    }
    deleteToDo(toDo: ToDo) {
        ToDoService.delete(toDo.id).then(() => {
            this.props.items = this.props.items.filter((item: ToDo) => {
                return item.id !== toDo.id;
            });
            this.refreshListToDoS;
        });
    }
    refreshListToDoS = () => {
        this.setState({chores: this.props.items});
    };
    render() {
        return (
            <View>
                { this.state.chores.map((item: ToDo) => {
                    return (
                        <View style={styleToDo.container} key={item.id}>
                              <CheckBox 
                                    onValueChange = {() => this.doneToDo(item)}
                                    value = {item.done}
                              />
                              <Text style={[styleToDo.text, item.done ? styleToDo.textDone : null]}>{item.name}</Text>  
                        </View>
                    );
                })}
            </View>
        );
    }
}