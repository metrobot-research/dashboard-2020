import React from 'react';
import { Joystick } from 'react-joystick-component';
import { Center } from '@chakra-ui/core';
import { IJoystickUpdateEvent } from 'react-joystick-component/build/lib/Joystick';
import ROSLIB from 'roslib';
import MainCard from '../atoms/main-card';
import { useROS } from '../hooks/ros.hook';

let movementTopic: ROSLIB.Topic;

const JoystickCard: React.FC = () => {
  const { getTopic, isConnected } = useROS();

  if (isConnected && movementTopic == null) {
    movementTopic = getTopic('/cmd_vel', 'geometry_msgs/Twist');
  }

  const handleMove = (data: IJoystickUpdateEvent): void => {
    const rosTwistMessage: ROSLIB.Message = {
      linear: { x: data.y, y: 0.0, z: 0.0 },
      angular: { x: 0.0, y: 0.0, z: data.x },
    };
    movementTopic.publish(rosTwistMessage);
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
