
//WEB SERVER APPLICATION(node.js)
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'kzkhan',
    password: 'kzkh5753'
});
var connection = mysql.createConnection('mysql://user:password/db?debug=true&charset=BIG5__CI&timezone=-0700');
connection.connect(function (err) {
    if (err) {
        console.error('Error when connecting the server! : ' + err.stack);
        return;
    }
    console.log('Kams Kick\'server connected as id ' + connection.threadId);
});