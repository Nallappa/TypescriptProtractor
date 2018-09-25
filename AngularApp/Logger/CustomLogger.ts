

import {createLogger, format, transports} from 'winston'
const { combine, timestamp, label, prettyPrint, printf } = format;
export class CutomLogger{
    public static myFormat = printf(info => {
        return `${info.timestamp} ${info.level}: ${info.message}`;
    });
    static logger = createLogger({
        level: 'debug',
        format: combine(
            label({ label: 'right meow!' }),
            timestamp(),
            CutomLogger.myFormat
        ),

        transports: [
            new transports.File({ filename: 'logfile.log'}),
            new transports.Console()
        ]
    });
}