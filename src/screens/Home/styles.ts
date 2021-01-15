import { StyleSheet } from 'react-native';
import { calcHeight } from '../../utils';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    listStyle:{
        marginVertical:calcHeight(20),
        flexGrow:1,
    }
});