import React, { useState } from 'react';
import { Select, Box, Image } from '@chakra-ui/core';
import ROSLIB from 'roslib';
import MainCard from '../atoms/main-card';
import { useROS } from '../hooks/ros.hook';

const CameraCard: React.FC = () => {
  const cameras = [1, 2];
  let cameraTopic: ROSLIB.Topic;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentCamera, setCurrentCamera] = useState(cameras[0]);
  const { getTopic, isConnected } = useROS();

  if (isConnected) {
    cameraTopic = getTopic('/camera', 'std_msgs/UInt8');
  }

  const onChangeCamera = (d: any): void => {
    setCurrentCamera(d.currentTarget.value);
    if (isConnected) {
      const cameraSelectMessage: ROSLIB.Message = {
        data: d.currentTarget.value,
      };
      cameraTopic.publish(cameraSelectMessage);
    }
  };

  const selectHeader = (
    <Select
      size="sm"
      width="200px"
      onChange={onChangeCamera}
      isDisabled={!isConnected}
    >
      {cameras.map((a, index) => (
        <option value={a} key={a + index}>
          Camera {a}
        </option>
      ))}
    </Select>
  );

  return (
    <MainCard
      cardTitle="Camera"
      HeaderComponent={selectHeader}
      enabled={isConnected}
    >
      <Box h={2} />
      <Image
        mx="auto"
        h="90%"
        borderRadius="md"
        src="https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.syracuse.com/home/syr-media/width2048/img/news/photo/2018/02/28/sidewalk-legal-a04a4ced40facf7d.jpg"
      />
      <Box h={2} />
    </MainCard>
  );
};

export default CameraCard;
