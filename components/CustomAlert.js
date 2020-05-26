import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function CustomAlert(props) {
  return (
    <View style={styles.alert}>
      <View style={styles.body}>
        <Text>Message</Text>
      </View>
      <Button title='OK' onPress={() => props.onClose()}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  alert: {
    width: '50%',
    height: '50%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 999,
    elevation: 999,
    transform: [{ translateX: '-50%'}, { translateY: '-50%'}],
    backgroundColor: '#DDDDDD'
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
