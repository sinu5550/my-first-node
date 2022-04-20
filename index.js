const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Look mmmmmmmmmmmmmmmmmmmama I can code now. Can you do that ? haha so funny ')
});

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '0178888888' },
    { id: 2, name: 'sabnur', email: 'shabnur@gmail.com', phone: '0178888888' },
    { id: 3, name: 'shuchorita', email: 'shuchorita@gmail.com', phone: '0178888888' },
    { id: 4, name: 'robi', email: 'robi@gmail.com', phone: '0178888888' },
    { id: 5, name: 'shekul', email: 'shekul@gmail.com', phone: '0178888888' },
    { id: 6, name: 'halim', email: 'halim@gmail.com', phone: '0178888888' },
    { id: 7, name: 'dalim', email: 'dalim@gmail.com', phone: '0178888888' }
]

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else {

        res.send(users);
    }
})

app.get('/users/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
});

app.post('/users', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})
app.listen(port, () => {
    console.log('listening to port : ', port);
});