import React from 'react';
import { View, Text,Image,Button,StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ceil } from 'react-native-reanimated';

function Card({navigation}) {
    return (
      <View >
        <TouchableOpacity style={style.container} onPress={() => navigation.navigate('Details',{title:"Food",description:"Great food"})}>
            <Text style={style.cardText}>Spicy Food</Text>
            <Image style={style.cardImage}  source={{uri:"https://i.picsum.photos/id/1019/5472/3648.jpg"}}/>
        </TouchableOpacity>

        <TouchableOpacity style={style.container} onPress={() => navigation.navigate('Details',{title:"Food"})}>
            <Text style={style.cardText}>Salad Food</Text>
            <Image style={style.cardImage}  source={{uri:"https://i.picsum.photos/id/1019/5472/3648.jpg"}}/>
        </TouchableOpacity>
      </View>

      
        
     
    );
  }

const style=StyleSheet.create({
    container:{
      
        margin:10
    },  
    cardImage:{
        width:'100%',
        height:200
    },
    cardText:{
        fontSize:16,
        fontWeight:"bold"
    }


})


  export default Card;