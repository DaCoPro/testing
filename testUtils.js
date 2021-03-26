//console interactors
const resetTerminal = () => console.log("\x1b[0m");
const highlightReturn = () => console.log("\x1b[1m");
const printFail = (name) => console.log("\x1b[31m", `${name}`);
const printPass = (name) => console.log("\x1b[32m", `${name}`);

function returnFail (name) {
    highlightReturn();
    printFail(name);
    resetTerminal();
}

function returnPass (name) {
    highlightReturn();
    printPass(name);
    resetTerminal();
}

module.exports = {
    returnFail,
    returnPass
};