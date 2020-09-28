import React, { FC, ReactElement } from 'react';
import { Box, Flex } from '@chakra-ui/core';

interface Props {
  cardTitle?: string;
  HeaderComponent?: ReactElement;
}

const MainCard: React.FC<Props> = ({
  children,
  cardTitle,
  HeaderComponent,
}) => {
  return (
    <Flex
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      borderColor="gray.200"
      padding={4}
      width="100%"
      height="100%"
      flexDirection="column"
    >
      <Flex
        mt="1"
        justifyContent="space-between"
        fontWeight="semibold"
        fontSize="medium"
        direction="row"
        as="h3"
      >
        {cardTitle}
        {HeaderComponent !== null ? HeaderComponent : <Box />}
      </Flex>
      {children}
    </Flex>
  );
};

export default MainCard;
