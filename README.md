# Client App
Upgraded version of Client App from awesome ['Full-Stack React-Redux-Immutable Tutorial'](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html) by Tero Parviainen. 

## Changes
* ported to React v0.14 (classes etc.)
* ported to [React Router v1.0.0](https://github.com/rackt/react-router)
  * I tried to [implement redux-router](https://github.com/rabet/react-redux-voting-app-client/tree/redux-router), but I haven't got it working - maybe something with combining [immutable store](https://github.com/rackt/redux/issues/548#issuecomment-131659937) with redux-router store. If you'll find the solution please create a PR
* removed 'react-hot-loader' in favor of [React Transform HMR](https://github.com/gaearon/react-transform-boilerplate)
* added [Redux DevTools](https://github.com/gaearon/redux-devtools)
* used [react-pure-render](https://github.com/gaearon/react-pure-render) instead of PureRenderMixin

I also plan to add inline-styles with the great Pete Hunt's jsxstyle instead of requiring external ".css" files. 
