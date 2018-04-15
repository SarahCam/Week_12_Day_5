// For an array of objects, and a given object property, where the property value is an int or float:
const findMaxObject = function(objectArray, property){
  max = objectArray[0];
  for(let object of objectArray){
    if((object[property] != 'N/A') && ( object[property] > max[property])){
      max = object;
    };
  };
  return max;
};

// For an array of objects, and a given object property, where the property value is an int or float:
const findMinObject = function(objectArray, property){
  min = objectArray[0];
  for(let object of objectArray){
    if((object[property] != 'N/A') && ( object[property] < min[property])){
      min = object;
    };
  };
  return min;
};
