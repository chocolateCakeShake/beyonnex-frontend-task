# BeyonnexFrontendTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Temperature Gauge

The `temperature-gauge` component is the reusable component that can be used to display the temperature gauge. The component takes the following inputs:
  - `minTemp` - The minimum value of the gauge
  - `maxTemp` - The maximum value of the gauge
  - `currentTemp` - The current value of the gauge

Some error handling has also been added to handle invalid inputs, for example if the current temperature is outside the min-max range.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
