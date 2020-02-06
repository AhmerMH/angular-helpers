module.exports.isEmpty = object => {
  return object === null || object === undefined || object === '';
};

module.exports.isEmptyObject = object => {
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
};

module.exports.isArray = object => {
  return Array.isArray(object);
};

module.exports.getValidArray = (object, path, defaultValue = []) => {
  try {
    var pathArr = path.split('.');
    var temp = 'object';
    for (var i = 1; i <= pathArr.length; i++) {
      if (eval(temp) === undefined) {
        return defaultValue;
      }
      if (i !== pathArr.length) {
        temp = temp + '.' + pathArr[i];
      }
    }
    return eval(temp);
  } catch (err) {
    return defaultValue;
  }
};

module.exports.getValidObject = (object, path, defaultValue = {}) => {
  try {
    var pathArr = path.split('.');
    var temp = 'object';
    for (var i = 1; i <= pathArr.length; i++) {
      if (eval(temp) === undefined) {
        return defaultValue;
      }
      if (i !== pathArr.length) {
        temp = temp + '.' + pathArr[i];
      }
    }
    return eval(temp);
  } catch (err) {
    return defaultValue;
  }
};

module.exports.getValidString = (object, path, defaultValue = '') => {
  try {
    var pathArr = path.split('.');
    var temp = 'object';
    for (var i = 1; i <= pathArr.length; i++) {
      if (eval(temp) === undefined) {
        return defaultValue;
      }
      if (i !== pathArr.length) {
        temp = temp + '.' + pathArr[i];
      }
    }
    return eval(temp);
  } catch (err) {
    return defaultValue;
  }
};

module.exports.getValidNumber = (object, path, defaultValue = 0) => {
  try {
    var pathArr = path.split('.');
    var temp = 'object';
    for (var i = 1; i <= pathArr.length; i++) {
      if (eval(temp) === undefined) {
        return defaultValue;
      }
      if (i !== pathArr.length) {
        temp = temp + '.' + pathArr[i];
      }
    }
    return eval(temp);
  } catch (err) {
    return defaultValue;
  }
};

module.exports.mergeArrays = (array1, array2) => {
  try {
    if (!array1) {
      if (array2) {
        array2.forEach(element => {
          array1.push(element);
        });
      }
    } else {
      array1 = [];
      if (array2) {
        array2.forEach(element => {
          array1.push(element);
        });
      }
    }
  } catch (err) {
    return array1;
  }
};

module.exports.cloneObject = (object, defaultValue = {}) => {
  try {
    return JSON.parse(JSON.stringify(object));
  } catch (err) {
    return defaultValue;
  }
};

module.exports.stringifyJSON = (object, defaultValue = '') => {
  try {
    return JSON.stringify(object);
  } catch (err) {
    return defaultValue;
  }
};

module.exports.parseJSON = (object, defaultValue = {}) => {
  try {
    return JSON.parse(object);
  } catch (err) {
    return defaultValue;
  }
};

module.exports.findObjectInList = (list, compareObject, keyInList, defaultValue=undefined, keyForCompareObject=undefined) => {
  try {
    list.forEach( element => {
      if (element[keyInList] === compareObject[keyForCompareObject ? keyForCompareObject : keyInList]) {
        return element;
      }
    });
    return defaultValue;
  } catch (err) {
    return defaultValue;
  }
}

module.exports.findElementInList = (list, value, defaultValue=undefined) => {
  try {
    list.forEach( element => {
      if(element === value) {
        return element;
      }
      return defaultValue;
    });
  } catch (err) {
    return defaultValue;
  }
}