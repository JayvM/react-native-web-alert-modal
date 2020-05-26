import React from 'react';
import { Alert, Platform, StyleSheet, ToastAndroid, View } from 'react-native';
import Content from './components/Content';
import CustomAlert from './components/CustomAlert';
import CustomModal from './components/CustomModal';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      alert: {
        visible: false
      },
      modal: {
        visible: false
      }
    };
  }

  showAlert = (message) => {
    switch (Platform.OS) {
      case 'web': 
        this.setState({ 
          alert: {
            visible: true,
            message: message
          } 
        });
        break;
      case 'android': 
        ToastAndroid.show(message, ToastAndroid.SHORT);
        break;
      case 'ios':
        Alert.alert(message);
        break;
    }
  };

  closeAlert = () => {
    this.setState({
      alert: {
        visible: false
      }
    });
  };

  openModal = (message) => {
    this.setState({ 
      modal: {
        visible: true,
        message: message
      } 
    });
  };

  closeModal = (inputValue) => {
    this.setState({
      modal: {
        visible: false
      }
    });

    console.log(inputValue);
  };
  
  render() {
    return (
      <View style={styles.container}>
        {this.state.alert.visible && <CustomAlert message={this.state.alert.message} onClose={this.closeAlert}></CustomAlert>}
        {this.state.modal.visible && <CustomModal message={this.state.modal.message} onClose={this.closeModal}></CustomModal>}
        <Content showAlert={this.showAlert} openModal={this.openModal}></Content>
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
