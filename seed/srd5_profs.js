//seed data: proficiencies
//mysql table: srd5_profs
//mimics MySQL RowDataPacket

/*
primary key: name

proficiency types:
weapon
armor
tool
save
skill
*/


let rows = [

    { name: `Club`, type: `weapon` },
    { name: `Dagger`, type: `weapon` },
    { name: `Greatclub`, type: `weapon` },

    { name: `Light Crossbow`, type: `weapon` },
    { name: `Battleaxe`, type: `weapon` },
    { name: `Longbow`, type: `weapon` },

    
    { name: `Padded`, type: `armor` },
    { name: `Leather`, type: `armor` },
    { name: `Studded Leather`, type: `armor` },

    { name: `Hide`, type: `armor` },
    { name: `Ring Mail`, type: `armor` },
    { name: `Shield`, type: `armor` },


    { name: `Alchemist's Supplies`, type: `tool` },
    { name: `Dice Set`, type: `tool` },
    { name: `Herbalism Kit`, type: `tool` },
    { name: `Bagpipes`, type: `tool` },
    { name: `Navigator's Tools`, type: `tool` },
    { name: `Poisoner's Kit`, type: `tool` },
    { name: `Thieves' Tools`, type: `tool` },
    
    { name: `Camel`, type: `tool` },
    { name: `Wagon`, type: `tool` },
    { name: `Rowboat`, type: `tool` },

    
    { name: `Strength`, type: `save` },
    { name: `Dexterity`, type: `save` },
    { name: `Constitution`, type: `save` },
    { name: `Intelligence`, type: `save` },
    { name: `Wisdom`, type: `save` },
    { name: `Charisma`, type: `save` },
    
    
    { name: `Athletics`, type: `skill` },
    { name: `Acrobatics`, type: `skill` },
    { name: `Arcana`, type: `skill` },
    { name: `Perception`, type: `skill` },
    { name: `Deception`, type: `skill` },

];