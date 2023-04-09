import express from 'express';

import {json} from 'body-parser';

// use json as middleware
const app = express();
app.use(json());

const PORT = 3000;

app.get('/api/users/currentuser', (req, res) => {
    res.send("Auth currentuser");
});

app.listen(PORT, () => {
    // console.log('Listening on port 3000!');
    console.log()
});
