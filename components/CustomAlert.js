import React from 'react';
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';

const properties = {
  width: Dimensions.get('window').width / 2,
  height: Dimensions.get('window').height / 2
};

export default function CustomAlert(props) {
  return (
    <View style={styles.alert}>
      <View style={styles.body}>
        <Text>{props.message}</Text>
      </View>
      <Button title='OK' onPress={() => props.onClose()}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  alert: {
    width: properties.width,
    height: properties.height,
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 999,
    elevation: 999,
    transform: [{ translateX: -(properties.width / 2)}, { translateY: -(properties.height / 2)}],
    backgroundColor: '#DDDDDD'
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
