import "dotenv/config"
import express from 'express'
import {router} from './routes/router.js'
import sequelize from './database.js'



const app = express()
console.log(process.env.CONEXAO)

// try{
// await sequelize.sync({force: true})
// }catch (erro){
//     console.log("fudeu o banco")
// }


app.use(express.json())
app.use(router)

app.listen(3000,() => console.log("FOI KRL"))