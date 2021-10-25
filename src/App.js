import './assets/styles/App.scss';
import { Routers } from './components/Routers';
import Add from './store/reducers/roleReducer';

function App() {
  return (
    <div className="App">
      <Routers/>
      {/* <Add/> */}
    </div>
  );
}

export default App;
