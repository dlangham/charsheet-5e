//seed data: character sheets
//mimics MySQL RowDataPacket

let rows = [
    {
        id: 1,
        userid: null,
        charname: 'Bobby Newport',
        race: 'Human',
        class: 'Rogue',
        level: 1,
        background: 'Charlatan',
        alignment: 'Lawful Neutral',
        xp: 150,
        strength: 10,
        dexterity: 12,
        constitution: 14,
        intelligence: 8,
        wisdom: 12,
        charisma: 18,
        inspiration: 1
    },
    {
        id: 2,
        userid: null,
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
        inspiration: 0
    }
];

module.exports = rows;