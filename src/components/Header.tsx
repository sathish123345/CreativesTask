import React from 'react'
import { Box, Icon, Text } from 'native-base';




const Header = () => {

  return (
    <Box p={4} borderBottomWidth={0.5} >
    <Text fontSize={20}  fontWeight={"medium"} >Creatives</Text>
  </Box>
  )
}

export default React.memo(Header)