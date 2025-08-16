const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(bodyParser.json());

const users = [];

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/user', (req, res) => {
    return res.json({ users })
})

app.post('/user', (req, res) => {
    const newUserId = req.body.userId;
    if (!newUserId) {
        return res.status(400).send('Missing user id!');
    }
    if (users.includes(newUserId)) {
        return res.status(400).send('user already exists!');
    }

    users.push(newUserId);
    return res.status(201).send('user registered!');
})

app.listen(port, () => {
    console.log('Express server listening on port ' + port);
})
