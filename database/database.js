import {Sequelize} from 'sequelize';

const bd = new Sequelize('mini_mercado', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

export default bd


