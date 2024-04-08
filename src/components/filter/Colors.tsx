import React from 'react'
import { Box, Pressable, Text } from 'native-base'
interface ColorsProps {
    colors:Array<string>,
    handleColor(color:string):void;
    title:string;
    selectedColor:string;
}

const Colors = (props:ColorsProps) => {
  

  return (
    <Box my={3}>
      <Text fontWeight={"hairline"}>{props.title}</Text>
      <Box flexDirection={"row"} flexWrap={"wrap"}>
        {props.colors !== undefined && props.colors.map((color:string,index:number)=>(
    <Pressable onPress={()=> props.handleColor(color)} borderWidth={props.selectedColor == color ? 2 : 0} key={index} ml={ index == 0 ? 0: 6} my={3} w={8} h={8} rounded={"full"} backgroundColor={color}/>
        ))} 
      </Box>
    </Box>
  )
}

export default React.memo(Colors)