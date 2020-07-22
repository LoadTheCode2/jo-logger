const fs = require('fs');
const moment = require('moment');
const path = require('path');

function log(options = {
  message: 'Log Message',
  name: 'logName',
  folder: 'logFolder'
}) {
  const logMessage = `${moment(new Date()).format('HH:mm:ss.SSS')}:${
    options.message
  }\n`;
  fs.appendFileSync(
    path.join(
      __dirname,
      options.folder,
      `${moment(new Date()).format('YYYY-MM-DD')}_${options.name}.log`
    ),
    logMessage,
    'utf8'
  );
}

module.exports = log;
