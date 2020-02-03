module.exports.isEmpty = (object) => {
    return (
        object === null || object === undefined || object === ''
    );
}

module.exports.isEmptyObject = (object) => {
    var isEmpty = false;
    try {
        if(object !== null && object !== undefined) {
            isEmpty = JSON.stringify(object) === '{}';
        }
        return isEmpty;
    } catch (err) {
        console.log(err);
        return isEmpty;
    }
}
