import React, { FC } from 'react';
import { Box, Grid } from '@chakra-ui/core';
import styled from '@emotion/styled';
import MainCard from '../atoms/main-card';
import SensitivityCard from '../molecules/sensitivity-card';
import JoystickCard from '../molecules/joystick-card';

const CardContainer = styled(Box)``;

// Card data
interface CardsInfo {
  component: FC; // Component in the card
  title: string; // Title of the acrd
  gridArea: string; // Grid area that the card takes up
}

// Generic test component (Temporary)
const TestComponent: React.FC = () => <h1>Test</h1>;

// Cards that are being rendered
const cards: CardsInfo[] = [
  {
    component: TestComponent,
    title: 'Test',
    gridArea: 'leftTop',
  },
  {
    component: TestComponent,
    title: 'Test',
    gridArea: 'leftBottom',
  },
  {
    component: TestComponent,
    title: 'Test',
    gridArea: 'center',
  },
  {
    component: SensitivityCard,
    title: 'Sensitivity',
    gridArea: 'rightTop',
  },
  {
    component: JoystickCard,
    title: 'Joystick',
    gridArea: 'rightBottom',
  },
];

const Home: React.FC = () => (
  <Grid
    p={2}
    gridTemplateAreas="
    'leftTop center center rightTop'
    'leftBottom center center rightBottom'
    "
    gridTemplateRows="300px 300px"
    gridGap="10px"
  >
    {cards.map((card) => (
      <CardContainer gridArea={card.gridArea}>
        <MainCard cardTitle={card.title}>
          <card.component />
        </MainCard>
      </CardContainer>
    ))}
  </Grid>
);

export default Home;
