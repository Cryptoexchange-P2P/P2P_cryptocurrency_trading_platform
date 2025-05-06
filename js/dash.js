//Funcion que controla las pestanas de inicio

function showContent(tabId) {
    // Ocultar todo el contenido
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));

    // Quitar la clase activa de todas las pestañas
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Mostrar el contenido seleccionado
    document.getElementById(tabId).classList.add('active');

    // Activar la pestaña seleccionada
    event.target.classList.add('active');
}

// Selecciona el botón "Registrarse"
const registerButton = document.getElementById('btn-register');

// Agrega un evento para abrir otra pestaña
registerButton.addEventListener('click', () => {
    window.open('register.html', '_blank'); // Abre register.html en una nueva pestaña
});

// Selecciona el botón "Iniciar Sesión"
const loginButton = document.getElementById('btn-login');

// Agrega un evento para abrir otra pestaña
loginButton.addEventListener('click', () => {
    window.open('login.html', '_blank'); // Abre login.html en una nueva pestaña
});
