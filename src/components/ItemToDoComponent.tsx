/**
 * @author Israel Yasis
 */
import React, { Component } from 'react';
import { View, Text, CheckBox } from 'react-native';
import PropTypes from 'prop-types';
import { styleComponent } from '../components/StyleComponent';
import { ToDo } from 'src/shared/ToDoService';

export class ItemToDoComponent extends Component {
    static propTypes = {
        users: PropTypes.array.isRequired
    };
    render() {
        return (
            <View>
                { this.props.items.map((item: ToDo) => {
                    return (
                        <View style={styleComponent.container}>
                              <CheckBox title="Delete To Do" />
                              <Text style={styleComponent.text}>{item.name}</Text>  
                        </View>
                    );
                })}
            </View>
        );
    }
}