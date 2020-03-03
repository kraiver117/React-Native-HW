import * as React from 'react';
import { Button,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,StackView } from '@react-navigation/stack';
import Card from './components/card'
import Details from './components/details';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Card} options={{ title: '365 Restaurant',headerStyle: {
          backgroundColor: 'red',},headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            margin:60
          },headerRight: () => (
            // <Button
            //   onPress={() => alert('This is a button!')}
            //   title="Information"
            //   color="red"
            // />
            
            <Image source={require('./icons/cart.png')} style={{width:50, height:40, margin:10}}></Image>
          ),
          headerLeft: () => (
            <Image source={require('./icons/back.png')} style={{width:50, height:40, margin:10}}></Image>
          ),
        }} />
        <Stack.Screen name="Details" component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;