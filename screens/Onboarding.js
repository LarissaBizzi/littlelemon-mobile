import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class Onboarding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      email: '',
      isValidFirstName: false,
      isValidEmail: false,
    };
  }

  handleFirstNameChange = (text) => {
    // Check if the first name contains only string characters
    const isValid = /^[a-zA-Z]+$/.test(text);
    this.setState({
      firstName: text,
      isValidFirstName: isValid,
    });
  };

  handleEmailChange = (text) => {
    // Check if the email is properly formatted
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);
    this.setState({
      email: text,
      isValidEmail: isValid,
    });
  };

  render() {
    const { isValidFirstName, isValidEmail } = this.state;
    const isButtonDisabled = !isValidFirstName || !isValidEmail;

    return (
      <View>
        {/* Header and TextInput components */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Little Lemon</Text>
          <Image source={require('path/to/logo.png')} style={styles.logo} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          onChangeText={this.handleFirstNameChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={this.handleEmailChange}
        />

        {/* Next button */}
        <Button
          title="Next"
          disabled={isButtonDisabled}
          onPress={() => {
            // Handle button press action here
          }}
        />
      </View>
    );
  }
}

const styles = {
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo: {
    width: 30,
    height: 30,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
};

export default Onboarding;