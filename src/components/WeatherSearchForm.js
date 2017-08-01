import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { cityNameChanged, countryNameChanged, fetchForcast } from '../actions/WeatherSearchActions';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { errorTextStyle } from '../styles';

class WeatherSearchForm extends Component {

  onCityNameChange(value) {
    this.props.cityNameChanged(value);
  }

  onCountryNameChange(value) {
    this.props.countryNameChanged(value);
  }

  searchRequested() {
    const { city, country } = this.props;
    this.props.fetchForcast({ city, country });
  }

  renderButton() {
      if (this.props.loading) {
        return <Spinner size='large' />;
      }
      return (
        <Button onPress={this.searchRequested.bind(this)}>
          Search
        </Button>
      );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='City'
            value={this.props.city}
            placeholder='Montreal'
            onChangeText={this.onCityNameChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
            label='Country'
            value={this.props.country}
            placeholder='Canada'
            onChangeText={this.onCountryNameChange.bind(this)}
          />
        </CardSection>

        <Text style={errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ weatherSearchForm }) => {
  const { city, country, loading, error } = weatherSearchForm;
  return { city, country, loading, error };
};

export default connect(
  mapStateToProps,
  { cityNameChanged, countryNameChanged, fetchForcast }
)(WeatherSearchForm);
