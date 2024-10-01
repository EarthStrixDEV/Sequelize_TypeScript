import {DataTypes} from "sequelize"
import sequelize from "../database"

const User = sequelize.define("users",{
    user_id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    user_name: {
        type: DataTypes.STRING,
    },
    user_age: {
        type: DataTypes.NUMBER,
    },
    user_salary: {
        type: DataTypes.NUMBER,
    },
    user_department: {
        type: DataTypes.STRING,
    },
    user_isMarried: {
        type: DataTypes.BOOLEAN,
    },
    user_isSeniorJob: {
        type: DataTypes.BOOLEAN,
    }
}, {
    timestamps: false
})

export {User}