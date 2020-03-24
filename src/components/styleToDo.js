import  { StyleSheet } from 'react-native';

const styleToDo = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#f1f1fb',
        padding: 10,
        flex: 1
    },
    list: {
        padding: 10,
        flexDirection: 'row',
        borderColor: '#e7e8ec',
        borderRadius: 5,
        borderWidth: 1,
        marginBottom: 10,
        backgroundColor: '#ffffff',
        shadowColor: "#e7e8ec",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2
    },
    checkBox: {
    },
    text: {
        textTransform: "uppercase",
        marginTop: 5,
        marginLeft: 5
    },
    textDone: {
        textDecorationLine: 'line-through'
    },
    iconDelete: {
        marginLeft: 'auto',
        color: '#f4b6bb'
    }
});

export {
    styleToDo
}