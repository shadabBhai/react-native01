import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';
import ElevetedCards from './components/ElevetedCards';
import FancyCards from './components/FancyCards';
import Actions from './components/Actions';
import ContactList from './components/ContactList';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatCard />
        <ElevetedCards />
        <FancyCards />
        <FancyCards />
        <FancyCards />
        <Actions />
        <Actions />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
