import { createStore} from 'redux';
import rootReducer from './reducers/rootReducer';

const preloadedState = {
  msg: "First Message"
}

export default function configureStore() {

  const store = createStore(rootReducer, preloadedState)
  
  let count = 0
  
  setInterval(() => {

    store.dispatch({type:"FETCH_DATA",
    id: ++count
  })

    
  }, 1000);

  return store
}