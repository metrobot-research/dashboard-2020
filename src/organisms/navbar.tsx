import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/core';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => (
  <Flex
    borderWidth="1px"
    w="100%"
    p={4}
    justifyContent="space-between"
    alignItems="center"
  >
    <Flex flexDirection="row" justifyContent="center" alignItems="center">
      <NavLink to="/">
        <Heading size="lg">Metrobot</Heading>
      </NavLink>
    </Flex>
    <Box>Other info</Box>
  </Flex>
);

export default Navbar;
