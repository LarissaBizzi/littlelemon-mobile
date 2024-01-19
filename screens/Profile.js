import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { TextMask } from 'react-native-masked-text';
import { HeaderBackButton } from '@react-navigation/stack';

const ProfileScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const handleBackButtonPress = () => {
      // Handle back button press event
      // For now, this function can be empty since the back button is inactive
};

  useEffect(() => {
    // Retrieve the data from the Onboarding phase
    const onboardingData = // Retrieve the data from the state management library

    // Set the initial values of the input fields
    setFirstName(onboardingData.firstName);
    setEmail(onboardingData.email);
  }, []);

  return (
    <View>
      <HeaderBackButton onPress={handleBackButtonPress} disabled={true} />
    <div>
      <label>First Name:</label>
      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

      <label>Email Address:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Phone Number:</label>
      <TextMask
        type="custom"
        options={{
          mask: '(999) 999-9999', // Mask for USA phone numbers
        }}
        value={phoneNumber}
        onChangeText={(formattedPhoneNumber, rawPhoneNumber) => setPhoneNumber(rawPhoneNumber)}
        render={(ref, props) => (
          <TextInput
            ref={ref}
            {...props}
            keyboardType="phone-pad"
            placeholder="(123) 456-7890"
          />
        )}
      />
    </div>
    </View>
  );
};

export default ProfileScreen;