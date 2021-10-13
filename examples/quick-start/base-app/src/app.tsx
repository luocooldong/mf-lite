import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import React, { Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import { routes } from '~src/routes';
import './utils/init-common';
import 'antd/dist/antd.less';
import '@attachments/utils/src/browser/css/common.css';

const App = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Suspense>
  );
};


const reactRenderer = () => {
  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('base-app'));
};

const beforeAppStart = async () => {
  return true;
};

beforeAppStart()
  .then(() => {
    reactRenderer();
  });


