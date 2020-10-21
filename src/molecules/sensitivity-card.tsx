import React from 'react';
import { Box, Heading, Center } from '@chakra-ui/core';
import ROSLIB from 'roslib';
import MainCard from '../atoms/main-card';
import { useROS } from '../hooks/ros.hook';
import SensitivitySlider from '../atoms/sensitivity-slider';

const SensitivityCard: React.FC = () => {
  const { getTopic, isConnected } = useROS();
  let sensitivityTopic: ROSLIB.Topic;

  if (isConnected) {
    sensitivityTopic = getTopic('/sensitivity', 'std_msgs/UInt8');
  }

  const sendSensitivityUpdate = (sensitivity: number): void => {
    if (isConnected) {
      const sensitivityMessage: ROSLIB.Message = {
        data: sensitivity,
      };
      sensitivityTopic.publish(sensitivityMessage);
    }
  };

  return (
    <MainCard cardTitle="Joystick" enabled={isConnected}>
      <Box h={10} />
      <SensitivitySlider onChange={sendSensitivityUpdate} />
      <Center>
        <Heading size="sm" fontWeight="regular">
          Forward/Backwards
        </Heading>
      </Center>
      <Box h={5} />
      <SensitivitySlider onChange={sendSensitivityUpdate} />
      <Center>
        <Heading size="sm" fontWeight="regular">
          Rotational
        </Heading>
      </Center>
    </MainCard>
  );
};

export default SensitivityCard;
