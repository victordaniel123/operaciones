document.addEventListener('click', function(event) {
    var menu = document.querySelector('.menu');
    var menuIcon = document.querySelector('.menu-container');

    // Verificar si el clic ocurrió dentro del área del menú
    if (menuIcon.contains(event.target)) {
        menu.classList.toggle('active'); // Alterna la clase 'active' del menú
    } else if (menu.classList.contains('active')) {
        menu.classList.remove('active'); // Oculta el menú si está abierto y se hace clic fuera de él
    }
});
