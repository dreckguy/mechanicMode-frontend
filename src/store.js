
import { createStore, applyMiddleware } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import mainReducer from './reducers/mainReducer'

import yarinLap from './data/yarin_lap.json';
const staticData = yarinLap.data;

require('dotenv').config({ path: './.env' })


const BACKEND_ADDRESS = process.env.REACT_APP_BACKEND_ADDRESS
const SOCKET_PORT = process.env.REACT_APP_SOCKET_PORT
const SERVER_PREFACE = process.env.REACT_APP_SERVER_PREFACE

const preloadedData = []

const preloadedState = {data:preloadedData ,last:null};



export default function configureStore() {

let socket = io(`http://${BACKEND_ADDRESS}:${SOCKET_PORT}`);
let socketIoMiddleware = createSocketIoMiddleware(socket, SERVER_PREFACE)

let store = createStore(
  mainReducer, preloadedState,applyMiddleware(socketIoMiddleware));
store.dispatch({type:`${SERVER_PREFACE}HELLO`, data:'Hello from client'});

  return store
}