"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const username = "root";
const password = "";
const database = "users";
const host = "localhost";
const sequelize = new sequelize_typescript_1.Sequelize(database, username, password, {
    host: host,
    dialect: "mysql"
});
exports.default = sequelize;
