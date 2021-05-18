import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FriendsContext } from './FriendsContext';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You have {this.context.currentFriends.length} friends.</Text>
        <TouchableOpacity
          style={{
            margin: 10,
            width: 250,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'yellow',
            borderRadius: 10,
            padding: 20,
            borderWidth: 1,
          }}
          onPress={() => this.props.navigation.navigate('Friends')}
        >
          <Text>Add some friends</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
HomeScreen.contextType = FriendsContext;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
