import React, {useState} from 'react';
import {View, Alert, StyleSheet, TextInput, Keyboard} from 'react-native';
import OptionList from '../components/OptionList';
import BackButton from '../components/BackButton';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../components/types';

const languages = ['Japanese', 'French', 'Spanish', 'German', 'Latin', 'Other'];
const subOptions: {[key: string]: string[]} = {
  Japanese: ['Hiragana', 'Katakana', 'Kanji', 'All'],
  French: [],
  Spanish: [],
  German: [],
  Latin: [],
};

const LanguageSelectionScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [currentView, setCurrentView] = useState<
    'languages' | 'subOptions' | 'input'
  >('languages');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');
  const [userInput, setUserInput] = useState<string>('');

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    const options = subOptions[language];

    if (language === 'Other') {
      setCurrentView('input');
    } else if (options.length === 0) {
      Alert.alert(`You selected: ${language}`);
      resetState();
    } else if (options.length === 1) {
      handleSubOptionSelect('All');
    } else {
      setCurrentView('subOptions');
    }
  };

  const handleSubOptionSelect = (option: string) => {
    const selection =
      option === 'All' ? selectedLanguage : `${selectedLanguage} (${option})`;
    Alert.alert(`You selected: ${selection}`);
    resetState();
  };

  const handleUserInputSubmit = () => {
    if (userInput.trim() === '') {
      Alert.alert('Please enter a valid language.');
      return;
    }
    Alert.alert(`You selected: ${userInput}`);
    Keyboard.dismiss();
    resetState();
  };

  const handleBack = () => {
    Keyboard.dismiss();
    if (currentView === 'subOptions' || currentView === 'input') {
      setSelectedLanguage('');
      setUserInput('');
      setCurrentView('languages');
    } else {
      navigation.navigate('Home');
    }
  };

  const resetState = () => {
    setSelectedLanguage('');
    setUserInput('');
    setCurrentView('languages');
  };

  return (
    <View style={styles.container}>
      <BackButton onPress={handleBack} />
      {currentView === 'languages' ? (
        <OptionList
          options={languages}
          onOptionSelect={handleLanguageSelect}
          header="Language Selection"
        />
      ) : currentView === 'input' ? (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your language"
            value={userInput}
            onChangeText={setUserInput}
            onSubmitEditing={handleUserInputSubmit}
            returnKeyType="done"
            autoFocus
          />
        </View>
      ) : (
        <OptionList
          options={subOptions[selectedLanguage]}
          onOptionSelect={handleSubOptionSelect}
          header={`${selectedLanguage} Options`}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textInput: {
    borderWidth: 0,

    padding: 20,
    width: '75%',
  },
});

export default LanguageSelectionScreen;
