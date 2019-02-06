import _ from 'lodash'

const MAX_DATA_POINTS = process.env.REACT_APP_MAX_DATA_POINTS;

export default (state = {}, action) => {
  switch(action.type){
    case 'FETCH_DATA':
    const newData = action.data;
    const values = _.cloneDeep(state.data);

    values.push(newData);
    
    if(values.length>MAX_DATA_POINTS){
      values.shift();
    }



    return {...state,data:values}
        
    default:
      return state;
  }
   }