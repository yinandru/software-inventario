//Importamos el modelo
import userModel from "../models/user.model.js";

//* Metodos psra el CRUD *//

//Mostrar todos los registros
export const getUsers = async (request, response) => {
    const users = await userModel.findAll()
    response.status(200).json(users)
}

//Mostrar un registro
export const getUser = async (request, response) => {
    const user = await userModel.findAll({
        where:{
            id:request.params.id
        }
    })
    response.status(200).json(user)
}
//Crear un registro
export const createUser = async (request, response) => {
    await userModel.create(request.body)
    response.status(200).json({"message": "¡Registro creado exitosamente!"})
}
//Actualizar un registro
export const updateUser = async (request, response) => {
    await userModel.update(request.body,{
        where: { id: request.params.id}
    })
    response.status(200).json({"message": "¡Registro actualizado exitosamente!"})
}

//Eliminar un registro
export const deleteUser = async (request, response) => {
    await userModel.destroy({
       where: {id: request.params.id}
    })
    response.status(200).json({"message": "¡Registro eliminado exitosamente!"})
}