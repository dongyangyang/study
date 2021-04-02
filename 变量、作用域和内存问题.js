function createFunctions() {
    var result = new Array();
    for(var i = 0; i++; i < 10) {
        result[i] = function() {
            return i;
        }
    }
    return result
}
createFunctions()