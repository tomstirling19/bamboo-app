import React from 'react';
import {View, Alert, StyleSheet} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import OptionList from '../components/OptionList';
import Settings from '../components/Settings';
import {RootStackParamList} from '../components/types';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const options = [
    {
      label: 'Start Learning',
      action: () => navigation.navigate('LanguageSelection'),
    },
    {
      label: 'Login',
      action: () => Alert.alert('Login is not supported yet'),
    },
  ];

  const handleOptionSelect = (label: string) => {
    const selectedOption = options.find(opt => opt.label === label);
    selectedOption?.action();
  };

  return (
    <View style={styles.container}>
      <Settings onPress={() => Alert.alert('Settings are not supported yet')} />
      <OptionList
        options={options.map(opt => opt.label)}
        onOptionSelect={handleOptionSelect}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
