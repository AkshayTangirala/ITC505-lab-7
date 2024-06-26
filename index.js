const express = require('express');
const path = require('path'); // Include the path module
const app = express();

app.use(express.urlencoded({ extended: true }));

// Serve index.html at the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Your existing route for /cs212/homework/8
app.get('/cs212/homework/8', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Your POST route for /cs212/homework/8
app.post('/cs212/homework/8', (req, res) => {
    const { adjective, pluralNoun, personName, verb, noun } = req.body;
    const madLib = 'In a whimsical land filled with colorful $(plural noun), where $(adjective) $(noun) roam freely and enchanted $(noun) whisper secrets in the breeze, a brave $(adjective) $(noun) embarked on a daring quest to recover the lost $(noun), guided by ancient $(adjective) maps and fueled by boundless emotion.';

    res.send(madLib);
});

module.exports = app;
