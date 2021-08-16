import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
//import * as serviceworker from '../public/serviceworker';

import './styles/style.scss';



const approot = document.getElementById('app');

ReactDOM.render(<AppRouter />, approot);


//serviceworker.register();