import React from 'react'
import { StyleSheet, Image } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { images, metrics } from '../../theme/index'

const Logo = props => (
    <Animatable.View
        delay={50}
        animation="bounceIn"
        useNativeDriver={true}
        style={styles.boxLogo}>
        <Image
            style={[styles.logoImg, {
                width: metrics.scaleWidth(props.lWidth),
                height: metrics.scaleHeight(props.lHeight)
            }]}
            source={images.logo}
        />
    </Animatable.View>
)

Logo.defaultProps = {
    lWidth: 150,
    lHeight: 150,
}

export default Logo

const styles = StyleSheet.create({
    boxLogo: {
        paddingHorizontal: 5,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImg: {
        resizeMode: "center",
    }
})