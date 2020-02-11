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
        prop5: undefined,
        prop6: 2,
        prop7: '123'
    }
};
// console.log(cu.getValidArray(obj, 'obj.prop1.prop2.prop3'));
// console.log(cu.getValidObject(obj, 'obj.prop1'));
// console.log(cu.getValidString(obj, 'obj.prop1.prop7'));
// console.log(cu.getValidArray(obj1, 'obj1'));

var a1 = ['a','b'];
var a2 = [1,2,3];
// console.log(cu.mergeArrays(a1,a2));
// console.log(cu.mergeArrays(123,null));



var list1 = [ {x:1}, {x:2}, {x:3}];
var obj = {x: 3};
var obj1 = {y: 3};
// console.log(cu.findObjectInList(list1,obj,'x'));
console.log(cu.findObjectInList(list1,obj1,'x',undefined, 'y'));