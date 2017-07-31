import { combineReducers } from 'redux';
import WeatherSearchReducer from './WeatherSearchReducer';
//import WeatherShowReducer from './WeatherShowReducer';

export default combineReducers({
  weatherSearchForm: WeatherSearchReducer,
  //weatherForecast: WeatherShowReducer
});
