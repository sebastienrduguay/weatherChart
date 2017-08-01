import {
  HUMIDITIES_CHANGED,
  TEMPERATURES_CHANGED,
  PRESSURES_CHANGED,
  LAT_CHANGED,
  LON_CHANGED
} from '../actions/types';
//import { CHART_SELECTIONS } from '../constants/constants';

const INITIAL_STATE = {
  humidities: [],
  temperatures: [],
  pressures: [],
  lat: 0,
  lon: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HUMIDITIES_CHANGED:
      return { ...state, humidities: action.payload };
    case TEMPERATURES_CHANGED:
      return { ...state, temperatures: action.payload };
    case PRESSURES_CHANGED:
      return { ...state, pressures: action.payload };
    case LAT_CHANGED:
      return { ...state, lat: action.payload };
    case LON_CHANGED:
      return { ...state, lon: action.payload };
    default:
      return state;
  }
};
