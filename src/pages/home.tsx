import React, { FC } from 'react';
import { Box, Grid } from '@chakra-ui/core';
import styled from '@emotion/styled';
import MainCard from '../atoms/main-card';
import SensitivityCard from '../molecules/sensitivity-card';
import JoystickCard from '../molecules/joystick-card';
import CameraCard from '../molecules/camera-card';
import LogsCard from '../molecules/logs-card';
import { useROS } from '../hooks/ros.hook';
import { useMountEffect } from '../utils/utils';

const CardContainer = styled(Box)``;

// Card data
interface CardsInfo {
  component: FC; // Component in the card
  gridArea: string; // Grid area that the card takes up
}

// Cards that are being rendered
const cards: CardsInfo[] = [
  {
    component: MainCard,
    gridArea: 'leftTop',
  },
  {
    component: LogsCard,
    gridArea: 'leftBottom',
  },
  {
    component: CameraCard,
    gridArea: 'center',
  },
  {
    component: SensitivityCard,
    gridArea: 'rightTop',
  },
  {
    component: JoystickCard,
    gridArea: 'rightBottom',
  },
];

const Home: React.FC = () => {
  const { handleConnect, isConnected } = useROS();

  useMountEffect(() => {
    if (!isConnected) {
      handleConnect();
    }
  });

  return (
    <Grid
      p={2}
      gridTemplateAreas="
  'leftTop center center rightTop'
  'leftBottom center center rightBottom'
  "
      gridTemplateColumns="1fr 1fr 1fr 1fr"
      gridTemplateRows="300px 300px"
      gridGap="10px"
    >
      {cards.map((card) => (
        <CardContainer gridArea={card.gridArea} key={card.component.toString()}>
          <card.component />
        </CardContainer>
      ))}
    </Grid>
  );
};

export default Home;
