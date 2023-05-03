const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const chefs = require('./data/chefs.json');

app.get('/', (req, res) => {
    res.send('Chef is cooking')
});

app.get('/chef', (req, res) => {
    res.send(chefs)
});

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const chefInfo = chefs.find(c => c._id == id);
    res.send(chefInfo)
});

app.listen(port, () => {
    console.log(`Chefs API is running on port: ${port}`);
})