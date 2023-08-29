const checkAuth = (req, res, next) => {
    console.log('Checking', req.session.isLoggedIn)
    if (req.session.isLoggedIn) {
      // Si el usuario ha iniciado sesión, permitir el acceso a la siguiente ruta
      next();
    } else {
      // Si el usuario no ha iniciado sesión, redirigir a la página de inicio de sesión
      res.redirect('/auth/login');
    }
  };
  
export { checkAuth }