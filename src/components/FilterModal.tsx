import React, { useCallback, useContext, useState } from 'react'
import { Box, Text } from 'native-base'
import Colors from './filter/Colors'
import { CreativeProps } from '../utility/Types';
import { FilterContext } from '../provider/FilterContextProvider';
import Search from './filter/Search';

interface FilterProps {
    colors:Array<string>;
    handleColorFilter(creatives:Array<string>):void;
    creatives:Array<string>;
    filterCreatives:Array<string>;
}

const FilterModal = (props:FilterProps) => { 
    const {filterValue, setFilterValue} = useContext(FilterContext)

    const handleColor = useCallback(
        (color:string)=>{
            var filterColor
            if(filterValue.textValue !== ""){
                if(props.creatives === undefined) return
                filterColor = props.creatives.filter((creative:any)=>{
                    const matchesColor = creative.backgroundColor === color;
            
                    // Check if the creative's title or subtitle includes the search text
                    const matchesText = creative.title.includes(filterValue.textValue) || creative.subtitle.includes(filterValue.textValue);
            
                    // Return true if both conditions are met
                    if(matchesColor && matchesText) return creative
                      
                    })
            }else{
                if(props.creatives === undefined) return
                filterColor = props.creatives.filter((creative:any)=>{
                    if(creative.backgroundColor === color){
                        return creative
                    }
                    })
            }
            setFilterValue((state:any)=>({...state, backgroundColorValue:color}))
           props.handleColorFilter(filterColor)
            
        },
      [],
    )
    

    const handleSearch = useCallback((text:string)=>{
        var filterTextResult

        if(filterValue.backgroundColorValue !== ""){ 
            if(props.creatives === undefined) return
            filterTextResult = props.creatives.filter((creative:any)=>{
                const matchesColor = creative.backgroundColor === filterValue.backgroundColorValue;
                // Check if the creative's title or subtitle includes the search text
                const matchesText = creative.title.includes(text) || creative.subtitle.includes(text);
                // Return true if both conditions are met
                if(matchesColor && matchesText) return creative
            })
        }else{
            if(props.creatives === undefined) return
            filterTextResult = props.creatives.filter((creative:any)=>{
                if(creative.title.includes(text) || creative.subtitle.includes(text)){
                    return creative
                }
            })
        }
       setFilterValue((state:any)=>({...state, textValue:text}))
       props.handleColorFilter(filterTextResult)
        
    },[])

  return (
    <Box m={4}>
      <Text fontSize={"2xl"} fontWeight={"normal"} >Filter By</Text>
      <Colors selectedColor={filterValue?.backgroundColorValue} title="Color"  handleColor={handleColor} colors={props.colors}/>
      <Search value={filterValue?.textValue} handleSearch={handleSearch}/>

    </Box>
  )
}

export default FilterModal