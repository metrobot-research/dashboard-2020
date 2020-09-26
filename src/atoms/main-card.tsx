import React from 'react';
import { Box } from '@chakra-ui/core';

interface Props {
  cardTitle: string;
}

const MainCard: React.FC<Props> = ({ children, cardTitle }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      borderColor="gray.200"
      padding={4}
      margin={2}
      width="100%"
      height="100%"
    >
      <Box mt="1" fontWeight="semibold" fontSize="medium" as="h3">
        {cardTitle}
      </Box>
      {children}
    </Box>
  );
};

export default MainCard;
