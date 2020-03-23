import  { StyleSheet } from 'react-native';
import { withOrientation } from 'react-navigation';

const styleComponent = StyleSheet.create({
    container: {
        marginBottom: 10,
        padding: 10,
        flexDirection: 'row'
    },
    text: {
        textTransform: "uppercase",
        marginTop: 5
    }
});
export {
    styleComponent
}