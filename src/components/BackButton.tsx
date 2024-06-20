import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface BackButtonProps {
  onPress: () => void;
  style?: object;
}

const BackButton: React.FC<BackButtonProps> = ({onPress, style}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.backButton, style]}
      hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
      <Icon name="arrow-left" size={24} color="#000" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 70,
    left: 20,
  },
});

export default BackButton;
