import React from 'react'
import BaseInput from '../BaseInput'
import { StyleSheet, TextInput } from 'react-native'

const UcInput = ({ children, value, onChange, ...props }) => (
    <BaseInput {...props}>
        <TextInput
            style={styles.lbInput}
            value={value}
            placeholderTextColor={'#efefef'}
            placeholder={props.placeholder || ''}
            onChangeText={onChange}
        />
    </BaseInput>
)

const styles = StyleSheet.create({
    lbInput: {
        fontSize: 14,
        color: '#747474'
    }
})

export default UcInput