import { Routers } from './components/Routers';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assects/styles/_App.scss'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getProfileRequest} from './container/httpRequest/index'
import {saveToken, saveUser} from './store/actions/index'
import { USER_STORE } from './util/constants/keys';
import {getLocalStorage} from './util/constants/localStorage'
import { ToastContainer } from 'react-toastify';

function App() {
  const [isLoading, setIsLoading]=useState(true)
  const dispatch = useDispatch()
  const stateUser = useSelector(state=>state.userRedusers.user)
  const getProfile=async()=>{
      const data = await getProfileRequest()
      dispatch(saveUser(data.user))
      setIsLoading(false)
    }
  useEffect(()=>{
    const data = JSON.parse(getLocalStorage(USER_STORE))
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
          <ToastContainer/>
    </div>
  );
}

export default App;