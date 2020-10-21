# metrobot_dashboard
React JS Dashboard for the Metrobot research project. 

## Running the Code

The dashboard communicates with ROS via the [ros2-web-bridge](https://github.com/RobotWebTools/ros2-web-bridge/) and [roslibjs](https://github.com/RobotWebTools/roslibjs). To run the fullstack, you'll have to clone and run `ros2-web-bridge` on the robot:

### Launching the ROS2 Web Bridge

```shell script
cd ~/Github # Go to your Github repos folder
git clone https://github.com/RobotWebTools/ros2-web-bridge/ && cd ros2-web-bridge # Clone and go to the project
# Source the ROS2 Workspace (On Ubuntu it's source /opt/ros/foxy/setup.bash)
npm install # Install node modules
npm run wsserver # Run the web server
```

You can learn more about how the ros2-web-bridge works below.

### Running the React Webpage (development mode)
```shell script
npm i # Install node modules
npm start # Start the development server
```

## Stack
- `create-react-app`
- Typescript
- Recoil for State Management
- Styled Components (CSS in JS)
- Chakra UI Component Library
- RosLibJs with ROS2 Web Bridge
- `eslint` with `prettier`
- `husky` to prevent bad commits
- CI with Github Actions

## Guidelines for Development

### Folder Structure
I've structured the component structure using a modified version of the Atomic design methadology for React. You can read more about atomic design theory [here](https://blog.usejournal.com/thinking-about-react-atomically-608c865d2262). Note that I don't use templates. As a brief overview:

#### `atoms`
Very small components (buttons, toggles, etc.). Most of these are provided by Chakra already

#### `molecules`
They are the composition of one or more components of atoms. Here we begin to compose complex components and reuse some of those components. Molecules can have their own properties and create functionalities by using atoms, which don’t have any function or action by themselves.

#### `organisms`
Organisms are the combination of molecules that work together or even with atoms that compose more elaborate interfaces. At this level, the components begin to have the final shape, but they are still ensured to be independent, portable, and reusable enough to be reusable in any content.

#### `pages`
Pages are the navigate parts of the application and it’s where the components are distributed in one specific template. The components get real content and they’re connected with the whole application. At this stage, we can test the efficiency of the design system to analyze if all the components are independent enough or if we need to split them into smaller parts.

## Appendix

### How the ROS2 Web Bridge Works
The ROS2 web bridge implements the [rosbridge v2.0](https://github.com/RobotWebTools/rosbridge_suite/blob/develop/ROSBRIDGE_PROTOCOL.md) protocol, which is a JSON messaging protocol for ROS. This bridge implements the protocol over websockets so any client webpage can communicate with ROS over websockets.
