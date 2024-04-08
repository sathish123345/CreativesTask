import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderDrawer from '../components/Header';


interface IProps{
  navigation:any;
  route:{name:string;
    key:string;};

}

const About = (props:IProps) => {
    let {name} = props.route


  
  return (
<View style={{flex:1}}>
<HeaderDrawer navigation={props.navigation}/>

<View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",flex:1}}>
    <Text>{name}</Text>
</View>
</View>
  )
}

export default About