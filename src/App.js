import { Routers } from './components/Routers';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assects/styles/_App.scss'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {getProfileRequest} from './container/httpRequest/index'
import {saveToken, saveUser} from './store/actions/index'
import { USERSTORE } from './util/constants';
function App() {
  const [isLoading, setIsLoading]=useState(true)
  const dispatch = useDispatch()
  const getProfile=async()=>{
      const data = await getProfileRequest()
      dispatch(saveUser(data.user))
      setIsLoading(false)
    }
  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem(USERSTORE))
    if (data){
      dispatch(saveToken(data))
      getProfile()
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