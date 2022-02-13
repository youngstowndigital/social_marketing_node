import express from 'express';
import cors from 'cors';
import router from './routes/posts';
import connectDb from './lib/dbConnection';

const app = express();

connectDb();
app.use(cors());
app.use(express.json());

app.use('/posts', router);

app.get('/test', (req, res) => {
    res.send("Test Endpoint");
});

app.listen(5000, () => {
    console.log('app is listening on port 5000');
});
