import  { StyleSheet } from 'react-native';

const styleHome = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconAddToDo: {
        color: '#ee6988',
        flex: 1
        //position: 'absolute',
        //bottom: 10
    },
    listToDo: {
        flex: 1,
        backgroundColor: '#000000',
        flexDirection:'row'
    }
});

export {
    styleHome
}