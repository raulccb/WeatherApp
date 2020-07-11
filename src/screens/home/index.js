import React, { useState, useEffect } from 'react'
import { Text, View, Image, Button } from 'react-native'
import { AppContainer, UcHeader, UcBox, UcButtonLoader, Logo, TextParse, UcButtonIcon } from '../../components'
import { apiClient } from '../../service/Api'
import { getLocation } from '../../service/Location'
import { colors, images } from '../../theme'
import { showAlert } from '../../utils'
import styles from './styles'
import Constants from '../../utils/Constants'

const colorBox = [
    colors.boxAviso.danger,
    colors.boxAviso.info,
    colors.boxAviso.warning,
    colors.boxAviso.success,
]

export default function Home(props) {

    const [location, setLocation] = useState({})
    const [cpnkey, setCpnKey] = useState(new Date().getTime())
    const [data, setData] = useState({})
    const [lastUpdate, setLastUpdate] = useState('')

    useEffect(() => {
        fetchLocation()
    }, [])

    const fetchLocation = async () => {
        const p = await getLocation()
        setLocation(p)
    }

    const fetchData = async refBt => {

        const parameters = {
            lat: location.latitude,
            lon: location.longitude,
            appid: Constants.weather.apiKey,
            lang: 'pt',
            units: 'metric'
        }

        try {

            const result = await apiClient.get('/weather', {
                params: parameters
            })

            setData(result.data)
            setCpnKey(`${new Date().getTime()}`)

            if (result.data && result.data.timezone)
                setLastUpdate(new Date().toLocaleString('pt-br', { timeZone: data.timezone }))

            refBt.showLoading(false)

        } catch (error) {

            refBt.showLoading(false)
            showAlert(Constants.msg.emptyData)

        }
    }

    const getTitle = cidade => (
        <TextParse parse={{ pattern: new RegExp(cidade), style: styles.textBold }}>
            {`Veja os dados climáticos de ${cidade} e Região. `}
        </TextParse>
    )

    Description = obj => (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={{ width: 50, height: 50, paddingRight: 20 }}
                source={{ uri: Constants.weather.urlIcon(obj.data.icon) }}
            />
            <Text style={{ fontSize: 20, fontWeight: 'bold', textTransform: 'capitalize', paddingBottom: 10 }}>{obj.data.description}</Text>
        </View>
    )

    Metrics = ({ main, wind }) => (
        <View style={styles.boxMetrica}>
            <View style={styles.row}>
                <Text>Temperatura agora</Text>
                <Text style={styles.bold}>{main.temp}°</Text>
            </View>
            <View style={styles.row}>
                <Text>Temperatura (max)</Text>
                <View style={styles.colRight}>
                    <Text style={styles.bold}>{main.temp_max}°</Text>
                    <Image source={images.max} style={styles.img} />
                </View>
            </View>
            <View style={styles.row}>
                <Text>Temperatura (min)</Text>
                <View style={styles.colRight}>
                    <Text style={styles.bold}>{main.temp_min}°</Text>
                    <Image source={images.min} style={styles.img} />
                </View>
            </View>
            <View style={styles.row}>
                <Text>Vento</Text>
                <Text style={styles.bold}>{wind.speed}km/h</Text>
            </View>
            <View style={styles.rowLast}>
                <Text>Umidade</Text>
                <Text style={styles.bold}>{main.humidity}%</Text>
            </View>
        </View>
    )

    const getColor = () => colorBox[Math.floor(Math.random() * colorBox.length)]
    const getWeather = refBt => fetchData(refBt)
    const showJSON = (type) => showAlert(JSON.stringify(type, null, 3))

    return (
        <AppContainer>

            <UcHeader nav={props.navigation}>
                {Constants.app.title}
            </UcHeader>

            <Logo />

            <View style={styles.boxButton}>
                <UcButtonLoader
                    titulo={'Mostrar dados'}
                    onPress={getWeather} />
            </View>

            {data.name ?
                <UcBox
                    key={cpnkey}
                    titulo={getTitle(data.name)}
                    data={lastUpdate}
                    bgColor={getColor()}>

                    <Description data={data.weather[0]} />
                    <Metrics {...data} />

                    <UcButtonIcon
                        onPress={showJSON.bind(this, location)}
                        title={'Ver JSON Location'}
                    />

                    <UcButtonIcon
                        onPress={showJSON.bind(this, data)}
                        title={'Ver JSON Api WeatherMap'}
                    />

                </UcBox> : null}

        </AppContainer>
    )
}