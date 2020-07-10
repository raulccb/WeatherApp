import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { fonts, colors } from '../../../theme'

const UcHeader = props => (
    <Animatable.View
        delay={50}
        animation="fadeInDown"
        useNativeDriver={true}
        style={styles.headerMetrica}>
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>{props.children}</Text>
        </View>
        <View style={styles.boxRight} />
    </Animatable.View>
)

const styles = StyleSheet.create({
    headerMetrica: {
        paddingTop: 10,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    imagelogo: {
        aspectRatio: .3,
        resizeMode: 'contain'
    },
    boxTitle: {
        flex: 1,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTitle: {
        fontSize: fonts.moderateScale(19),
        fontFamily: fonts.type.medium,
        color: colors.global.white,
        textAlign: 'center'
    },
    boxLeft: {
        width: 33,
        height: 40,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    boxRight: {
        width: 33,
        height: 40
    }
})

export default UcHeader
