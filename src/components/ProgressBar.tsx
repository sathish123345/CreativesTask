import React from 'react'
import { Box, HStack, Stack, Text } from 'native-base'

interface ProgressProps {
    creativesLength:number;
}

const ProgressBar = (props:ProgressProps) => {

  return (
    <HStack w="full" alignItems={"center"}>
        <Box w="80%" borderWidth={1} m={4} justifyContent={"center"} h={5}>
        <Stack width={`${props.creativesLength*20}%`} h={18} backgroundColor={"primary.500"}></Stack>
    </Box>
    <Text>{props.creativesLength}/5</Text>
    </HStack>
  
  )
}

export default React.memo(ProgressBar)