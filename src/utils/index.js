import {
    PermissionsAndroid,
    Platform,
    ToastAndroid,
    Alert,
} from 'react-native'


export const showAlert = (
    message,
    title = 'Atenção',
    buttonTitle = 'OK'
) => {
    setTimeout(() => {
        Alert.alert(title, message, [{ text: buttonTitle }])
    }, 200)
}

export const hasLocationPermission = async () => {

    return new Promise(async (resolve, reject) => {

        if (Platform.OS === 'ios' ||
            (Platform.OS === 'android' && Platform.Version < 23)) {
            resolve(true)
        }

        const hasPermission = await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        )

        if (hasPermission)
            resolve(true)

        const status = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        )

        if (status === PermissionsAndroid.RESULTS.GRANTED)
            resolve(true)

        if (status === PermissionsAndroid.RESULTS.DENIED) {
            ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG)
            reject(false)
        } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
            ToastAndroid.show('Location permission revoked by user.', ToastAndroid.LONG)
            reject(false)
        }
    })
}

