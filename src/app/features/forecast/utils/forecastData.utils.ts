export class ForecastDataUtils {
    static groupForecastByDays(forecastDataList: ForecastDataItem[]): GroupedForecastData {
        return forecastDataList.reduce((object: GroupedForecastData, forecastData) => {
            const dtTxtDate: string = forecastData.dt_txt.split(' ')[0];
            if (!object[dtTxtDate]) {
                object[dtTxtDate] = [];
               }
               object[dtTxtDate].push(forecastData);
               return object;
        }, {});
    }

    static getMaximumValuesFromGroupedForecastData(groupedForecastData: GroupedForecastData): ReducedForecastData {
        return Object.keys(groupedForecastData).reduce((reducedForecastData: ReducedForecastData, key) => {
            const reducedData = groupedForecastData[key].reduce((prev: ForecastItemData, current) => {
                return {
                    dateString: key,
                    temp_max: (prev.temp_max > current.main.temp_max) ? prev.temp_max : current.main.temp_max,
                    temp_min: (prev.temp_min < current.main.temp_min) ? prev.temp_min : current.main.temp_min,
                    humidity: (prev.temp_max > current.main.humidity) ? prev.humidity : current.main.humidity
                }
            }, {
                dateString: '',
                temp_max: -Infinity,
                temp_min: Infinity,
                humidity: -Infinity
            });
            reducedForecastData.push(reducedData);
            return reducedForecastData;
        }, []);
    }
}