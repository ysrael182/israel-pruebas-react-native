/**
 * @author Israel Yasis
 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { styleComponent } from '../components/Styles';

export class ItemToDoComponent extends Component {
    static propTypes = {
        users: PropTypes.array.isRequired
    };
    render() {
        return (
            <View>
                { this.props.items.map((item, index) => {
                    return (
                        <View key={index} style={styleComponent.container}>
                              <Text>{item.name}</Text>  
                        </View>
                    );
                })}
            </View>
        );
    }
}