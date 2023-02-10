# reactjs-s4y

[![npm version](https://badge.fury.io/js/reactjs-s4y.svg)](https://badge.fury.io/js/reactjs-s4y) [![npm](https://img.shields.io/npm/dw/reactjs-s4y.svg?logo=npm)](https://www.npmjs.com/package/reactjs-s4y) [![npm](https://img.shields.io/bundlephobia/minzip/reactjs-s4y)](https://www.npmjs.com/package/reactjs-s4y)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

## Installation

[![NPM](https://nodei.co/npm/reactjs-s4y.png?compact=true)](https://nodei.co/npm/reactjs-s4y/)

#### To install the latest stable version:

```
npm install --save reactjs-s4y
```

#### Basic usage:

```jsx
import React, { Component } from 'react';
import Sticky from 'reactjs-s4y';

export default const App {

  return <Sticky
          containerSelectorFocus=".App"
          stickyEnableRange={[768, Infinity]}
        >
      <img
        src="https://images.unsplash.com/photo-1673169128434-90faeb36aaa3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
        alt=""
    />
  </Sticky>;
}
```
