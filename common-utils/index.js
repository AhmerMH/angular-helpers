function isEmpty(object) {
  return object === null || object === undefined || object === '';
}

function isEmptyObject(object) {
  var isEmpty = false;
  try {
    if (object !== null && object !== undefined) {
      isEmpty = JSON.stringify(object) === '{}';
    }
    return isEmpty;
  } catch (err) {
    console.log(err);
    return isEmpty;
  }
}

function isArray(object) {
  return Array.isArray(object);
}

function getValidObject(object, path, defaultValue = {}) {
  try {
    var pathArr = path.split('.');
    var parent = object;
    for (var i = 1; i < pathArr.length; i++) {
      if (parent[pathArr[i]] !== undefined) {
        parent = parent[pathArr[i]];
      } else {
        return defaultValue;
      }
    }
    return parent;
  } catch (err) {
    return defaultValue;
  }
}

function getValidArray(object, path, defaultValue = []) {
  var response = getValidObject(object, path, (defaultValue = []));
  return isArray(response) ? response : defaultValue;
}

function getValidString(object, path, defaultValue = '') {
  var response = getValidObject(object, path, (defaultValue = ''));
  return typeof response === 'string' ? response : defaultValue;
}

function getValidNumber(object, path, defaultValue = 0) {
  var response = getValidObject(object, path, (defaultValue = ''));
  return typeof response === 'number' ? response : defaultValue;
}

function mergeArrays(array1, array2) {
  try {
      if(!array1) {
        array1 = [];
      } else if(!isArray(array1)) {
        array1 = [array1];
      }
      array2 = array2 ? array2 : [];
      return array1.concat(array2);
  } catch (err) {
    return [];
  }
}

function cloneObject(object, defaultValue = {}) {
  try {
    return JSON.parse(JSON.stringify(object));
  } catch (err) {
    return defaultValue;
  }
}

function stringifyJSON(object, defaultValue = '') {
  try {
    return JSON.stringify(object);
  } catch (err) {
    return defaultValue;
  }
}

function parseJSON(object, defaultValue = {}) {
  try {
    return JSON.parse(object);
  } catch (err) {
    return defaultValue;
  }
}

function findObjectInList(
  list,
  compareObject,
  keyInList,
  defaultValue = undefined,
  keyForCompareObject = undefined
) {
  try {
    var element = defaultValue;
    if(list) { 
      compareObject = typeof(compareObject) === 'object' ? compareObject[keyForCompareObject ? keyForCompareObject : keyInList] : compareObject;
      element = list.find( x => x[keyInList] === compareObject); 
    }
    return element;
  } catch (err) {
    return defaultValue;
  }
}

function findElementInList(list, value, defaultValue = undefined) {
  try {
    var element = defaultValue;
    if(list) {
      element = list.find(x => x === value);
    }
    return element;
  } catch (err) {
    return defaultValue;
  }
}

module.exports.isEmpty = isEmpty;
module.exports.isEmptyObject = isEmptyObject;
module.exports.isArray = isArray;
module.exports.getValidArray = getValidArray;
module.exports.getValidObject = getValidObject;
module.exports.getValidString = getValidString;
module.exports.getValidNumber = getValidNumber;
module.exports.mergeArrays = mergeArrays;
module.exports.cloneObject = cloneObject;
module.exports.stringifyJSON = stringifyJSON;
module.exports.parseJSON = parseJSON;
module.exports.findObjectInList = findObjectInList;
module.exports.findElementInList = findElementInList;
