const compression = require('compression');
const express = require('express')
const path = require('path');
const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});