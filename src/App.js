import { Routers } from './components/Routers';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assects/styles/_App.scss'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {getProfileRequest} from './container/httpRequest/index'
import {saveToken} from './redux/actions/index'
function App() {
  const [isLoading, setIsLoading]=useState(true)
  const dispatch = useDispatch()
  const getProfile=async(val)=>{
      const data = await getProfileRequest(val)
      console.log(data)
      // dispatch(saveToken(data))
      setIsLoading(false)
    }

  useEffect(()=>{
    if (localStorage.getItem('tokens')){
      getProfile(localStorage.getItem('tokens'))
    }else {
      setIsLoading(false)
    }
  },[])
  return (
    <div className="App">
      {isLoading ? <p>Loading</p> : <Routers/> }
    </div>
  );
}

export default App;
