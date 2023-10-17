document.addEventListener("DOMContentLoaded", function () {
    // Simulamos la información de las canchas en un arreglo
    const canchasData = [
        { id: 1, nombre: "Cancha Fútbol 1", precio: 2000, tipo_cancha: "Fútbol", horario:"17hs",disponible: true },
        { id: 2, nombre: "Cancha Fútbol 2", precio: 2000, tipo_cancha: "Fútbol", horario:"18hs", disponible: true },
        { id: 3, nombre: "Cancha Fútbol 3", precio: 2000, tipo_cancha: "Fútbol", horario:"19hs", disponible: true },
        { id: 4, nombre: "Cancha Fútbol 4", precio: 2000, tipo_cancha: "Fútbol", horario:"20hs", disponible: true },
        { id: 5, nombre: "Cancha Padel 1", precio: 2000, tipo_cancha: "Padel", horario:"17hs", disponible: true },
        { id: 6, nombre: "Cancha Padel 2", precio: 2000, tipo_cancha: "Padel", horario:"18hs", disponible: true },
        { id: 7, nombre: "Cancha Padel 3", precio: 2000, tipo_cancha: "Padel", horario:"19hs",disponible: true },
        { id: 8, nombre: "Cancha Padel 4", precio: 2000, tipo_cancha: "Padel", horario:"20hs", disponible: true },
        { id: 9, nombre: "Cancha Tenis 1", precio: 2000, tipo_cancha: "Tenis", horario:"17hs",disponible: true },
        { id: 10, nombre: "Cancha Tenis 2", precio: 2000, tipo_cancha: "Tenis", horario:"18hs", disponible: true },
        { id: 11, nombre: "Cancha Tenis 3", precio: 2000, tipo_cancha: "Tenis", horario:"19hs", disponible: true },
        { id: 12, nombre: "Cancha Tenis 4", precio: 2000, tipo_cancha: "Tenis", horario:"20hs",disponible: true },
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
                <p>Horario: ${cancha.horario}</p>
                <p>Precio: $${cancha.precio} para reservar</p>
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
            <p>Has reservado la ${reservaCancha.nombre} por $${reservaCancha.precio} por hora.</p>
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

    //accedemos a los elementos del DOM
    const fecha = document.querySelector("#f_reserva");
    const tipo_cancha =document.querySelector("#t_reserva");
    const formulario = document.querySelector("#formulario_busqueda");
    
    //validamos el formulario
    const validationForm = (event) =>{
       let validation= true;
       if (fecha.value === ""){
            const p  = document.createElement("p");
            p.innerHTML= "<b>Debes completar el campo fecha</b>"
            formulario.appendChild(p)
            event.preventDefault();
            validation=false;
       }
       if (validation) {
        //si esta ok la validacion almacenamos los datos en el servidor

        
        localStorage.setItem("f_reserva",fecha.value)
        localStorage.setItem("t_reserva",tipo_cancha.value)
       }
    }

    //llamar a la funcion para validar el formulario de busqueda
    formulario.addEventListener("submit",validationForm);

    //Funcion para filtrar
    function filtrarPorTipoCancha(){
      const tipoDeCanchaLeida = tipo_cancha.value //deberia ser el del local storage
      const filtrados= canchasData.filter (cancha => cancha.tipo_cancha === tipoDeCanchaLeida)
      
    }





});
