export default {
    weather: {
        apiKey: '4478ecd6de3d2368adfd1ea8695925ff',
        language: 'pt-BR',
        baseUrl: 'https://api.openweathermap.org/data/2.5',
        urlIcon: (ico) => `https://openweathermap.org/img/w/${ico}.png`
    },
    msg: {
        emptyData: 'Não foi possível obter os dados neste momento! Tente novamente mais tarde.'
    },
    app: {
        title: 'Weatherap. O seu mais novo aplicativo de clima'
    }
}