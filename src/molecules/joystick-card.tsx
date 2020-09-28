import React from 'react';
import { Joystick } from 'react-joystick-component';
import { Center } from '@chakra-ui/core';
import { IJoystickUpdateEvent } from 'react-joystick-component/build/lib/Joystick';
import MainCard from '../atoms/main-card';

const JoystickCard: React.FC = () => {
  const handleMove = (data: IJoystickUpdateEvent) => {
    console.log(data);
  };

  return (
    <MainCard cardTitle="Joystick">
      <Center h="80%">
        <Joystick
          size={150}
          baseColor="#CBD5E0"
          stickColor="#718096"
          move={handleMove}
        />
      </Center>
    </MainCard>
  );
};

export default JoystickCard;
