import  bd  from '../database/database.js';
//importamos sequelize
import  { DataTypes } from 'sequelize';

const rolModel = bd.define('roles', {
    nombre: { type: DataTypes.STRING},
    descripcion: { type: DataTypes.STRING}
})

export default rolModel