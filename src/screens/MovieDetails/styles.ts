import { StyleSheet } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../common';
import { calcFont, calcHeight, calcWidth } from '../../utils';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT / 2.5,
        marginBottom: calcHeight(10),
    },
    nameText: {
        fontSize: calcFont(20),
        paddingHorizontal: calcWidth(10),
    },
    detailsText: {
        padding: calcHeight(15),
    },
    icon:{
        position:'absolute',
        right:calcWidth(30),
        top:calcHeight(-30),
        zIndex:10
    }
});
