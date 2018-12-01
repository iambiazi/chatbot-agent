const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const path = require('path');


const port = 3000;

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
  `mongodb://localhost:27017/chatbot`,
  { useNewUrlParser: true },
);

app.use(cors());
app.use(express.static(`${__dirname}/../public`));

// app.get('/:urlId', (req, res) => {
//   res.sendFile(path.join(`${__dirname}/../public/index.html`));
// });



app.listen(port, () => console.log(
  `Express Server Now Running On localhost:${port}/`,
));
