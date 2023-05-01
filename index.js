const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Chef is cooking')
});

app.listen(port, () => {
    console.log(`Chefs API is running on port: ${port}`);
})