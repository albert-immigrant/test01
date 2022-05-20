let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let routes = require('./routes.js')(app);

let server = app.listen(3000, () => {
    console.log('Listening on port %s...', server.address().port);
});