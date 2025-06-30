const express = require('express');
const cors = require('cors');
const router = require('./routes/index')
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Express js')
});
app.use('/api', router);

app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});