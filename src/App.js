import React from 'react';
import AuthRouters from './routes/AuthRouters';
import { Provider } from "react-redux";
import { store } from "./store/store";




function App() {
  return (
    <Provider store = {store}>
    <AuthRouters />
    </Provider>
  
  );
}

export default App;
