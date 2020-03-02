
import React from 'react';
import Card from './component/Card'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  Image
  
} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import detail from './component/details';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

 class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      
    }
  }

  // onPress=()=>{
  //   this.setState({
  //     count:this.state.count+1
  //   })
  // }
  

  render(){
    return(
      <View style={styles.container}>
       
          <Card/>
      </View>
    );
  }
}



const styles= StyleSheet.create({
  container:{
    marginTop:20,
    width:'100%',
    backgroundColor:'white'
  }
});

export default App;
