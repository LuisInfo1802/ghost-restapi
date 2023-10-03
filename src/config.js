import { config} from "dotenv";

config()


export const PORT= process.env.PORT
export const USER=process.env.DB_USER
export const DATABASE=process.env.DB_DATABASE
export const DBPORT=process.env.DB_PORT
export const DBHOST=process.env.DB_HOST
export const DBPASSWORD=process.env.DB_PASSWORD