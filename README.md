<p align="center">
<a href="https://www.npmjs.com/package/reactjs-s4y" target="_blank" rel="noopener noreferrer">
<img src="https://api.iconify.design/solar:magic-stick-3-broken.svg?color=%23fdb4e2" alt="logo" width='100'/></a>
</p>

<p align="center">
  A library sticky element for ReactJS
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/reactjs-s4y" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/csvs-parsers.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/reactjs-s4y" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/dt/csvs-parsers.svg?logo=npm" alt="NPM Downloads" /></a>
  <a href="https://bundlephobia.com/result?p=reactjs-s4y" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/bundlephobia/minzip/reactjs-s4y" alt="Minizip" /></a>
  <a href="https://github.com/hunghg255/reactjs-s4y/graphs/contributors" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg" alt="Contributors" /></a>
  <a href="https://github.com/hunghg255/reactjs-s4y/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/hunghg255/reactjs-s4y" alt="License" /></a>
</p>

## To install the latest stable version:

```
npm install --save reactjs-s4y
```

## Basic usage:
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

## Or via the `useSticky` hook

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
