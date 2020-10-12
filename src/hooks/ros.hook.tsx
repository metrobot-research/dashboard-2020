import React, { useContext, useEffect } from 'react';
import ROSLIB from 'roslib';
import { RosContext, RosProvider } from './ROSContext';

// ROS Hook that lets others use ROS websocket connection
// returns some useful functions & values
function useROS() {
  const { ros, setROS } = useContext(RosContext);

  useEffect(() => {
    if (!ros.isConnected) {
      if (ros.autoconnect) {
        console.log('autoconnecting');
      }
    }
  });

  function changeUrl(newUrl: string) {
    setROS((r: any) => ({ ...r, url: newUrl }));
  }

  function getTopics() {
    const topicsPromise = new Promise((resolve, reject) => {
      if (ros.ROS === null) {
        throw Error;
      }
      ros.ROS.getTopics(
        (topics: string[]) => {
          const topicList = topics.map((topicName) => {
            if (ros.ROS) {
              return ros.ROS.getTopicType(topicName, (topicType: string) => {
                return {
                  path: topicName,
                  msgType: topicType,
                  type: 'topic',
                };
              });
            }
            return '';
          });
          resolve({
            topics: topicList,
          });
          reject(Error('Error'));
        },
        (message: string) => {
          console.error('Failed to get topic', message);
        }
      );
    });
    topicsPromise.then((topics) => setROS((r) => ({ ...r, topics })));
    return ros.topics;
  }

  function createListener(
    topic: string,
    msgType: string,
    compressionType: string
  ) {
    if (ros.ROS === null) {
      throw Error;
    }
    const newListener = new ROSLIB.Topic({
      ros: ros.ROS ?? ros.ROS,
      name: topic,
      messageType: msgType,
      compression: compressionType,
    });

    // eslint-disable-next-line no-restricted-syntax
    for (const listener in ros.listeners) {
      if (newListener.name === ros.listeners[listener].name) {
        console.log(`Listener already available in ros.listeners[${listener}]`);
        return ros.listeners[listener];
      }
    }
    ros.listeners.push(newListener);
    console.log('Listener created');
    return newListener;
  }

  const handleConnect = () => {
    try {
      ros.ROS = new ROSLIB.Ros({
        url: ros.url,
      });

      if (ros.ROS) {
        ros.ROS.on('connection', () => {
          setROS((r) => ({ ...r, isConnected: true }));
          getTopics();
        });

        ros.ROS.on('error', (error) => {
          console.log(error);
        });

        ros.ROS.on('closed', () => {
          console.log('closed');
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleDisconnect = () => {
    try {
      if (ros.ROS !== null) {
        ros.ROS.close();
      }
      setROS((r) => ({ ...r, isConnected: false }));
      setROS((r) => ({ ...r, topics: [] }));
    } catch (e) {
      console.log(e);
    }
  };

  function toggleConnection() {
    if (ros.isConnected) {
      handleDisconnect();
    } else if (!ros.isConnected) {
      handleConnect();
    }
  }
  return {
    toggleConnection,
    changeUrl,
    getTopics,
    createListener,
    ros: ros.ROS,
    isConnected: ros.isConnected,
    url: ros.url,
    topics: ros.topics,
    listeners: ros.listeners,
  };
}

// ROS Component to manage ROS websocket connection and provide
// it to children props
const ROS: React.FC = ({ children }) => {
  return <RosProvider>{children}</RosProvider>;
};

export { useROS, ROS };
