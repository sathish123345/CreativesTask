import { Box, Input, Text } from 'native-base'
import React from 'react'
interface IProps {
  handleSearch(text:string):void;
  value:string;
}

const Search = (props:IProps) => {

  return (
  <Box>
    <Text>Title/Subtitle</Text>
    <Input value={props.value} onChangeText={props.handleSearch} placeholder='Search' mt={3} focusable={false} />
  </Box>
  )
}

export default React.memo(Search)