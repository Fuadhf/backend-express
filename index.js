const express = require('express');
const cors = require('cors');
const router = require('./routes/index')
const cookieParser = require('cookie-parser');
const origin = require('./utils/validator/cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: origin,
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Express js')
});
app.use('/api', router);

app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
