import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import WeatherSearchForm from './components/WeatherSearchForm';
import WeatherForecast from './components/WeatherForecast';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene>
        <Scene key="weaterSearch" component={WeatherSearchForm} title="Search" />
        <Scene initial key="weatherShow" component={WeatherForecast} title="Weather Forecast" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
