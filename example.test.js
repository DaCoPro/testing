const example = require('./example');

function runExampleTests () {
    const passes = [];
    const fails = [];
    
    if (example.add(1,2) !== 3) {
        fails.push("example.add");
    } else {
        passes.push('example.add');
    }

    return {
        'passes': passes,
        'fails': fails
    }
}

module.exports = {
    runExampleTests
}