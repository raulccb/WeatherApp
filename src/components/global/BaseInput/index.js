import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const BaseInput = ({ children, label }) => (
    <View style={styles.baseInput}>
        <Text style={styles.lbTitle} uppercase={false}>{label}</Text>
        {children}
    </View>
)

const styles = StyleSheet.create({
    baseInput: {
        width: '100%',
        paddingVertical: 6
    },
    lbTitle: {
        fontSize: 14,
        color: '#747474',
        paddingVertical: 8
    }
})

export default BaseInput

