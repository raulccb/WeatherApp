import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './stacknavigation'

export const RootNavigator = () => {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}