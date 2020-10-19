import React from 'react';
import { Box, Text } from '@chakra-ui/core';
import MainCard from '../atoms/main-card';
import { useROS } from '../hooks/ros.hook';
import { Message } from '../hooks/ROSContext';

const logLevelToColor = (logLevel: string): string => {
  switch (logLevel) {
    case 'info':
      return 'gray.400';
    case 'warn':
      return 'yellow.400';
    case 'error':
      return 'red.500';
    default:
      return 'gray.300';
  }
};

const LogsCard: React.FC = () => {
  const { messages } = useROS();

  return (
    <MainCard cardTitle="Logs">
      <Box h={2} />
      <Box
        backgroundColor="gray.200"
        p={2}
        borderRadius="lg"
        h="100%"
        overflow="scroll"
      >
        {messages.map((message: Message, index: number) => (
          <Text
            fontSize="xs"
            color={logLevelToColor(message.severity)}
            key={message.text + index}
          >
            {message.time.toLocaleTimeString()} : {message.text}
          </Text>
        ))}
      </Box>
    </MainCard>
  );
};

export default LogsCard;
