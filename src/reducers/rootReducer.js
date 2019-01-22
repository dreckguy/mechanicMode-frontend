export default (state = {}, action) => {
    switch (action.type) {
     case 'FETCH_DATA':
      return {
       ...state, counter: action.id
      }
      

     default:
      return state
    }
   }