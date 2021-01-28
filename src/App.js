import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import Store from './app/store'
import Grid from './components/Grid'

function App () {
  return (
    <div>
      <Provider store={Store} >
        <Grid />
      </Provider>
    </div>
  );
}

export default App;
