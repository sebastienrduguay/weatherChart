import React from 'react';
import { View, Image, Text } from 'react-native';

const WeatherItem = ({ data }) => {
  const { textStyle, midContainerStyle } = styles;
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative',
        height: 38
      }}
    >

      <View
        style={{
          flex: 3,
          alignContent: 'center',
          justifyContent: 'space-between',
          flexDirection: 'column',
          position: 'relative'
        }}
      >
        <Image
          style={{ width: 25, height: 25 }}

        />
        <View>
          <Text style={[textStyle, { alignSelf: 'flex-start' }]}>
            {data.dt_txt}
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 3,
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative'
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            position: 'relative'
          }}
        >
          <View
            style={[
              midContainerStyle,
              {
                flex: 1,
                backgroundColor: 'red',
                position: 'relative'
              }
            ]}
          >
              <Text
                style={[
                  textStyle,
                  {
                    color: 'white',
                    fontWeight: '700'
                  }
                ]}
              >{data.main.temp_max} K </Text>
          </View>
          <View style={[midContainerStyle, { flex: 1, backgroundColor: 'blue', position: 'relative'}]}>
              <Text style={[ textStyle, { color: 'white', fontWeight: '700'}]}>{data.main.temp_min} K </Text>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Image
            style={{ width: 15, height: 15, marginRight: 10 }}

            />
          <Text style={[textStyle, { height: 25}]}>{data.wind.speed} Mph</Text>
        </View>
      </View>

      <View style={{ flex: 3, flexDirection: 'column', alignContent: 'space-around'}}>
          <Text style={[textStyle,{ alignSelf: 'flex-end', paddingTop: 0, paddingBottom: 0}]}>{data.weather[0].description}</Text>
          <Text style={[textStyle,{ alignSelf: 'flex-end', paddingTop: 0, paddingBottom: 0}]}>{data.main.humidity}</Text>
          <Text style={[textStyle,{ alignSelf: 'flex-end', paddingTop: 0, paddingBottom: 0}]}>{data.main.pressure}</Text>
      </View>

    </View>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 9,
    fontWeight: '700',
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  midContainerStyle: {
    alignContent: 'center',
    justifyContent: 'center',
    height: 15,
    borderRadius: 5,
    marginRight: 5
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export { WeatherItem };
