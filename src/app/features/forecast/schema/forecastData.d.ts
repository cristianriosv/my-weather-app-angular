interface ForecastData {
    cod: string,
    cnt: number,
    list: ForecastDataList[]
}

interface ForecastDataList {
    dt: number,
    main: {
        feels_like: number,
        temp: number,
        temp_min: number,
        temp_max: number,
        humidity: number
        pressure: number
    }
}