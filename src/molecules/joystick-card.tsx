import React from 'react';
import { Joystick } from 'react-joystick-component';
import { Center } from '@chakra-ui/core';
import { IJoystickUpdateEvent } from 'react-joystick-component/build/lib/Joystick';

const JoystickCard: React.FC = () => {
  const handleMove = (data: IJoystickUpdateEvent) => {
    console.log(data);
  };

  return (
    <Center h="80%">
      <Joystick
        size={150}
        baseColor="#CBD5E0"
        stickColor="#718096"
        move={handleMove}
      />
    </Center>
  );
};

export default JoystickCard;
