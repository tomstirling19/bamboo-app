import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface SettingsProps {
  onPress: () => void;
  style?: object;
}

const Settings: React.FC<SettingsProps> = ({onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.settingsButton, style]}>
      <Icon name="gear" size={30} color="#000" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  settingsButton: {
    position: 'absolute',
    top: 70,
    right: 30,
  },
});

export default Settings;
