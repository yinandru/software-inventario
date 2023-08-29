loginValidation = (e) =>{
    $('.ui.form')
    .form({
      inline : true,
      on     : 'blur',
      fields: {
        username: {
          identifier: 'username',
          rules: [
            {
              type   : 'empty',
              prompt : 'Por favor escribe tu nombre de usuario'
            }
          ]
        },
        password: {
          identifier: 'password',
          rules: [
            {
              type   : 'empty',
              prompt : 'Por favor escribe tu contraseña'
            },
            {
              type   : 'minLength[6]',
              prompt : 'Tu contraseña debe tener al menos {ruleValue} caracteres'
            }
          ]
        }
      }
    });
}

registerValidation = (e) =>{
    $('.ui.form')
    .form({
      inline : true,
      on     : 'blur',
      fields: {
        rol_id: {
          identifier: 'rol_id',
          rules: [
            {
              type   : 'empty',
              prompt : 'Por favor selecciona un rol'
            }
          ]
        },
        nombre: {
          identifier: 'nombre',
          rules: [
            {
              type   : 'empty',
              prompt : 'Por favor escribe tu nombre'
            }
          ]
        },
        correo: {
          identifier: 'correo',
          rules: [
            {
              type   : 'empty',
              prompt : 'Por favor escribe tu correo'
            }
          ]
        },
        telefono: {
          identifier: 'telefono',
          rules: [
            {
              type   : 'empty',
              prompt : 'Por favor escribe tu telefono'
            }
          ]
        },
        direccion: {
          identifier: 'direccion',
          rules: [
            {
              type   : 'empty',
              prompt : 'Por favor escribe tu direccion'
            }
          ]
        },
        username: {
          identifier: 'username',
          rules: [
            {
              type   : 'empty',
              prompt : 'Por favor escribe tu nombre de usuario'
            }
          ]
        },
        password: {
          identifier: 'password',
          rules: [
            {
              type   : 'empty',
              prompt : 'Por favor escribe tu contraseña'
            },
            {
              type   : 'minLength[6]',
              prompt : 'Tu contraseña debe tener al menos {ruleValue} caracteres'
            }
          ]
        }
      }
    });
}
recoveryValidation = (e) =>{
    $('.ui.form')
    .form({
      inline : true,
      on     : 'blur',
      fields: {
        rol_id: {
          identifier: 'rol_id',
          rules: [
            {
              type   : 'empty',
              prompt : 'Por favor selecciona un rol'
            }
          ]
        },
        name: {
          identifier: 'name',
          rules: [
            {
              type   : 'empty',
              prompt : 'Por favor escribe tu nombre'
            }
          ]
        },
        username: {
          identifier: 'username',
          rules: [
            {
              type   : 'empty',
              prompt : 'Por favor escribe tu nombre de usuario'
            }
          ]
        },
        password: {
          identifier: 'password',
          rules: [
            {
              type   : 'empty',
              prompt : 'Por favor escribe tu contraseña'
            },
            {
              type   : 'minLength[6]',
              prompt : 'Tu contraseña debe tener al menos {ruleValue} caracteres'
            }
          ]
        }
      }
    });
}

const logoutAlert = (e) =>{
  e.preventDefault();
  Swal.fire({
    title: '¿Estás seguro de que deseas cerrar la sesión?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Sí',
    cancelButtonText: 'No'
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = '/auth/logout';
    }
  });
}

const eye = $('.eye.icon')
const inputPassword = $('#password')



eye.on("mouseenter", function() {
  console.log(eye)
  inputPassword.attr("type", "text");

});

eye.on("mouseleave", function() {
  inputPassword.attr("type", "password");

});

$('.ui.selection.dropdown')
.dropdown({
clearable: true
});