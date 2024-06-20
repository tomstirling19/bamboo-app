import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';

interface OptionListProps {
  options: string[];
  onOptionSelect: (option: string) => void;
  header?: string;
}

const {width} = Dimensions.get('window');

const OptionList: React.FC<OptionListProps> = ({
  options,
  onOptionSelect,
  header,
}) => {
  return (
    <View style={styles.container}>
      {header && <Text style={styles.header}>{header}</Text>}
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onOptionSelect(option)}
          style={styles.button}>
          <Text style={styles.buttonText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    alignItems: 'center',
  },
  header: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    padding: 10,
    marginVertical: 5,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 5,
    width: width * 0.8,
  },
  buttonText: {
    textAlign: 'center',
  },
});

export default OptionList;
