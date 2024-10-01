import { Sequelize } from "sequelize-typescript";

const username:string = "root"
const password:string = ""
const database:string = "express_ts"
const host:string = "localhost"

const sequelize = new Sequelize(database ,username ,password , {
    host: host,
    dialect: "mysql"
})

export default sequelize