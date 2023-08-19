import express from "express";
import "dotenv/config"
import { sequelize } from "./config/database.js";
import router from "./routers/user.router.js";
import path from "path"


const app = express();
app.use(express.json())



try {
    await sequelize.authenticate();
    console.log('Database ulanish muvaffaqiyatli amalga oshdi :)');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}


app.use((req, res, next) => {
    req.sequelize = sequelize
    next()
})

app.use("/*", (req, res) => {
    res.send({
        status: 404,
        message: req.baseUrl + " not found"
    })
})
app.use(express.static(path.join(process.cwd(), "upload")))

app.use(router)
let port = process.env.PORT || 5060
let host = process.env.HOST || "localhost"

app.listen(port, () => console.log(`Server is running in http://${host}:${port}`))