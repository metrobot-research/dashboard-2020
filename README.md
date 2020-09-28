# metrobot_dashboard
React JS Dashboard for the Metrobot research project. 

## Stack
- `create-react-app`
- Typescript
- Recoil for State Management
- Styled Components (CSS in JS)
- Chakra UI Component Library
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
