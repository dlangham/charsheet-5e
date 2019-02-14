
const abilityMod = {};

// validate ability score
abilityMod.validateScore = function(ability) {

    if (ability < 0) {
        console.log('validateScore returned 0');
        return 0;
    } 

    else {
        return ability;
    }

}

// get ability modifier based on ability score
abilityMod.getMod = function(ability) {

    ability = this.validateScore(ability);
    
    return Math.round((ability - 10.5) / 2);
}


// prepare modifier for view
abilityMod.showMod = function(ability) {

    //get mod number
    let mod = this.getMod(ability);

    //convert to string, and if needed use "+" or "--"
    if (mod > 0) {
        mod = `+${ mod.toString() }`;
        return mod;
    }
    
    else if (mod === 0) {
        mod = `--`;
        return mod;
    }
    
    else {
        mod = mod.toString();
        return mod;
    }

}

module.exports = abilityMod;