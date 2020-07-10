import React from 'react'

import {
    createStackNavigator,
    CardStyleInterpolators
} from '@react-navigation/stack'

import Routes from './routes'

import HomeScreen from '../screens/home/index'

const Stack = createStackNavigator()

export const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            gestureDirection: "horizontal",
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
            initialRouteName={Routes.HOME}>
            <Stack.Screen name={Routes.HOME} component={HomeScreen} />
        </Stack.Navigator>
    )
}