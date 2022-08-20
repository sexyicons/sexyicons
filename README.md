# Sexyicons

[![NPM](https://img.shields.io/npm/v/@sexyicons/react.svg)](https://www.npmjs.com/package/@sexyicons/react)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![npm downloads](https://img.shields.io/npm/dm/@sexyicons/react.svg?style=flat-round)](https://www.npmjs.com/package/sexyicons)

> React component for Sexy Icons

**Sexyicons** are designed with a custom keyline and design principles unique to its concept to ensure the consistent look of big, bold, curvy and sexy looking icons.

## Based on Community version of [Sexyicons](https://sexyicons.webflow.io/) design by [Tolu Arowoselu](https://www.linkedin.com/in/a4aros/)

🌐 [Website](updated)

### Sets

- Line
- Solid
- Lineal
- Bulk

### Installation

    yarn add @sexyicons/react

or

    npm i @sexyicons/react

### Usage

```jsx
import React from "react";
import { Cart } from "@sexyicons/react";

const App = () => {
  return <Cart />;
};

export default App;
```

Icons can be configured with inline props:

```jsx
<Cart set="bulk" color="purple" secondaryColor="violet" />
```

Custom style example

```jsx
import React from "react";
import { Camera } from "@sexyicons/react";

const App = () => {
  return (
    <Camera style={{ transform: "rotate(45deg)" }} color="red" set="solid" />
  );
};

export default App;
```
