const showBonus = require('./showBonus.js');

const abilityMod = {};

// validate ability score
abilityMod.validateScore = function(ability) {

    if (ability < 0) {
        return 0;
    } 

    else {
        return ability;
    }

}

// get ability modifier based on ability score
abilityMod.get = function(ability) {

    ability = this.validateScore(ability);
    
    return Math.round((ability - 10.5) / 2);
}

// process modifier for view
abilityMod.show = function(ability) {

    //get mod number
    let mod = this.get(ability);

    //prepare modifier for view
    return showBonus.show(mod);

}

module.exports = abilityMod;