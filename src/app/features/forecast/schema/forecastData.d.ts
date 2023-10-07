interface ForecastData {
    cod: string,
    cnt: number,
    list: [
        {
            dt: number,
            temp: {
                day: number,
                min: number,
                max: number,
            },
            feels_like: {
                day: number
            },
            pressure: number,
            humidity: number,
            weather: [
                {
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            speed: number,
            deg: number
        }
    ]
}