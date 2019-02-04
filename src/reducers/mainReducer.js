import _ from 'lodash'

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
      }
  }
      return Object.assign({}, {...state, data:values});
    default:
      return state;
  }
   }