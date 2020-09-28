import React, { useState } from 'react';
import { Select, Box, Image, Flex } from '@chakra-ui/core';
import MainCard from '../atoms/main-card';

const CameraCard: React.FC = () => {
  const cameras = ['camera-1', 'camera-2'];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentCamera, setCurrentCamera] = useState(cameras[0]);

  const onChangeCamera = (d: any) => {
    console.log(d.currentTarget.value);
    setCurrentCamera(d.currentTarget.value);
  };

  const selectHeader = (
    <Select size="sm" width="200px" onChange={onChangeCamera}>
      {cameras.map((a) => (
        <option value={a}>{a}</option>
      ))}
    </Select>
  );

  return (
    <MainCard cardTitle="Camera" HeaderComponent={selectHeader}>
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
