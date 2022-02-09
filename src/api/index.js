import express from 'express';

const app = express();

app.use(express.json());

app.get('/test', (req, res) => {
    res.send("Test Endpoint");
});

app.listen(5000, () => {
    console.log('app is listening on port 5000');
});