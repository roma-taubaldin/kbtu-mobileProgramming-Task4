import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import FriendsScreen from './src/FriendScreen';
import { FriendsContext } from './src/FriendsContext';
const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      possibleFriends: ['Sofiya', 'Arthur', 'Nurlybek'],
      currentFriends: [],
    };
  }

  addFriend = (index) => {
    const { currentFriends, possibleFriends } = this.state;
    const addedFriend = possibleFriends.splice(index, 1);

    currentFriends.push(addedFriend);

    this.setState({
      currentFriends,
      possibleFriends,
    });
  };

  render() {
    return (
      <FriendsContext.Provider
        value={{
          currentFriends: this.state.currentFriends,
          possibleFriends: this.state.possibleFriends,
          addFriend: this.addFriend,
        }}
      >
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Friends" component={FriendsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FriendsContext.Provider>
    );
  }
}

export default App;
