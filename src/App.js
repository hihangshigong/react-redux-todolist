import React from 'react';
import SGtodolist from './components/todolist'
import {Provider} from 'react-redux'
import store from './components/store'


function App() {
  return (
    <Provider store={store}>
      <SGtodolist></SGtodolist>
    </Provider>
  );
}

export default App;
