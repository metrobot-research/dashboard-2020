import React from 'react';
import { Box, Divider, Flex, Tag, useColorMode, Button } from '@chakra-ui/core';
import { useROS } from '../hooks/ros.hook';

const NavbarRight: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isConnected, toggleConnection } = useROS();
  const robotStatus = 'Online';

  return (
    <Box>
      <Flex flexDirection="row" alignItems="center">
        <Tag
          variant="solid"
          colorScheme={isConnected ? 'green' : 'red'}
          size="lg"
          onClick={toggleConnection}
        >
          Robot {robotStatus}
        </Tag>
        <Box width={3} />
        <Divider orientation="vertical" />
        <Box width={3} />
        <Button onClick={toggleColorMode} size="sm">
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
        <Box width={3} />
        <Divider orientation="vertical" />
        <Box width={3} />
      </Flex>
    </Box>
  );
};

export default NavbarRight;
