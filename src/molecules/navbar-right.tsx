import React from 'react';
import { Box, Divider, Flex, Switch, Tag, IconButton } from '@chakra-ui/core';
import { FaEllipsisV } from 'react-icons/fa';

const NavbarRight: React.FC = () => (
  <Box>
    <Flex flexDirection="row" alignItems="center">
      <Tag colorScheme="green">Robot Online</Tag>
      <Box width={3} />
      <Divider orientation="vertical" />
      <Box width={3} />
      <p>Dark Mode</p>
      <Switch size="lg" colorScheme="blue" />
      <Box width={3} />
      <Divider orientation="vertical" />
      <Box width={3} />
      <IconButton
        aria-label="Icon Button"
        colorScheme="transparent"
        icon={<FaEllipsisV color="black" />}
      />
    </Flex>
  </Box>
);

export default NavbarRight;
