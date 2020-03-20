/**
 * @author Israel Yasis
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export class ItemToDoComponent extends Component {
    static propTypes = {
        users: PropTypes.array.isRequired
    };
    render() {
        return (
            <View>
                { this.props.items.map((item, index) => {
                    return (
                        <View key={index}>
                              <Text>{item.name}</Text>  
                        </View>
                    );
                })}
            </View>
        );
    }
}