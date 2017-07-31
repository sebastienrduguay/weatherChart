import {
  HUMIDITIES_CHANGED,
  TEMPERATURES_CHANGED,
  PRESSURES_CHANGED,
  SEA_LEVELS_CHANGED,
  GROUND_LEVELS_CHANGED,
  LAT_CHANGED,
  LON_CHANGED,
  CHART_SELECTION_CHANGED
} from '../actions/types';
//import { CHART_SELECTIONS } from '../constants/constants';

const INITIAL_STATE = {
  humidities: [],
  temperatures: [],
  pressures: [],
  seaLevels: [],
  groundLevels: [],
  lat: 0,
  lon: 0,
  selectedChartIndex: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HUMIDITIES_CHANGED:
      return { ...state, humidities: action.payload };
    case TEMPERATURES_CHANGED:
      return { ...state, temperatures: action.payload };
    case PRESSURES_CHANGED:
      return { ...state, pressures: action.payload };
    case SEA_LEVELS_CHANGED:
      return { ...state, seaLevels: action.payload };
    case GROUND_LEVELS_CHANGED:
      return { ...state, groundLevels: action.payload };
    case LAT_CHANGED:
      return { ...state, lat: action.payload };
    case LON_CHANGED:
      return { ...state, lon: action.payload };
    case CHART_SELECTION_CHANGED:
      return { ...state, selectedChartIndex: action.payload };
    default:
      return state;
  }
};
