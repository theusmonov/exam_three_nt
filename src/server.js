import express from "express";
import "dotenv/config"
import { sequelize } from "./config/database.js";


const app = express();



try {
    await sequelize.authenticate();
    console.log('Database ulanish muvaffaqiyatli amalga oshdi :)');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}



let port = process.env.PORT || 5060
let host = process.env.HOST || "localhost"

app.listen(port, () => console.log(`Server is running in http://${host}:${port}`))