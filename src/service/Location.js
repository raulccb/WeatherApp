import Geocoder from 'react-native-geocoding'
import Geolocation from 'react-native-geolocation-service'
import { hasLocationPermission } from '../utils'

export const getLocation = async () => {

    return new Promise(async (resolve, reject) => {

        const hasLocPermission = await hasLocationPermission()

        if (!hasLocPermission)
            reject(false)

        Geolocation.getCurrentPosition(
            (data) => resolve(data.coords),
            (err) => reject(err)
        )
    })
}

export const geocodeLocationByName = (locationName) => {
    return new Promise(
        (resolve, reject) => {
            Geocoder.from(locationName)
                .then(json => {
                    const addressComponent = json.results[0].address_components[0]
                    resolve(addressComponent)
                })
                .catch(error => reject(error))
        }
    )
}

export const geocodeLocationByCoords = (lat, long) => {
    return new Promise(
        (resolve, reject) => {
            Geocoder.from(lat, long)
                .then(json => {
                    const addressComponent = json.results[0].address_components[0]
                    resolve(addressComponent)
                })
                .catch(error => reject(error))
        }
    )
}
