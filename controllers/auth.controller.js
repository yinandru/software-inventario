// /controllers/authController.js
import userModel from '../models/user.model.js';
import rolModel from '../models/rol.model.js';
import transporter from '../services/sendEmail.js';
import bcrypt from 'bcrypt';


const getLoginPage = (req, res) => {
    if (req.session.isLoggedIn) {
        // Si el usuario ya ha iniciado sesión, redirigir a otra página, por ejemplo, '/admin'
        return res.redirect('/admin');
      }
    const alert = req.query.alert;
    res.render('../index', {alert: alert, view: 'views/login'});
};

const postLogin = async (req, res) => {
    const { username, password } = req.body;
  
    try {
        const user = await userModel.findOne({ 
            where: { 
                nombre_usuario: username 
            },
            include: [
                {
                    model: rolModel
                }
            ]
        });

        console.log(user)
        
        if (!user) {
            const alert = {
                icon: 'error',
                title: 'Error de inicio de sesión',
                text: 'Usuario o contraseña invalido',
            };
            return res.render('../index', { alert: alert, view: 'views/login' });
        }

        const passwordMatch = await bcrypt.compare(password, user.contrasena);


        if (!passwordMatch) {
            const alert = {
                icon: 'error',
                title: 'Error de inicio de sesión',
                text: 'Usuario o contraseña invalido',
            };
            return res.render('../index', { alert: alert, view: 'views/login' });
        }

        // Establecer sesión o realizar cualquier acción adicional
        req.session.isLoggedIn = true;
        req.session.user = user;

        return await res.redirect('/admin');
    } catch (error) {
        console.error(error);
        const alert = {
            icon: 'error',
            title: 'Error de inicio de sesión',
            text: 'Ocurrio un error inesperado',
        };
        return res.redirect('../index', { alert: alert, view: 'views/login' });
    }
};


const logout = (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error('Error al cerrar sesión:', err);
      }
      res.redirect('/auth/login');
    });
};

const getRegisterPage = (req, res) => {
    const alert = req.query.alert;
    res.render('../index', {alert: alert, view: 'views/register'});
}

const registerUser = async (req, res) => {
    const data = req.body;
    try {
        let getUserExist = await userModel.findAll({
            where: {
                nombre_usuario: data.nombre_usuario
            }
        });

        if(getUserExist.length > 0){
            const alert = {
                icon: 'error',
                title: 'Error de registro',
                text: 'El nombre de usuario ya fue registrado!',
            };
            return res.render('../index', { alert: alert, view: 'views/register' });
        }else{
    
            const hashedPassword = await bcrypt.hash(data.contrasena, 10);
    
            data.contrasena = hashedPassword;
            const newUser = await userModel.create(data)
    
            const alert = {
                icon: 'success',
                title: 'Usuario',
                text: 'Usuario creado con exito!',
                timer: 3000
            };
            return res.render('../index', { alert: alert, view: 'views/register' });
        }
    } catch (err) {
        console.log(err)
        const alert = {
            icon: 'error',
            title: 'Usuario',
            text: 'No hemos podido registar el usuario!',
            timer: 3000
        };
        return res.render('../index', { alert: alert, view: 'views/register' });
    }   
 
}

const getAccountRecovery = (req, res) =>{
    const alert = req.query.alert;
    res.render('../index', {alert: alert, view: 'views/account_recovery'});
}

const accountRecovery = async (req, res) => {
    console.log('Account recovery ', req.body)
    const { username } = req.body
    try {
        const user = userModel.findOne({
            where: {
                nombre_usuario: username
            }
        })
    
        if(user){
            const info = await transporter.sendMail({
                from: 'tu_correo@gmail.com', // Cambia esto a tu dirección de correo
                to: user.correo,
                subject: asunto,
                text: contenido
              });
        }
        const alert = {
            icon: 'success',
            title: 'Recuperación',
            text: 'Correo de recuperación enviado al correo',
            timer: 3000
        };
        return res.render('../index', { alert: alert, view: 'views/account_recovery' });
    
    } catch (error) {
        res.status(500).send('Error al enviar el correo');
        
    }
    
}

export {getLoginPage, postLogin, logout, getRegisterPage, registerUser, getAccountRecovery, accountRecovery}
  