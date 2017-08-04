import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const CONTROL_PANEL_LABELS = ['Sign up', 'Login', 'Search', 'History', 'Profile', 'Help'];

class ControlPanel extends Component {
  onControlPanelSelection(value) {
    switch (value) {
      case CONTROL_PANEL_LABELS[0]:
      break;
      case CONTROL_PANEL_LABELS[1]:
      break;
      case CONTROL_PANEL_LABELS[2]:
        Actions.weatherSearch();
      break;
      case CONTROL_PANEL_LABELS[3]:
      break;
      case CONTROL_PANEL_LABELS[4]:
      break;
      case CONTROL_PANEL_LABELS[5]:
      break;
      case CONTROL_PANEL_LABELS[6]:
      break;
      default:
      return;
    }
  }
  
  renderControlPanelItems() {

  }

  render() {
    const { controlPanelItemStyle, controlPanelContainerStyle } = styles;
    return (
      <View style={controlPanelContainerStyle}>
      {
        CONTROL_PANEL_LABELS.map((value, i) => {
          return (
            <TouchableOpacity onPress={this.onControlPanelSelection(value)}>
              <View key={i} style={controlPanelItemStyle}>
                <Text>{value}</Text>
              </View>
            </TouchableOpacity>
          );
        })
      }
      </View>
    );
  }
}

const styles = {
  controlPanelItemStyle: {
    justifyContent: 'center',
    height: 30,
    borderBottomWidth: 2,
    borderBottomColor: 'red'
  },
  controlPanelContainerStyle: {
    borderTopWidth: 2,
    borderTopColor: 'red',
    marginTop: 30
  }
}

export default ControlPanel;
