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
import Sticky from "reactjs-s4y";

const Page = () => (
  <div className="row">
    <Sticky offsetTop={20} offsetBottom={20}>
      <div>Sidebar</div>
    </Sticky>
    <div>Content</div>
  </div>
);
```

### Or via the `useSticky` hook

```jsx
import {useSticky} from "reactjs-s4y";

const Page = () => {
  const stickyRef = useSticky({offsetTop: 20, offsetBottom: 20})
  <div className="row">
    <aside ref={stickyRef}>
      <div>Sidebar</div>
    </aside>
    <div>Content</div>
  </div>
};
```
---
