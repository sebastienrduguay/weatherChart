import React from 'react';
import { View, Image, Text } from 'react-native';

const WeatherItem = ({data}) => {
  console.log(data);
  return (
    <View style={{ backgroundColor: 'rgba(0,0,0,0)', alignItems: 'center', alignContent: 'center'}}>
      <Text>
        {data.dt_txt}
      </Text>
      <Text>
        {data.weather[0].description}
      </Text>
      <Text>
        {data.wind.speed}
      </Text>
    </View>
  );
};

export { WeatherItem };
