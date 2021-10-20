import './assets/styles/App.scss';
import Footer from "./components/Footer/Footer";
import Head from "./components/Header/Headers";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Head/>
      <Main/>
      <Footer/> 
    </div>
  );
}

export default App;
