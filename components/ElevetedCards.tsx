import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevetedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevetedCards</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={[styles.card, styles.cardOne]}>
            <Text> scroll</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
            <Text>me</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text> ....</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
            <Text>:</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text> Blue</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
            <Text>Green</Text>
          </View>
          <View style={[styles.card, styles.cardOne]}>
            <Text> Red</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
            <Text>Green</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 8,
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'green',
  },
  cardThree: {
    backgroundColor: 'blue',
  },
});
