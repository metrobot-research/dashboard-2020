import React from 'react';
import {
  Slider,
  SliderTrack,
  SliderThumb,
  SliderFilledTrack,
  Box,
  Heading,
  Center,
} from '@chakra-ui/core';

const SensitivityCard: React.FC = () => {
  return (
    <Box>
      <Box h={10} />
      <Slider defaultValue={50} mb={2}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Center>
        <Heading size="sm" fontWeight="regular">
          Forward/Backwards
        </Heading>
      </Center>
      <Box h={5} />
      <Slider defaultValue={50} mb={2}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Center>
        <Heading size="sm" fontWeight="regular">
          Rotational
        </Heading>
      </Center>
    </Box>
  );
};

export default SensitivityCard;
