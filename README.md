# --- MyWeather Web App ---

The app consists of 1 screen, where the user can search for a city, see possible locations, select one of them and show the current weather with the forecast for the next 5 days.

The project is created with Angular and Typescript.
For general components and style I am using Angular Material.
The general application state is managed by NgRx.

## How to start

Create the environment variables with the API_KEY for the service.

The project uses one external services, for geocoding and forecast, you have the instructions to get the api keys on their websites:

- For current weather data: https://openweathermap.org

Use the package manager npm to install the packages in the project and the run the development server.
You will need @angular/cli to run the project.

```bash
npm i
ng serve
```

## Automated tests

Tests are managed by Karma test runner.

To the tests:
```bash
ng test
```

## App Project folder structure

```bash
# src/app/features/
    This folder contains all the components, constants, utils and hooks that only matters to the feature.
# src/app/layout/
    Here it is the main layout components
# src/app/shared/
    Here we have the real components, constants, utils, hooks, etc. that are truly shared across the entire project
# src/app/store/
    General store for the general state application
```
## Feedback
For any feedback, please don't hesitate to contact me.