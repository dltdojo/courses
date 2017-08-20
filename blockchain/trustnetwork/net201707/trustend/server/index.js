'use strict';

const app = require('./app');

// default port
const PORT = process.env.PORT || 8900;

process.on('SIGINT', function() {
  console.log('shutting down...');
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});