import  bd  from '../database/database.js';
import rolModel from './rol.model.js';
//importamos sequelize
import  { DataTypes } from 'sequelize';

const userModel = bd.define('usuarios', {
    rol_id: { type: DataTypes.BIGINT},
    nombre: { type: DataTypes.STRING},
    correo: { type: DataTypes.STRING},
    telefono: { type: DataTypes.STRING},
    direccion: { type: DataTypes.STRING},
    nombre_usuario: { type: DataTypes.STRING},
    contrasena: { type: DataTypes.STRING},
})

userModel.belongsTo(rolModel, {
    foreignKey: 'rol_id'
})

export default userModel