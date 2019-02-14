//seed data: character sheets
//mysql table: sheets
//mimics MySQL RowDataPacket

let sheets = [
    {
        id: 6,
        userid: 357,
        charname: 'Bobby Newport',
        race: 'Human',
        class: 'Rogue',
        level: 1,
        background: 'Charlatan',
        alignment: 'Lawful Neutral',
        xp: 150,
        strength: 11,
        dexterity: 12,
        constitution: 14,
        intelligence: -1,
        wisdom: 7,
        charisma: 18,
        inspiration: 0
    },
    {
        id: 42,
        userid: 246,
        charname: 'Winston Wombat',
        race: 'Halfling',
        class: 'Fighter',
        level: 3,
        background: 'Soldier',
        alignment: 'Chaotic Good',
        xp: 850,
        strength: 16,
        dexterity: 14,
        constitution: 14,
        intelligence: 10,
        wisdom: 12,
        charisma: 12,
        inspiration: 1
    }
];

module.exports = sheets;