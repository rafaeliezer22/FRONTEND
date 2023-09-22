// Supongamos que tienes un arreglo de canchas
const canchas = [
    { nombre: "Cancha 1", disponibilidad: true },
    { nombre: "Cancha 2", disponibilidad: false },
    // Agrega más canchas aquí
];

const canchasContainer = document.getElementById("canchas");

// Función para mostrar la lista de canchas
function mostrarCanchas() {
    canchasContainer.innerHTML = "";
    canchas.forEach((cancha, index) => {
        const canchaDiv = document.createElement("div");
        canchaDiv.classList.add("cancha");
        canchaDiv.innerHTML = `
            <h2>${cancha.nombre}</h2>
            <p>Disponibilidad: ${cancha.disponibilidad ? 'Disponible' : 'No disponible'}</p>
            <button class="reservar" onclick="reservarCancha(${index})">Reservar</button>
        `;
        canchasContainer.appendChild(canchaDiv);
    });
}

// Función para reservar una cancha
function reservarCancha(index) {
    if (canchas[index].disponibilidad) {
        alert(`Has reservado la ${canchas[index].nombre}`);
        // Aquí puedes agregar la lógica para actualizar la disponibilidad en la base de datos
        canchas[index].disponibilidad = false;
        mostrarCanchas(); // Actualiza la lista de canchas
    } else {
        alert(`La ${canchas[index].nombre} no está disponible.`);
    }
}

// Mostrar la lista de canchas al cargar la página
mostrarCanchas();
