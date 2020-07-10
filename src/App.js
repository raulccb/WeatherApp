import React from 'react'
import { YellowBox } from "react-native";
import { RootNavigator } from './navigation/appnavigation'
YellowBox.ignoreWarnings([""])

const App = () => {
	return (
		<RootNavigator />
	)
}

export default App
