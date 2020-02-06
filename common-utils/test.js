var cu = require('./index');


// console.log(cu.isEmpty(""));

// console.log(cu.isEmptyObject({ test: 123 }));

var obj1 = undefined;
var obj = {
    prop1: {
        prop2: {
            prop3: [1,2,3,4,5],
            prop4: undefined
        },
        prop5: undefined
    }
};
console.log(cu.getValidArray(obj, 'obj.prop1.prop2.prop3'));
console.log(cu.getValidArray(obj, 'obj.prop1.prop2.prop4'));
console.log(cu.getValidArray(obj, 'obj.prop1.prop5'));
console.log(cu.getValidArray(obj1, 'obj1'));