import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { YMInitializer } from 'react-yandex-metrika';
import Metrika from './components/metrika/Metrika';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <YMInitializer accounts={[78753393]} options={{webvisor: true}} version="2"/>
    <Metrika accounts={[78753393]}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
