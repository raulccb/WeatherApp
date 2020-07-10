import React from 'react'
import { StyleSheet, StatusBar, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { metrics } from '../../../theme'

export default AppContainer = props => (
    <LinearGradient colors={['#81C7F5','#3867D5']} style={styles.linearGradient}>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content"
            />
            {props.children}
        </ScrollView>
    </LinearGradient>
)

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
    scroll: {
        flex: 1,
        marginTop: 25,
    },
    scrollContent: {
        padding: 5
    }
})

