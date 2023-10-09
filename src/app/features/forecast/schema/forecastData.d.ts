interface ForecastServiceData {
    cod: string,
    cnt: number,
    list: ForecastDataItem[]
}

interface WeatherMainData {
    feels_like?: number,
    temp?: number,
    temp_min: number,
    temp_max: number,
    humidity: number
    pressure?: number
}

interface ForecastItemData extends WeatherMainData {
    dateString: string;
}

interface ForecastDataItem {
    dt: number,
    dt_txt: string,
    main: WeatherMainData
}

type GroupedForecastData = { [key: string]: ForecastDataItem[] };
type ReducedForecastData = ForecastItemData[];