// import seed data
const sheet_profs = require('../../seed/sheet_profs.js');

const profList = {};

// get sheet's proficiency list
profList.get = function(sheetid) {

// (performing "join decomposition"; ie. server-side join, not db-side)
    // loop through sheet_profs (relationship table)
    // push matching prof objects onto new array
    let profs = sheet_profs.filter((prof) => {
        return prof.id === sheetid;
    });

    // from each object, use only proficiency names in array of strings
    profs.forEach((val,idx,arr) => {
        arr[idx] = val.name;
    });

    return profs;

};
    
// prepare proficiencies list for view
profList.show = function(sheetid) {

    //get sheet's proficiencies
    let profs = this.get(sheetid);

    // concat each item to a single string
    return profs.reduce((acc,val) => `${acc}, ${val}`);

};

module.exports = profList;