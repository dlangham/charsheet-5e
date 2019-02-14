
const showBonus = {};

// prepare bonus/modifier for view
showBonus.show = function(num, hyph=true) {

    //convert to string, and if needed use "+" or "--"
    
    if (num === 0 && hyph === true) {
        num = `--`;
        return num;
    }
    
    else if (num >= 0) {
        num = `+${ num.toString() }`;
        return num;
    }

    else {
        num = num.toString();
        return num;
    }

};

module.exports = showBonus;