/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
 
  StatusBar,
  useColorScheme,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { NativeBaseProvider, Box } from "native-base";
import Navigation from './src/navigators'
import { theme } from './src/constants/Theme';
import FilterContextProvider, { FilterContext } from './src/provider/FilterContextProvider';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <FilterContextProvider>

     <Navigation/>
      </FilterContextProvider>
     </NativeBaseProvider>
  );
}


export default App;
