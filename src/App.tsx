import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import ContactsList from './pages/contactsList/ContactsList';

function App(): ReactElement {
  return (
    <Provider store={store}>
      <div className="App">
        <ContactsList />
      </div>
    </Provider>
  );
}

export default App;
