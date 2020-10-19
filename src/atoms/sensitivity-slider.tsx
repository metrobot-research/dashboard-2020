import React from 'react';
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/core';

type Props = {
  onChange(value: number): void;
  defaultValue?: number;
};

const SensitivitySlider: React.FC<Props> = ({
  onChange,
  defaultValue = 50,
}: Props) => (
  <Slider defaultValue={defaultValue} mb={2} onChange={onChange}>
    <SliderTrack>
      <SliderFilledTrack />
    </SliderTrack>
    <SliderThumb />
  </Slider>
);

export default SensitivitySlider;
