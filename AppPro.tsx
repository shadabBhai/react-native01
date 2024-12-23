import React from 'react';

import {View, Text, StyleSheet, useColorScheme} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={Styles.conatiner}>
      <Text style={isDarkMode ? Styles.whiteText : Styles.darkText}>
        Hello bhai
      </Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  whiteText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  darkText: {
    color: 'black',
  },
});

export default AppPro;
