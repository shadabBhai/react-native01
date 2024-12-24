import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={Styles.conatiner}>
      <View style={Styles.conatiner}>
        <Text style={isDarkMode ? Styles.whiteText : Styles.darkText}>
          Hello bhai
        </Text>
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  whiteText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  darkText: {
    color: '#34495e',
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default AppPro;
