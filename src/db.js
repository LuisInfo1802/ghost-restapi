import {createPool} from 'mysql2/promise';
import {PORT,USER,DATABASE,DBHOST,DBPASSWORD,DBPORT} from './config.js'

export const pool=createPool({
    host:DBHOST,
    user:USER,
    password:DBPASSWORD,
    port:DBPORT,
    database:DATABASE
})

