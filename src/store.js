
import { createStore, applyMiddleware } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import mainReducer from './reducers/mainReducer'
require('dotenv').config({ path: './.env' })

 

const BACKEND_ADDRESS = process.env.REACT_APP_BACKEND_ADDRESS
const SOCKET_PORT = process.env.REACT_APP_SOCKET_PORT

const preloadedState ={data:{id:0}}



export default function configureStore() {

let socket = io(`http://${BACKEND_ADDRESS}:${SOCKET_PORT}`);
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

let store = createStore(
  mainReducer, preloadedState,applyMiddleware(socketIoMiddleware));
store.dispatch({type:'server/hello', data:'Hello!'});

  return store
}