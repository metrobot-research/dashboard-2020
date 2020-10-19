import React, { useContext } from 'react';
import ROSLIB from 'roslib';
import { Message, RosContext, RosProvider } from './ROSContext';

// ROS Hook that lets others use ROS websocket connection
// returns some useful functions & values
function useROS(): Record<string, any> {
  const { ros, setROS } = useContext(RosContext);

  const addMessage: Function = (severity: 'error' | 'info', text: string) => {
    if (ros.messages[ros.messages.length - 1]?.text !== text) {
      const msg: Message = {
        severity,
        text,
        time: new Date(),
      };
      setROS((r) => ({
        ...r,
        ros: {
          ...r.ros,
          messages: [...r.ros.messages, msg],
        },
      }));
    }
  };

  const setConnectionState: Function = (isConnected: boolean) => {
    if (ros.isConnected !== isConnected)
      setROS((r) => ({
        ...r,
        ros: {
          ...r.ros,
          isConnected,
        },
      }));
  };

  function changeUrl(newUrl: string): void {
    setROS((r) => ({ ...r, url: newUrl }));
  }

  // function createPublisher(
  //   topic: string,
  //   msgType: string
  // ) {
  //   if (ros.ROS === null) {
  //     throw Error
  //   }
  // }

  const getTopic = (topic: string, msgType: string): ROSLIB.Topic => {
    if (ros.ROS === null) {
      throw Error('ROS Not Available!');
    }
    const newTopic = new ROSLIB.Topic({
      ros: ros.ROS,
      name: topic,
      messageType: msgType,
    });

    // eslint-disable-next-line no-restricted-syntax
    for (const t in ros.topics) {
      if (newTopic.name === ros.topics[t].name) {
        // console.log(`Topic already available in ros.topic[${t}]`);
        return ros.topics[t];
      }
    }
    ros.topics.push(newTopic);
    return newTopic;
  };

  const handleConnect = (): void => {
    try {
      ros.ROS = new ROSLIB.Ros({
        url: ros.url,
      });

      if (ros.ROS) {
        ros.ROS.on('connection', () => {
          if (!ros.isConnected) {
            setConnectionState(true);
            addMessage('info', 'ROS connected');
          }
        });

        ros.ROS.on('error', (error) => {
          if (ros.isConnected) {
            addMessage('error', error.toString());
            setConnectionState(false);
          }
        });

        ros.ROS.on('close', () => {
          setConnectionState(false);
          addMessage('info', 'ROS connection closed');
        });
      }
    } catch (e) {
      addMessage('error', `Error connecting to ROS: ${e.toString()}`);
    }
  };

  const handleDisconnect = () => {
    try {
      if (ros.ROS !== null) {
        ros.ROS.close();
      }
      setROS((r) => ({ ...r, isConnected: false }));
    } catch (e) {
      // console.log(e);
    }
  };

  const toggleConnection = (): void => {
    if (ros.isConnected) {
      handleDisconnect();
    } else if (!ros.isConnected) {
      handleConnect();
    }
  };

  return {
    toggleConnection,
    changeUrl,
    getTopic,
    handleConnect,
    ros: ros.ROS,
    isConnected: ros.isConnected,
    url: ros.url,
    listeners: ros.topics,
    messages: ros.messages,
  };
}

// ROS Component to manage ROS websocket connection and provide
// it to children props
const ROS: React.FC = ({ children }) => {
  return <RosProvider>{children}</RosProvider>;
};

export { useROS, ROS };
