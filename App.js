import React from 'react';
import { Alert, Button, Platform, StyleSheet, ToastAndroid, View } from 'react-native';
import CustomAlert from './components/CustomAlert';
import CustomModal from './components/CustomModal';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      alertVisible: false,
      modalVisible: false
     };
  }

  showAlert = () => {
    switch (Platform.OS) {
      case 'web': 
        this.setState({ alertVisible: true });
        break;
      case 'android': 
        ToastAndroid.show("Message", ToastAndroid.SHORT);
        break;
      case 'ios':
        Alert.alert('Message');
        break;
    }
  };
  
  render() {
    return (
      <View style={styles.container}>
        {this.state.alertVisible && <CustomAlert onClose={() => this.setState({ alertVisible: false })}></CustomAlert>}
        {this.state.modalVisible && <CustomModal onClose={(inputValue) => this.setState({ modalVisible: false })}></CustomModal>}
        <Button title='Show alert' onPress={() => this.showAlert()}></Button>
        <Button title='Open modal' onPress={() => this.setState({ modalVisible: true })}></Button>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
