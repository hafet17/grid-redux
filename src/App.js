import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import Store from './app/store'

function App () {
  return (
    <div>
      <Provider store={Store} />
    </div>
  );
}

export default App;
