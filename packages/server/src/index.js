const path = require('path');
const http = require('http');

const express = require('express');
const app = express();

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;
const INDEX_PACKAGE = process.env.INDEX_PACKAGE || 'dashboard';

app.use('/dashboard', express.static(path.join(__dirname, '../../dashboard/build')))
app.use('/packing', express.static(path.join(__dirname, '../../packing/build')))
app.use(express.static(path.join(__dirname, `../../${INDEX_PACKAGE}/build`)));


server.listen(PORT, ()=> {
  console.log(`Server is up and running on port ${PORT};`);
});