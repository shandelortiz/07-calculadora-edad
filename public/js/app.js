// Se espera a que el contenido DOM este completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Se obtiene el formulario y el contenedor donde mostraremos el resultado
    const ageForm = document.getElementById('ageForm');
    const result = document.getElementById('result');

    // Se escucha al evento submit del formulario
    ageForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita que el formulario recargue la pagina

        // Se obtiene la fecha ingresada por el usuario
        const birthdateInput = document.getElementById('birthdate').value;

        // Si el campo esta vacio, mostramos un mensaje de eror
        if (!birthdateInput) {
            result.textContent = 'Por favor, ingresa la fecha de nacimiento!'
            return
        }

        // Convertimos la fecha de nacimiento a un objeto DATE
        const birthdate = new Date(birthdateInput);
        const today = new Date(); // Obtenemos la fecha actual

        // Calculamos la edad restando los años
        let age = today. getFullYear() - birthdate.getFullYear();

        // Se verifica si ya paso el cumpleaños este año
        const hasHadBirthdayThisYear = 
            today.getMonth() > birthdate.getMonth() ||
            (today.getMonth() === birthdate.getMonth () && today.getDate() >= birthdate.getDate());

        if (!hasHadBirthdayThisYear) {
            age--;
        }

        // Se muestra el resultado
        result.textContent = `Tienes ${ age } años!`
    });
});