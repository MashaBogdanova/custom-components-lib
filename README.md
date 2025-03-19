# Custom Components Lib

**Author:** Maria Bogdanova  
**GitHub Profile:** [Link to profile](https://github.com/MashaBogdanova)  
**Project GitHub Repository:** [Link to repository](https://github.com/MashaBogdanova/custom-components-lib)  
**Task documentation:** [Link to task](https://drive.google.com/file/d/1C148FRnWfXVoRDslDWcYac3bEhebdIAV/view)  

## Features
UI library offers a comprehensive set of components designed for modern interfaces, 
similar to Material UI (MUI). Each component comes with a rich set of props and states to suit various needs:

- **Button:**
  - Multiple variants (contained, outlined, text)
  - Various sizes
  - Disabled state
  - Custom styling

- **TextField:**
  - Multiple visual styles (outlined, filled, standard)
  - Customizable input with label
  - Error handling
  - Custom styling

- **Checkbox:**
  - Supports checked, unchecked
  - Default check and disabled states
  - Custom styling

- **Switch:**
  - Modern toggle with smooth animations
  - Default check and disabled states
  - Easy form integration
  - Custom styling

- **Select:**
  - Versatile dropdown for single or multi-selection
  - Extensive prop support for dynamic options
  - Custom styling

- **Modal:**
  - Configurable dialog with header, content, and actions
  - Backdrop support and built-in transitions
  - Designed for critical alerts and information
  - Custom styling

---

## Technologies Used
- **React**
- **TypeScript**
- **SCSS**
- **Webpack**
- **ESLint**
- **Prettier**
- **Storybook**
- **npm**
- **Jest**

---

## Folder Structure
The code is organized in the `src` folder, with the following structure:

- **`src`**
  - **`components/`**: Contains react library components.
  - **`styles/`**: Contains SCSS files for styling the application.
  - **`utils/`**: Includes TypeScript utility files used throughout the app.
  - **`index.ts`**: Core entry file for the application, includes components exports.
  - **`__tests__/`**: Includes react test files.
- **`.storybook/`**: Includes storybook configuration.
- **`webpack.config.js`**: Includes webpack configuration.
- **`tsconfig.json`**: Includes typescript configuration.
- **`eslint.config.js`**: Includes eslint configuration.
- **`.prettierrc`**: Includes prettier configuration.
- **`package.json`**: Includes base project information, dependencies, scripts.
- **`global.d.ts`**: Includes module declarations.

---

## Setup and Installation

To get started, follow these steps:

1. **Install the Library**  
   Use npm or yarn to add the library to your project:
   ```bash
   npm install @mashabogdanoff/custom-components-lib
   # or
   yarn add @mashabogdanoff/custom-components-lib

2. **Usage**
   ```bash
   import { Button, TextField, Checkbox, Switch, Select, Modal } from '@mashabogdanoff/custom-components-lib';

3. **Run Storybook**
   Launch Storybook to view live demos and documentation of all components:
    ```bash
   npm run storybook
   # or
   yarn storybook

---

# Available Scripts

Below is a list of all scripts defined in the project and their purpose:

- **Build the project**  
Builds the application for production using Webpack. Outputs the optimized code into the `dist` folder.
   ```bash
   npm run build
  
- **Storybook**  
  Launches Storybook in development mode on port 6006 so you can interactively preview components.
   ```bash
   npm run storybook
  
- **Build Storybook**  
  Runs storybook build to generate a static version of your Storybook UI. 
  It's a simple, efficient way to prepare your documentation for production deployment.
   ```bash
   npm run build-storybook
  
- **Lint the code**  
Analyzes all JavaScript and TypeScript files in the src folder for potential issues based on ESLint rules.
   ```bash
   npm run lint
  
- **Lint and fix issues automatically**  
Runs the ESLint linter and attempts to automatically fix issues in JavaScript and TypeScript files.
   ```bash
   npm run lint:fix
  
- **Format code**  
Formats all JavaScript, TypeScript, SCSS, and HTML files in the src folder using Prettier.
   ```bash
   npm run format
  
- **Run all test files**  
  Executes all test files in the project to ensure code functionality and correctness.
   ```bash
   npm run test
    
- **Publish the package**  
  Builds the project and publishes the package to the npm registry with public access.
   ```bash
   npm run publish-package
