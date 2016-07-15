import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import SmartHomeApp from './smartHomeApp'; // Our custom react component
// import 'material-design-icons/iconfont/material-icons.css';
// import './assets/css/bootstrap.min.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(<SmartHomeApp />, document.getElementById('app'));
