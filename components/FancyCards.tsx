import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const FancyCards = (): JSX.Element => {
  return (
    <View>
      <Text style={styles.headingText}>Tranding Places</Text>
      <View style={[styles.cards, styles.cardElevated]}>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://images.unsplash.com/photo-1526711657229-e7e080ed7aa1?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
        />
        <View style={styles.cradBody}>
          <Text style={styles.cardTitle}>Taj Mahal</Text>
          <Text style={styles.cardLable}>Agra , U.P</Text>
          <Text style={styles.cardDescription}>
            The Taj Mahal is an Islamic ivory-white marble mausoleum on the
            right bank of the river Yamuna in the Indian city of Agra.
          </Text>
          <Text style={styles.cardFooter}>12 min away</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  cards: {},
  cardElevated: {},
  cardImage: {
    height: 180,
  },
  cradBody: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardLable: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: 'grey',
    marginBottom: 10,
  },
  cardDescription: {
    color: '#f5e7e4',
  },
  cardFooter: {
    marginTop: 10,
    color: 'gray',
  },
});
