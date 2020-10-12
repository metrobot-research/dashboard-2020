import React from 'react';
import { Box, Text } from '@chakra-ui/core';
import MainCard from '../atoms/main-card';

interface Log {
  text: string;
  logLevel: 'info' | 'warn' | 'error';
}

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
  const logs: Log[] = [
    {
      text:
        "Apr 11 10:32:22 router1 mgd[3606]: UI_DBASE_LOGOUT_EVENT: User 'barbara' exiting configuration mode",
      logLevel: 'info',
    },
    {
      text:
        "Apr 11 10:32:22 router1 mgd[3606]: UI_DBASE_LOGOUT_EVENT: User 'barbara' exiting configuration mode",
      logLevel: 'info',
    },
    {
      text:
        'Apr 11 11:46:37 router1 mib2d[2905]: SNMP_TRAP_LINK_DOWN: ifIndex 82, ifAdminStatus up(1), ifOperStatus down(2), ifName at-1/0/0',
      logLevel: 'error',
    },
    {
      text:
        'Apr 11 11:46:37 router1 mib2d[2905]: SNMP_TRAP_LINK_DOWN: ifIndex 82, ifAdminStatus up(1), ifOperStatus down(2), ifName at-1/0/0',
      logLevel: 'warn',
    },
    {
      text:
        "Apr 11 10:32:22 router1 mgd[3606]: UI_DBASE_LOGOUT_EVENT: User 'barbara' exiting configuration mode",
      logLevel: 'info',
    },
    {
      text:
        'Apr 11 11:46:37 router1 mib2d[2905]: SNMP_TRAP_LINK_DOWN: ifIndex 82, ifAdminStatus up(1), ifOperStatus down(2), ifName at-1/0/0',
      logLevel: 'error',
    },
    {
      text:
        'Apr 11 11:46:37 router1 mib2d[2905]: SNMP_TRAP_LINK_DOWN: ifIndex 82, ifAdminStatus up(1), ifOperStatus down(2), ifName at-1/0/0',
      logLevel: 'warn',
    },
  ];

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
        {logs.map((log, index) => (
          <Text
            fontSize="xs"
            color={logLevelToColor(log.logLevel)}
            key={log.text + index}
          >
            {log.text}
          </Text>
        ))}
      </Box>
    </MainCard>
  );
};

export default LogsCard;
