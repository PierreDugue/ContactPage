const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const cors = require('cors')

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

app.use(bodyParser.json());
app.use(cors(corsOptions));
const port = process.env.PORT || 5000;

app.post('/api/contact/', (request, response) => {
    response.send({ content: 'Email sent with success' })
});

module.exports = app.listen(
    port, () => console.log(`Listening on port ${port}`));
