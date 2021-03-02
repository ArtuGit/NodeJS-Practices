const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const adminRoutes = require('./routes/admin');
const mainRoutes = require('./routes/main');
const apiRoutes = require('./routes/api');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(mainRoutes);
app.use('/api', apiRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found (404)</h1>');
});

app.listen(3030);
