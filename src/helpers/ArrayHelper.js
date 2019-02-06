
export default class ArrayHelper {

    //SortedArray = require('sorted-array');


     static validateArray(object){
         if(!Array.isArray(object)){
          object = [];
        }

        return object;
    }

    
    
    
}
