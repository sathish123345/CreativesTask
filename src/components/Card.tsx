import React from 'react';
import {Box, Text} from 'native-base';

interface ItemProps {
  item: {
    title: string;
    subtitle: string;
    backgroundColor: string;
  };
  index: number;
}

const Card = ({item, index}: ItemProps) => {

  return (
    <Box
      p={2}
      height={100}
      m={4}
      justifyContent={'center'}
      key={index}
      bgColor={item.backgroundColor || 'white'}>
      <Text fontSize={'2xl'} fontWeight={'medium'}>
        {item.title}
      </Text>
      <Text fontSize={'lg'} fontWeight={'normal'}>
        {item.subtitle}
      </Text>
    </Box>
  );
};

export default React.memo(Card);
