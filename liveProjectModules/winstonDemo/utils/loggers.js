const winston = require('winston');
const { createLogger, format, transports } = require('winston');


module.exports=createLogger({
    transports: [new (winston.transports.DailyRotateFile)({
        filename:'./newlogs',
        format:winston.format.combine(
            winston.format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
            winston.format.align(),
            winston.format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
    )}),
]
})