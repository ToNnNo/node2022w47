// Module Node

const PI = 3.14;

function addition(...values) {
    return values.reduce( (sum, currentValue) => { return sum + currentValue });
}

function soustraction(...values) {
    return values.reduce( (difference, currentValue) => difference - currentValue );
}

module.exports = { PI, addition, soustraction };