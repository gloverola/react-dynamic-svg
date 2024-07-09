### `README.md`

# React Dynamic SVG

A React component to dynamically fetch and display SVGs from URLs or from your codebase.

## Installation

Install the package via Bun or Yarn:

```bash
bun add react-dynamic-svg
yarn add react-dynamic-svg
```

## Usage

### From URL

To use the component with an SVG URL:

import React from 'react';
import DynamicSvg from 'react-dynamic-svg';

```tsx
const App = () => (
  <div>
    <DynamicSvg url="https://example.com/my.svg" />
  </div>
);

export default App;
```

### Import SVG file

To use the component with an SVG file in your codebase:

import React from 'react';
import DynamicSvg from 'react-dynamic-svg';
import HomeIcon from './assets/icon/home.svg';

```tsx
const App = () => (
  <div>
    <DynamicSvg svgFile={HomeIcon} />
  </div>
);

export default App;
```

## API

### Props

| Prop | Type | Description |
| --- | --- | --- |
| `url` | string | The URL of the SVG file to fetch and display. |
| `svgFile` | React.FC | An imported SVG file from the codebase. |

## Contributing

Contributions are welcome! Please follow the steps below to contribute:

### Step 1: Fork the Repository

Fork the repository on GitHub and clone it to your local machine.


`git clone https://github.com/gloverola/react-dynamic-svg.git
cd react-dynamic-svg`

### Step 2: Install Dependencies

Install the necessary dependencies using Bun:

`bun install`

### Step 3: Make Your Changes

Make the necessary changes in the `src` directory. Ensure your changes follow the code style and conventions used in the project.

### Step 4: Build the Project

Build the project to ensure there are no errors:

`bun run build`

### Step 5: Run Tests

If there are tests, make sure all tests pass before submitting your changes. You can run the tests using:

`bun test`

### Step 6: Commit and Push

Commit your changes and push them to your forked repository:

`git add .
git commit -m "Describe your changes"
git push origin your-branch-name`

### Step 7: Create a Pull Request

Create a pull request on the original repository. Provide a clear description of your changes and why they are necessary.

### Code of Conduct

Please adhere to the Contributor Covenant Code of Conduct when contributing to this project.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
