import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import RootNavigator from './RootNavigator';

const index = () => {
 
  return (
    <NavigationContainer >
       <RootNavigator/>
    </NavigationContainer> 
   
  )
}

export default index