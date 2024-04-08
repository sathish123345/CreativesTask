import React, {useState} from 'react';
import {Box, Button, HStack, Icon, Input, Text} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Modal} from 'react-native';

//components
import Colors from './filter/Colors';
import Snackbar from 'react-native-snackbar';

interface IProps {
  colors: Array<string>;
  visible: boolean;
  onClose(): void;
  handleAddCreative(creative: {
    title: string;
    subtitle: string;
    backgroundColor: string;
  }): void;
}

const AddCreative = (props: IProps) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleDone = () => {

    if(title == "" || subtitle == "" || backgroundColor == ""){
        Snackbar.show({
            text: 'Please fill the all fields',
            duration: Snackbar.LENGTH_SHORT,
          });
        return

    }
    let creativeObject = {
      title,
      subtitle,
      backgroundColor,
    };
    props.handleAddCreative(creativeObject);
    setTitle('');
    setSubtitle('');
    setBackgroundColor('');
  };

  const handleColor = (color: string) => {
    setBackgroundColor(color);
  };

  return (
    <Modal visible={props.visible} transparent={true}>
      <Box
        background={'white'}
        position={'absolute'}
        bottom={0}
        height={'50%'}
        p={4}
        w="full">
        <HStack justifyContent={'space-between'} my={3}>
          <Text fontSize={18}>Creative Creation</Text>
          <Icon name="close" onPress={props.onClose} as={Ionicons} size={25} />
        </HStack>
        <Input
          value={title}
          onChangeText={setTitle}
          placeholder="Title"
          mt={3}
          focusable={false}
        />
        <Input
          value={subtitle}
          onChangeText={setSubtitle}
          placeholder="Subtitle"
          mt={3}
          focusable={false}
        />
        <Colors
          title="Background color"
          handleColor={handleColor}
          selectedColor={backgroundColor}
          colors={props.colors}
        />
        <Button h="12" onPress={handleDone}>
          Done
        </Button>
      </Box>
    </Modal>
  );
};

export default React.memo(AddCreative);
