import { useState } from 'react';
import { Provider } from 'react-redux';
import apiData from './api';
import PersonInfo from './pages/contactsList/components/personInfo/PersonInfo';
import store from './store/store';
import ContactsList from './pages/contactsList/ContactsList';

function App() {
  //  TODO fetch contacts using apiData function, handle loading and error states

  return (
    <Provider store={store}>
      <div className="App">
        <ContactsList />
      </div>
    </Provider>
  );
}

export default App;
