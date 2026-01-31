import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';


const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/api/health', (req, res) => {
    res.send('Server is healthy 🚀');
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})