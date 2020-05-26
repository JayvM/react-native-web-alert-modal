import React from 'react';
import { Button, View } from 'react-native';

export default function Content(props) {
  return (
    <View>
      <Button title='Show alert' onPress={() => props.showAlert('This is an alert message')}></Button>
      <Button title='Open modal' onPress={() => props.openModal('This is a modal message')}></Button>
    </View>
  );
}
