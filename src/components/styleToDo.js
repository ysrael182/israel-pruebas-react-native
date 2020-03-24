import  { StyleSheet } from 'react-native';
import { withOrientation } from 'react-navigation';

const styleToDo = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        borderColor: 'gray',
        borderWidth: 1
    },
    text: {
        textTransform: "uppercase",
        marginTop: 5
    },
    textDone: {
        textDecorationLine: 'line-through'
    }
});

export {
    styleToDo
}