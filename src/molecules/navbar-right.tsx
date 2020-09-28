import React from 'react';
import { Box, Divider, Flex, Tag, useColorMode, Button } from '@chakra-ui/core';

const NavbarRight: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const robotStatus = 'Online';

  return (
    <Box>
      <Flex flexDirection="row" alignItems="center">
        <Tag variant="solid" colorScheme="green" size="lg">
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
