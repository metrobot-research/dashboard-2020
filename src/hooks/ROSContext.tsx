import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import ROSLIB from 'roslib';

type RosMessage = {
  severity: 'error' | 'info';
  text: string;
};

type TRosContext = {
  ros: {
    ROS: ROSLIB.Ros | null;
    url: string;
    isConnected: boolean;
    autoconnect: boolean;
    topics: Array<string>;
    listeners: Array<ROSLIB.Topic>;
  };
  setROS: Dispatch<SetStateAction<TRosContext>>;
};

const initialContext: TRosContext = {
  ros: {
    ROS: null,
    url: 'ws://localhost:9090',
    isConnected: false,
    autoconnect: false,
    topics: [],
    listeners: [],
  },
  setROS: (): void => {
    throw new Error('setRos function must be overridden');
  },
};

const RosContext: React.Context<TRosContext> = createContext<TRosContext>(
  initialContext
);

const RosProvider: React.FC = ({ children }) => {
  const [contextState, setROS] = useState<TRosContext>(initialContext);

  return (
    <RosContext.Provider value={{ ...contextState, setROS }}>
      {children}
    </RosContext.Provider>
  );
};

export { RosContext, RosProvider };
