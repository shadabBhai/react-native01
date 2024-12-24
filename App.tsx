import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';
import ElevetedCards from './components/ElevetedCards';
import FancyCards from './components/FancyCards';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevetedCards />
        <FancyCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
