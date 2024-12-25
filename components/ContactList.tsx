// import React from 'react';
// import {
//   View,
//   Text,
//   Image,
//   FlatList,
//   StyleSheet,
//   ScrollView,
// } from 'react-native';
// import {CONTACT_LIST, Contact} from '../constant/Contact';

// const ContactList: React.FC = () => {
//   const renderContact = ({item}: {item: Contact}) => (
//     <View style={styles.contactContainer}>
//       <Image source={{uri: item.imageUrl}} style={styles.contactImage} />
//       <View>
//         <Text style={styles.contactName}>{item.name}</Text>
//         <Text style={styles.contactStatus}>{item.status}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <View>
//       <Text style={styles.headingText}>Contact List </Text>
//       <ScrollView scrollEnabled={false}>
//         <FlatList
//           data={CONTACT_LIST}
//           keyExtractor={item => item.uid}
//           renderItem={renderContact}
//           contentContainerStyle={styles.listContainer}
//           nestedScrollEnabled
//         />
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   headingText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     padding: 10,
//   },
//   listContainer: {
//     padding: 16,
//   },
//   contactContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   contactImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 16,
//   },
//   contactName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   contactStatus: {
//     fontSize: 14,
//     color: 'gray',
//   },
// });

// export default ContactList;

import React from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import {CONTACT_LIST, Contact} from '../constant/Contact';

const ContactList: React.FC = () => {
  const renderContact = ({item}: {item: Contact}) => (
    <View style={styles.contactContainer}>
      <Image source={{uri: item.imageUrl}} style={styles.contactImage} />
      <View>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactStatus}>{item.status}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Contact List</Text>
      <View style={styles.listWrapper}>
        <FlatList
          data={CONTACT_LIST}
          keyExtractor={item => item.uid}
          renderItem={renderContact}
          contentContainerStyle={styles.listContainer}
          nestedScrollEnabled // This ensures proper scrolling when nested
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  listWrapper: {
    height: 400, // Limit the height of the FlatList to enable internal scrolling
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    overflow: 'hidden', // Optional for a cleaner UI
  },
  listContainer: {
    paddingVertical: 10,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  contactImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactStatus: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ContactList;
