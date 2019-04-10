import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App';
import './sass/main.sass';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

ReactDOM.render(<App />, document.getElementById('root'));