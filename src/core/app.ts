import express from 'express';
import cors from 'cors';

const app = express();
const port = 5489;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Server listen on PORT: ${port}`);
});