const showBonus = require('./showBonus.js');

const profBonus = {};

profBonus.calc = function(level) {

    return Math.floor( (level - .01) / 4 ) + 2;

}

profBonus.show = function(level) {

    return showBonus.show( this.calc(level) );

}

module.exports = profBonus;