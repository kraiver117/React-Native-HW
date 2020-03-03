import React from 'react';
import { View, Text,Image,Button,StyleSheet, ImageBackground } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { ceil } from 'react-native-reanimated';

function Card({navigation}) {
    return (
      <ImageBackground source={{uri:"https://www.infobae.com/new-resizer/SLKfej7KEbCFR7-vHTLCQW8TPeI=/750x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/08/01122831/tendencias-recetas-destacada.jpg"}} style={{width: '100%', height: '100%'}}>
        <ScrollView>
          <TouchableOpacity style={style.container} onPress={() => navigation.navigate('Details',{title:"Pizza",
          description:"La pizza Mexicana es preparada con carnes frias, queso y aderezo al gusto para deleitar tu paladar.",
          image:"https://image.freepik.com/vector-gratis/elegante-fondo-blanco-lineas-brillantes_1017-17580.jpg",
          imageFood:"https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg",
          precio:"$150.00"})}>
              <Text style={style.cardText}>Pizza</Text>
              <Image style={style.cardImage}  source={{uri:"https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg"}}/>
          </TouchableOpacity>

          <TouchableOpacity style={style.container} onPress={() => navigation.navigate('Details',{title:"Comida China",description:"Pollo agridulce con verduras y especias para deleitar tu paladar.", 
          image:"https://image.freepik.com/vector-gratis/elegante-fondo-blanco-lineas-brillantes_1017-17580.jpg",
          imageFood:"https://i.ndtvimg.com/i/2016-06/chinese-625_625x350_81466064119.jpg",
          precio:"$100.00"})}>
              <Text style={style.cardText}>Comida china</Text>
              <Image style={style.cardImage}  source={{uri:"https://i.ndtvimg.com/i/2016-06/chinese-625_625x350_81466064119.jpg"}}/>
          </TouchableOpacity>

          <TouchableOpacity style={style.container} onPress={() => navigation.navigate('Details',{title:"Thai",description:"Excelente comida thailandesa, la mejor de la region",
          image:"https://image.freepik.com/vector-gratis/elegante-fondo-blanco-lineas-brillantes_1017-17580.jpg",
          imageFood:"https://i2.wp.com/www.kwanhomsai.com/wp-content/uploads/2016/09/Pad-Thai-2.0-Feath1.jpg?w=790",
          precio:"$120.00"})}>
              <Text style={style.cardText}>Thai</Text>
              <Image style={style.cardImage}  source={{uri:"https://i2.wp.com/www.kwanhomsai.com/wp-content/uploads/2016/09/Pad-Thai-2.0-Feath1.jpg?w=790"}}/>
          </TouchableOpacity>
          </ScrollView>
      </ImageBackground>

      
        
     
    );
  }

const style=StyleSheet.create({
    container:{
        backgroundColor:'white',
        margin:20,
        marginLeft:10,
        borderRadius:20
    },  
    cardImage:{
        width:'96%',
        height:200,
        margin:8,
        borderRadius:20
    },
    cardText:{
        color:"red",
        marginTop:5,
        marginLeft:20,
        fontSize:20,
        fontWeight:"bold"
    }


})


  export default Card;