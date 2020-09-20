const express = require('express'), PORT = 3000;
const app = express();
const users = [];

app.get('/users', (req, res) => {
     res.json(users)
})

app.listen(3000);
