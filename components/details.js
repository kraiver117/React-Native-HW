import React from 'react';
import { View, Text,Image,Button,StyleSheet,FlatList, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Details({route,navigation}) {
    const title=route.params.title;
    const description=route.params.description;
    const precio=route.params.precio;
    const image=route.params.image;
    const imageFood=route.params.imageFood;
  
    return (
        <ImageBackground style={{width:'100%',height:'100%'}} source={{uri:image}}>
           <TouchableOpacity>
              <Text style={style.title}>{title}</Text>
              <Text style={style.description}>{description}</Text>
              <Image  style={style.imageFood} source={{uri:imageFood}}></Image>
              <Button title="Comprar" color="red"  onPress={() => navigation.navigate('Home')}/>
              <Text style={style.precio}>Precio: {precio}</Text>
          </TouchableOpacity>
        </ImageBackground>
         
       
 
    );
  }

  const style=StyleSheet.create({
    title:{
      fontSize:40,
      color:'red',
      textAlign:'center'
    },
    description:{
      color:'black',
      fontSize:30,
      textAlign:'justify',
      margin:10
    },
    precio:{
      fontSize:30,
      margin:10,
      textAlign:'right'
    },
    imageFood:{
      width:'100%',
      height:250,
      margin:18
    }
  })


  export default Details;