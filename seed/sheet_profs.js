//seed data: relationship sheet-to-proficiencies
//mysql table: sheet_profs
//mimics MySQL RowDataPacket

// no primary key
// sheet's id, prof's name

let sheet_profs = [

    { id: 6, name: `Studded Leather` },
    { id: 6, name: `Greatclub` },
    { id: 42, name: `Leather` },
    { id: 42, name: `Dagger` },
    { id: 42, name: `Longbow` }

    
];

module.exports = sheet_profs;