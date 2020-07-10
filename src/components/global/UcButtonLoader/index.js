import React, { useRef } from 'react'
import AnimateLoadingButton from 'react-native-animate-loading-button'
import { colors, fonts } from '../../../theme'

export default function UcButtonLoader(props) {

    const refBt = useRef(null)

    const onPressHandler = () => {
        refBt.current.showLoading(true)
        props.onPress(refBt.current)
    }

    return (
        <AnimateLoadingButton
            ref={refBt}
            width={150}
            height={40}
            title={props.titulo}
            titleFontSize={fonts.moderateScale(15)}
            useNativeDriver={true}
            titleColor={colors.global.white}
            activityIndicatorColor={colors.global.white}
            backgroundColor={colors.global.bgBtColor}
            borderRadius={30}
            titleFontFamily={fonts.type.base}
            onPress={onPressHandler.bind(this)}
        />

    )

}