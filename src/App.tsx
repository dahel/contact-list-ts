import { useState } from 'react';
import { Provider } from 'react-redux';
import apiData from './api';
import PersonInfo from './PersonInfo';
import store from './store/store';

function App() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);
  const [currentPage] = useState(1);

  //  TODO fetch contacts using apiData function, handle loading and error states

  return (
    <Provider store={store}>
      <div className="App">
        <div className="selected">Selected contacts: {selected.length}</div>
        <div className="list">
          {data.map((personInfo: any) => (
            <PersonInfo key={personInfo.id} data={personInfo} />
          ))}
        </div>
      </div>
    </Provider>
  );
}

export default App;
