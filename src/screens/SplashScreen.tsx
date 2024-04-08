import React, {useEffect} from 'react';
import {Box, Text} from 'native-base';
import {NavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {fetchColors} from '../services/home';

interface IProps {
  navigation: any;
}

const SplashScreen = ({navigation}: IProps) => {
  useEffect(() => {
    setTimeout(async () => {
      try {
        let response = await fetchColors();
        navigation.replace('Home', {colors: response?.data?.colors || []});
      } catch (error: any) {
        console.log(error.message);
      }
    }, 3000);

    return () => {};
  }, []);

  return (
    <Box flex={1} alignItems={'center'} justifyContent={'center'}>
      <Text color="gray.800">SplashScreen</Text>
    </Box>
  );
};

export default SplashScreen;
