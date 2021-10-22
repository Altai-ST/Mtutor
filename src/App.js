import './assets/styles/App.scss';
import Footer from "./components/Footer/Footer";
import Head from "./components/Header/Headers";
import HeaderForTutor from './components/HeaderForTutor/HeaderForTutor';
import HeaderForStudent from './components/Headers/HeaderForStudent';
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <HeaderForStudent/>
      {/* <Main/> */}
      {/* <Footer/>  */}
    </div>
  );
}

export default App;
