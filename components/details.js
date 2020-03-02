import React from 'react';
import { View, Text,Image,Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Details({route}) {
    const title=route.params.title;
    const description=route.params.description;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity>
            <Text>{title}</Text>
            <Text>{description}</Text>
            <Image style={{width:100, height:100}}  source={{uri:"https://i.picsum.photos/id/1019/5472/3648.jpg"}}/>
        </TouchableOpacity>
      </View>
    );
  }

  export default Details;