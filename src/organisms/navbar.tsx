import React from 'react';
import { Flex, Heading } from '@chakra-ui/core';
import { NavLink } from 'react-router-dom';
import NavbarRight from '../molecules/navbar-right';

const Navbar: React.FC = () => (
  <Flex
    borderBottom="1px"
    borderBottomColor="gray.300"
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
    <NavbarRight />
  </Flex>
);

export default Navbar;
