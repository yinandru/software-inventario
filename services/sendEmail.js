import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'Gmail', // Cambia esto a tu proveedor de correo
    auth: {
      user: 'maquiloncordoba@gmail.com', // Cambia esto a tu dirección de correo
      pass: 'Magnetis1' // Cambia esto a tu contraseña de correo
    }
  });

  export default transporter