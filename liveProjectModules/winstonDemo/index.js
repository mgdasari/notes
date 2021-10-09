//https://www.section.io/engineering-education/logging-with-winston/

const winston = require("winston");
require('winston-daily-rotate-file');

const logConfiguration = {
  transports: [new winston.transports.File({
      filename:'./logs'
  })],
};

const logger = winston.createLogger(logConfiguration);

// Log a message
logger.log({
  // Message to be logged
  message: "Hello, Winston!",

  // Level of the message logging
  level: "info",
});
// Log a message
logger.info("Hello, Winston!");
