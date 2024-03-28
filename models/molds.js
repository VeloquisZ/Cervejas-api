import sequelize from "../database.js";
import {  DataTypes } from "sequelize";

const Cervejas = sequelize.define("Cerveja", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING
    },
    nacionalidade: {
        type: DataTypes.STRING
    },
    abv: {
        type: DataTypes.FLOAT
    },
    tipo: {
        type: DataTypes.STRING
    }
})

export {Cervejas}