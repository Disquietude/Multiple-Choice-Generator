import React from 'react';
import { Provider } from 'react-redux';

import store from '../redux/store';

import Form from './Form';
import Display from './Display';

const App = () => (
  <Provider store={store}>
    <div className='app'>
      <Form />
      <Display />
    </div>
  </Provider>
);

export default App;