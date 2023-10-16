
const horariosDisponible = {
    "2023-10-16": {
        "Futbol1": [
            "09:00",
            "10:00",
            "14:00",
            // Agrega más horarios disponibles para esta cancha de fútbol
        ],
        "Futbol2": [
            "11:00",
            "15:00",
            // Agrega más horarios disponibles para esta cancha de fútbol
        ],
        "Futbol3": [
            // Horarios disponibles para la tercera cancha de fútbol
        ],
        "Futbol4": [
            // Horarios disponibles para la cuarta cancha de fútbol
        ],
        "Padel1": [
            "10:00",
            "12:00",
            "16:00",
            // Agrega más horarios disponibles para esta cancha de pádel
        ],
        "Padel2": [
            "11:00",
            "14:00",
            // Agrega más horarios disponibles para esta cancha de pádel
        ]
    },
    // Agrega más fechas con sus respectivos horarios disponibles
};

localStorage.setItem("horariosDisponibles", JSON.stringify(horariosDisponible));

// Obtener los horarios disponibles del Local Storage
        const horariosDisponibles = JSON.parse(localStorage.getItem('horariosDisponibles'));

        // Obtener el elemento de fecha del formulario
        const fechaInput = document.getElementById('fecha');
        // Obtener el elemento de cancha del formulario
        const canchaSelect = document.getElementById('cancha');

        // Llenar las fechas disponibles en el elemento input date
        fechaInput.setAttribute('min', Object.keys(horariosDisponibles)[0]); // Fecha mínima
        fechaInput.setAttribute('max', Object.keys(horariosDisponibles)[Object.keys(horariosDisponibles).length - 1]); // Fecha máxima

        // Actualizar las opciones de cancha cuando se cambia la fecha
        fechaInput.addEventListener('change', () => {
            const fechaSeleccionada = fechaInput.value;
            canchaSelect.innerHTML = ''; // Borra las opciones anteriores

            // Llenar las opciones de cancha según la fecha seleccionada
            Object.keys(horariosDisponibles[fechaSeleccionada]).forEach((cancha) => {
                canchaSelect.add(new Option(cancha, cancha));
            });
        });

        document.getElementById('reserva-form').addEventListener('submit', function (e) {
            e.preventDefault();

            const fecha = fechaInput.value;
            const cancha = canchaSelect.value;
            const horario = document.getElementById('horario').value;

            // Verifica si la fecha, cancha y horario seleccionados están disponibles
            if (horariosDisponibles[fecha] && horariosDisponibles[fecha][cancha] && horariosDisponibles[fecha][cancha].includes(horario)) {
                // Realiza la reserva
                // Aquí puedes agregar la lógica para actualizar los horarios disponibles y mostrar un mensaje de reserva exitosa.
                alert('Reserva exitosa');
            } else {
                alert('Lo siento, este horario no está disponible. Por favor, elige otra fecha, cancha o horario.');
            }
        });