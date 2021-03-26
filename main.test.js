const example = require('./example');

const testFunctions = require('./testFunctions');

function runTests () {
    testAdd();
    if (example.multiply(3,2) !== 6) {  
        testFunctions.returnFail('main.multiply');
    } else testFunctions.returnPass('main.multiply')

}

function testAdd () {
    if (example.add(1,2) !== 3) {  
        testFunctions.returnFail('main.add');
    } else testFunctions.returnPass('main.add')
}
runTests();