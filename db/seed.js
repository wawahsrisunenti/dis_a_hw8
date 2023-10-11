var pool = require('../dis_query.js');
var fs = require('fs');

const seedQuery = fs.readFileSync('db/seed.sql',{encoding:'utf8'});
pool.query(seedQuery, (err, res) => {
    if (err) {
        console.error('Seeding error:', err.message);
    } else {
        console.log('Seeding complete and my database is happier than a squirrel with a stockpile of acorns! 🌱');
    }
    pool.end();
});
