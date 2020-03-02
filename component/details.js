import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  Image,
  Header
  
} from 'react-native';
import App from '../App';

 class detail extends React.PureComponent{
  constructor(props){
    super(props)
    this.state={
      count:0
    }
  }

  
  render(){
    return(
        <SafeAreaView>
           
          <ScrollView>
            <TouchableOpacity style={styles.card} onPress={this.onPress}>
                <Text style={styles.cardText}>Card title</Text>
                <Image style={styles.cardImage} source={{uri:'https://i.picsum.photos/id/1062/5092/3395.jpg'}}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={this.onPress}>
                <Text style={styles.cardText}>Card title</Text>
                <Image style={styles.cardImage} source={{uri:'https://i.picsum.photos/id/1062/5092/3395.jpg'}}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={this.onPress}>
                <Text style={styles.cardText}>Card title</Text>
                <Image style={styles.cardImage} source={{uri:'https://i.picsum.photos/id/1062/5092/3395.jpg'}}/>
            </TouchableOpacity>
            </ScrollView>
         </SafeAreaView>
  
    );
  }
}



const styles= StyleSheet.create({
 
  card:{
    backgroundColor:'white',
    marginBottom:10,
    marginLeft:'2%',
    width:'100%',
    shadowColor:'#000',
    shadowOpacity:0.2,
    shadowRadius:1,
    shadowOffset:{
      width:3,
      height:3
    }

  },
  cardImage:{
   width:'100%',
   height:200,
   resizeMode:'cover'
  },
  cardText:{
      width:'100%',
    padding:10,
    fontSize:16
  }
});


export default detail;