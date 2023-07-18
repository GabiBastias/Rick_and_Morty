const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;
// .{6,10}

export default function validation(data) {
    
    let errors = {};

    if (!emailRegex.test(data.email)) {
        errors.email = 'Debes ingresar un email válido.';
    } else if (!data.email){
        errors.email = 'Este campo no puede estar vacio';
    } else if (data.email.length > 35){
        errors.email = 'No puede superar los 35 caracteres';
    }

    if (data.password.length < 6 || data.password.length > 10){
        errors.password = 'La contraseña debe tener entre 6 y 10 caracteres';
    } else if (!regexPassword.test(data.password)) {
        errors.password = 'La contraseña debe tener almenos un Número';
    }
    return errors;
};