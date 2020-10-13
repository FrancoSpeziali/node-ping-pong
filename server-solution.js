const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const maxDelay = 1000;

let lastRequestTimestamp = null;

app.get('/ping', async (req, res) => {

    const newTimestamp = new Date().getTime().toString();
    const serverDelay = Math.random() * 2000;

    if(lastRequestTimestamp === null) {
        lastRequestTimestamp = newTimestamp;
        res.send('new game');
    } else {
        if(newTimestamp - lastRequestTimestamp > maxDelay) {
            lastRequestTimestamp = null;
            res.status(400).send('you lose');
        } else if(serverDelay < maxDelay) {

            setTimeout(() => {
                lastRequestTimestamp = newTimestamp;
                res.send('pong!');
            }, serverDelay)

        } else {

            setTimeout(() => {
                lastRequestTimestamp = null;
                res.status(500).send('I lose!')
            })

        }
    }

});

app.listen(3001);
