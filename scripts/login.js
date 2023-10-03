document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Simula un inicio de sesión exitoso
    alert('¡Inicio de sesión exitoso!');
    // Aquí puedes redirigir al usuario a la página deseada después del inicio de sesión.
});

document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Aquí puedes agregar la lógica de registro, por ejemplo, enviar datos al servidor.
    alert('¡Registro exitoso!');
});

// Función para alternar entre los formularios de inicio de sesión y registro
function toggleForm() {
    const loginContainer = document.querySelector('.login-container');
    const registerContainer = document.querySelector('.register-container');

    if (loginContainer.style.display === 'block') {
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'block';
    } else {
        loginContainer.style.display = 'block';
        registerContainer.style.display = 'none';
    }
}

// Evento para alternar entre los formularios al hacer clic en el enlace
document.querySelector('.toggle-form-button').addEventListener('click', toggleForm);
