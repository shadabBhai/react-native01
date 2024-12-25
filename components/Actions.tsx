import {
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Actions = () => {
  const openWebsite = (wesiteLink: string) => {
    Linking.openURL(wesiteLink);
  };
  return (
    <View>
      <Text style={styles.headingText}>Blog Cards</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.blogContainer}>
          <Text style={styles.headingHeader}>
            What's new in Javascript 21 -ES12
          </Text>
        </View>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
        />
        <View style={styles.cardBody}>
          <Text numberOfLines={2} style={styles.cardDescription}>
            Javascript is a programming language used to create interactive
            effects within web browsers. Javascript is a programming language
            used to create interactive effects within web browsers. Javascript
            is a programming language used to create interactive effects within
            web browsers. Javascript is a programming language used to create
            interactive effects within web browsers. Javascript is a programming
            language used to create interactive effects within web browsers.
            Javascript is a programming language used to create interactive
            effects within web browsers.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <Text>
            <TouchableOpacity
              onPress={() => openWebsite('https://www.w3schools.com/js/')}>
              <Text style={styles.footerText}>Read More..</Text>
            </TouchableOpacity>
          </Text>
          <Text>
            <TouchableOpacity
              onPress={() => openWebsite('https://github.com/shadabBhai')}>
              <Text style={styles.footerText}>Follow Me </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Actions;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
  },
  card: {
    width: 420,
    height: 400,
    margin: 10,
    gap: 10,
  },
  elevatedCard: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  blogContainer: {
    padding: 10,
  },
  headingHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardImage: {
    height: 180,
  },
  cardBody: {
    padding: 10,
  },
  cardDescription: {
    fontSize: 16,
  },
  footerContainer: {
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  footerText: {
    color: 'gray',
  },
});
