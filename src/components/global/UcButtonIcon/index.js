import React from 'react'
import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native'
import { images } from '../../../theme'

const UcButtonIcon = ({ title, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
        <Image
            source={images.search}
            style={styles.ImageIconStyle}
        />
        <Text style={styles.TextStyle}>{title}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        width: '100%',
        margin: 5,
    },
    ImageIconStyle: {
        marginRight: 12,
        height: 20,
        width: 20,
        resizeMode: 'center',
    },
    TextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginRight: 20,
    }
})

export default UcButtonIcon