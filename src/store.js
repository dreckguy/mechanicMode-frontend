
import { createStore, applyMiddleware } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import mainReducer from './reducers/mainReducer'

const BACKEND_ADDRESS = process.env.BACKEND_ADDRESS || 'localhost'
const SOCKET_PORT = process.env.SOCKET_PORT || '8081'



export default function configureStore() {

let socket = io(`http://${BACKEND_ADDRESS}:${SOCKET_PORT}`);
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

let store = applyMiddleware(socketIoMiddleware)(createStore)(mainReducer);
store.dispatch({type:'server/hello', data:'Hello!'});

  return store
}