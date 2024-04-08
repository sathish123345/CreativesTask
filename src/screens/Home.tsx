import {FlatList, Platform, View} from 'react-native';
import React, {useCallback, useContext, useRef, useState} from 'react';
import {Box, Button, Icon, ScrollView, Text, VStack} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

import FilterModal from '../components/FilterModal';
import AddCreative from '../components/AddCreative';
import ProgressBar from '../components/ProgressBar';
import Header from '../components/Header';
import {height, width} from '../constants/Theme';
import Card from '../components/Card';
import { CreativeProps } from '../utility/Types';
import { FilterContext } from '../provider/FilterContextProvider';

interface IProps {
  navigation: any;
  route: {
    name: string;
    params: {
      colors: Array<string>;
    };
    key: string;
  };
}


interface RenderItemProps {
  item: {
    title: string;
    subtitle: string;
    backgroundColor: string;
  };
  index: number;
}

const Home = (props: IProps) => {
  const {colors} = props.route.params;

  const {filterValue, setFilterValue} = useContext(FilterContext)

  const [creatives, setCreatives] = useState([]);
  const [creativeModalStatus, setCreativeModalStatus] = useState(false);
  const [filterCreatives, setFilterCreatives] = useState([])


  const keyExtractor = (_: any, index: number) => index.toString();

  //memorized flatList render UI component
  const renderItem = ({item, index}: RenderItemProps) => <Card item={item} index={index} />
  

  //modal close function
  const handleCloseCreativeModal = useCallback(() => {
    setCreativeModalStatus(false);
  }, []);

  //filter result function
  const handleFilterResult = (creativesFilter:Array<CreativeProps>) => {
    setFilterCreatives(creativesFilter)
  };

  //add creative button trigger modal function
  const handleAddCreativeButton = () => {
    setFilterValue(state=>({...state,backgroundColorValue:""}))
    setCreativeModalStatus(true);
  };

  //creative object added to the creative state and modal will be closed
  const handleAddCreative = useCallback((creative: CreativeProps) => {
    setCreatives(state => [creative, ...state]);
    setCreativeModalStatus(false);
  }, []);

  return (
    <View  style={{flex: 1}}>
      <Header />
      <FilterModal filterCreatives={filterCreatives}  creatives={creatives} handleColorFilter={handleFilterResult} colors={colors} />
      <ProgressBar creativesLength={creatives.length} />
      <Button
        onPress={handleAddCreativeButton}
        h={12}
        w={width / 2}
        m={4}
        isDisabled={ 5 <= creatives.length || creativeModalStatus}
        leftIcon={<Icon name="add" as={Ionicons} size={30} />}>
        Add Creative
      </Button>
      <AddCreative
        handleAddCreative={handleAddCreative}
        visible={creativeModalStatus}
        onClose={handleCloseCreativeModal}
        colors={colors}
      />
      <FlatList
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={Platform.OS === 'android' ? true : false}
        updateCellsBatchingPeriod={50}
        maxToRenderPerBatch={8}
        initialNumToRender={8}
        windowSize={100}
        data={filterValue.backgroundColorValue != "" || filterValue.textValue != "" ? filterCreatives: creatives}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
  
    </View>
  );
};

export default Home;
