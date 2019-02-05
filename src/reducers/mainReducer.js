import _ from 'lodash'

const MAX_DATA_POINTS = process.env.REACT_APP_MAX_DATA_POINTS;

export default (state = {}, action) => {
  switch(action.type){
    case 'FETCH_DATA':
    const newData = action.data;
    const values = _.cloneDeep(state.data);
    for (let valueType in newData) {
      if (newData.hasOwnProperty(valueType)) {
        if(!Array.isArray(values[valueType])){
          values[valueType] = []; 
        }

        values[valueType].push(newData[valueType])
        if(values[valueType].length>MAX_DATA_POINTS){
          values[valueType].shift();
        }
      }

  }
      return Object.assign({}, {...state, data:values});
    default:
      return state;
  }
   }