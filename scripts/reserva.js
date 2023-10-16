document.addEventListener("DOMContentLoaded", function () {
    // Simulamos la información de las canchas en un arreglo
    const canchasData = [
        { id: 1, nombre: "Cancha 1", precio: 20, disponible: true },
        { id: 2, nombre: "Cancha 2", precio: 25, disponible: false },
        { id: 3, nombre: "Cancha 3", precio: 15, disponible: true },
        { id: 4, nombre: "Cancha 4", precio: 25, disponible: true },
    ];
    const canchasContainer = document.querySelector(".canchas-container");
    const reservaMessage = document.getElementById("reserva-message");
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-content");
    const confirmarBtn = document.getElementById("confirmar-btn");
    const cancelarBtn = document.getElementById("cancelar-btn");

    let reservaCancha = null; // Almacena la cancha reservada actualmente

    // Función para mostrar las canchas en la página
    function mostrarCanchas() {
        canchasContainer.innerHTML = "";

        canchasData.forEach(cancha => {
            const canchaCard = document.createElement("div");
            canchaCard.classList.add("cancha-card");

            const estado = cancha.disponible ? "Disponible" : "No disponible";
            canchaCard.innerHTML = `
                <h2>${cancha.nombre}</h2>
                <img src="https://images.vexels.com/media/users/3/146856/isolated/preview/d8bb6dc5ecf8241bd7e298e6883f715c-icono-de-campo-de-f-uacute-tbol-by-vexels.png" alt="Imagen de la cancha ${cancha.nombre}" width="200" height="150">
                <p>Precio: $${cancha.precio} por hora</p>
                <p>Estado: ${estado}</p>
                <button class="reservar-btn" data-id="${cancha.id}">Reservar</button>
            `;

            canchaCard.querySelector(".reservar-btn").addEventListener("click", () => {
                if (cancha.disponible) {
                    reservaCancha = cancha;
                    mostrarModal();
                } else {
                    alert(`Lo siento, la Cancha ${cancha.nombre} no está disponible.`);
                }
            });

            canchasContainer.appendChild(canchaCard);
        });
    }

    // Función para mostrar la ventana modal
    function mostrarModal() {
        modal.style.display = "block";
        modalContent.innerHTML = `
            <h2>Detalles de la Reserva</h2>
            <p>Has reservado la Cancha ${reservaCancha.nombre} por $${reservaCancha.precio} por hora.</p>
            <button id="confirmar-btn">Confirmar/Pagar</button>
            <button id="cancelar-btn">Cancelar</button>
        `;

        // Agregar eventos a los botones de la modal
        document.getElementById("confirmar-btn").addEventListener("click", confirmarReserva);
        document.getElementById("cancelar-btn").addEventListener("click", cancelarReserva);
    }

    // Función para confirmar la reserva
    function confirmarReserva() {
        reservaCancha.disponible = false;
        mostrarMensajeReserva(reservaCancha);
        cerrarModal();
    }

    // Función para cancelar la reserva
    function cancelarReserva() {
        reservaCancha = null;
        cerrarModal();
    }

    // Función para cerrar la ventana modal
    function cerrarModal() {
        modal.style.display = "none";
    }

    // Llamamos a la función para mostrar las canchas al cargar la página
    mostrarCanchas();
});
