import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import ROSLIB from 'roslib';

export type Message = {
  severity: 'error' | 'info';
  text: string;
  time: Date;
};

type TRosContext = {
  ros: {
    ROS: ROSLIB.Ros | null;
    url: string;
    isConnected: boolean;
    topics: Array<ROSLIB.Topic>;
    messages: Array<Message>;
  };
  setROS: Dispatch<SetStateAction<TRosContext>>;
};

const initialContext: TRosContext = {
  ros: {
    ROS: null,
    url: 'ws://localhost:9090',
    isConnected: false,
    topics: [],
    messages: [],
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
