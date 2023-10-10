import { ForecastDataUtils } from "./forecastData.utils";

describe('Forecast Data utils', () => {
    const REALLY_BIG_TEMP = 60;
    const REALLY_LOW_TEMP = -5;
    const REALLY_HIGH_HUMIDITY = 100;
    const DAY_1 = '2020-12-01';
    const DAY_2 = '2020-13-02';
    const forecastData: ForecastDataItem[] = [
        { dt:1, dt_txt: `${DAY_1} 12:00:00`, main: { temp_max: 1, temp_min: 1, humidity: 1 } },
        { dt:1, dt_txt: `${DAY_1} 13:00:00`, main: { temp_max: REALLY_BIG_TEMP, temp_min: 1, humidity: 1 } },
        { dt:1, dt_txt: `${DAY_1} 14:00:00`, main: { temp_max: 1, temp_min: REALLY_LOW_TEMP, humidity: 1 } },
        { dt:1, dt_txt: `${DAY_1} 15:00:00`, main: { temp_max: 1, temp_min: 1, humidity: REALLY_HIGH_HUMIDITY } },
        { dt:1, dt_txt: `${DAY_2} 13:00:00`, main: { temp_max: REALLY_BIG_TEMP, temp_min: 1, humidity: 1 } },
        { dt:1, dt_txt: `${DAY_2} 14:00:00`, main: { temp_max: 1, temp_min: REALLY_LOW_TEMP, humidity: 1 } },
        { dt:1, dt_txt: `${DAY_2} 15:00:00`, main: { temp_max: 1, temp_min: 1, humidity: REALLY_HIGH_HUMIDITY } },
    ];

    it('should group forecast data by day', () => {
        const groupedForecastData = ForecastDataUtils.groupForecastByDays(forecastData);
        expect(groupedForecastData[DAY_1].length).toEqual(4);
        expect(groupedForecastData[DAY_2].length).toEqual(3);
    });

    it('should get the maximum and minimum for each day', () => {
        const groupedForecastData = ForecastDataUtils.groupForecastByDays(forecastData);
        const maximumAndMinimumValues = ForecastDataUtils.getMaximumValuesFromGroupedForecastData(groupedForecastData);
        expect(maximumAndMinimumValues.length).toEqual(2);
        expect(maximumAndMinimumValues[0].temp_max).toEqual(REALLY_BIG_TEMP);
        expect(maximumAndMinimumValues[0].temp_min).toEqual(REALLY_LOW_TEMP);
        expect(maximumAndMinimumValues[0].humidity).toEqual(REALLY_HIGH_HUMIDITY);
        expect(maximumAndMinimumValues[1].temp_max).toEqual(REALLY_BIG_TEMP);
        expect(maximumAndMinimumValues[1].temp_min).toEqual(REALLY_LOW_TEMP);
        expect(maximumAndMinimumValues[1].humidity).toEqual(REALLY_HIGH_HUMIDITY);
    });
});
