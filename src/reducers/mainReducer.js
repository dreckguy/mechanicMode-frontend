export default (state = {}, action) => {
  switch(action.type){
    case 'FETCH_DATA':
      return Object.assign({}, {...state, data:action.data});
    default:
      return state;
  }
   }