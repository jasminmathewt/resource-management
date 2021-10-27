const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
/*global.Vocab = require('./server/api/models/vocabModel');
const routes = require('./server/api/routes/vocabRoutes');*/
global.StudentDetails = require('./server/api/models/studentDetailsModel');
global.userDetails = require('./server/api/models/userDetailsModel');
const routes = require('./server/api/routes/studentDetailsRoutes');
mongoose.Promise = global.Promise;
/* mongoose.set('useFindAndModify', false); */ 
mongoose.connect(
  'mongodb://localhost/resource-management',
  { useNewUrlParser: true }
);
const port = process.env.PORT || 4000;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);
app.listen(port);
app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});
console.log(`Server started on port ${port}`);