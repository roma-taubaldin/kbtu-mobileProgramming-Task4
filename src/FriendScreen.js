import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FriendsContext } from './FriendsContext';

class FriendsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add friends here!</Text>
        {this.context.possibleFriends.map((friend, index) => (
          <TouchableOpacity
            key={friend}
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
            onPress={() => this.context.addFriend(index)}
          >
            <Text>{`Add ${friend}`}</Text>
          </TouchableOpacity>
        ))}
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
          onPress={() => this.props.navigation.navigate('Home')}
        >
          <Text>Back to home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
FriendsScreen.contextType = FriendsContext;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default FriendsScreen;
