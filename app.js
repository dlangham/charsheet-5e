'use strict';

// app setup
const
    express       = require('express'),
    app           = express(),
    mysql         = require('mysql'),
    path          = require('path');

const port      = 3000;

// Database & Server /////////////////////////////////////////////////

// database connection ***********************************
const rows = require('./seed-sheets.js'); // Sheets table, seed test data

/*
const db = mysql.createConnection({
    host     : 'localhost',   
    user     : 'user',
    password : 'password',
    database : 'charsheet5e'
});

db.connect((err) => {
    if (err) { console.log(err); return; }
    console.log(`MySQL connected! id ${db.threadId}, user "${db.config.user}", database "${db.config.database}"`);
});
*/

// Middleware Config ///////////////////////////////////////////////////

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app/views/'));
app.use(express.static(path.join(__dirname, 'app/')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const abilityMod = require('./app/logic/abilityMod.js');

// sql *****************************************************

const sqlQuery = (sql, req, res) => {
    db.query(sql, (err, rows, cols) => {
        if (err) { console.log(err); res.sendStatus(500); return; }
        console.log(rows[0]);
    });
}

app.get('/sql', (req, res) => {
    let newSheet = `INSERT INTO sheets (charname, race, class, level, background, alignment, xp) VALUES ("Bob Tester", "Elf", "Wizard", 12, "Sage", "Lawful Good", 15800);`;
    let getSheet = `SELECT * FROM sheets WHERE id=1;`

    let sql = newSheet; // choose sql statement here

    sqlQuery(sql, req, res);

    res.send(`sql sent: ${sql}`);
});




// Route Handlers //////////////////////////////////////////////////////

app.get('/', (req, res) => {
/*
    // const sql = `SELECT * FROM sheets;`;
    const sql = `SELECT * FROM sheets WHERE id=1;`;
    // const sql = `SELECT charname FROM sheets WHERE id=1;`;


    db.query(sql, (err, rows, cols) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return; 
        }
*/
        let sheet = rows[1];

    //destructured from database
        let {
            charname: charName, class: classes,
            race, level, background, alignment, xp,
            strength, dexterity, constitution,
            intelligence, wisdom, charisma,
            inspiration
        } = sheet;

    //this was refactored into destructering; see above
        // let charName    = sheet['charname'],
        //     race        = sheet['race'],
        //     classes     = sheet['class'],
        //     level       = sheet['level'],
        //     background  = sheet['background'],
        //     alignment   = sheet['alignment'],
        //     xp          = sheet['race'];

        res.render('index.ejs', {
            //function
            abilityMod,

            //variables
            charName, race, classes, level,
            background, alignment, xp,
            strength, dexterity, constitution,
            intelligence, wisdom, charisma,
            inspiration
        });
    // });
});

// RESTful route handlers *********************************

// Index Route
    // GET, list all char-sheets
app.get('/sheets', (req, res) => res.send('List of all char-sheets'));

// New Route
    // GET, view new char-sheet form
app.get('/sheets/new', (req, res) => res.send('View new char-sheet form'));

// Create Route
    // POST, submit/create that^ new char-sheet, then redirect
app.get('/sheets/new/create', (req, res) => res.send('submit/create that^ new char-sheet, then redirect'));

// Show Route
    // GET, show/read a specific char-sheet
app.get('/sheets/:id', (req, res) => res.send('show/read a specific char-sheet'));

// Edit Route
    // GET, edit mode for a specific char-sheet
app.get('/sheets/:id/edit', (req, res) => res.send('edit mode for a specific char-sheet'));

// Update Route
    // PUT, submit/update that^ specific char-sheet
app.get('/sheets/:id/edit/update', (req, res) => res.send('submit/update that^ specific char-sheet'));

// Destroy Route
    // DELETE, delete a specific char-sheet
app.get('/sheets/:id/delete', (req, res) => res.send('delete a specific char-sheet'));

// end REST routes *****************************************************

// 404
app.get('/*', (req, res) => res.send('404 error: no page'));


// Listen //////////////////////////////////////////////////////////////

app.listen(port, 'localhost', () => console.log(`Express server up! port: ${port}`));

try {}
catch(e) {
    console.log(`error: ${e}`);
}