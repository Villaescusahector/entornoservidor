const coches = [
    {
        marca: "Seat",
        modelo: "Ibiza",
        precio: 18000
    },
    {
        marca: "Toyota",
        modelo: "Corolla",
        precio: 25000
    },
    {
        marca: "BMW",
        modelo: "Serie 3",
        precio: 42000
    }
];


const btnCoches = document.getElementById("btnCoches");
const resultado = document.getElementById("resultado");


btnCoches.addEventListener("click", () => {

    resultado.innerHTML = "";

    coches.forEach(coche => {

        resultado.innerHTML += `
            <div class="coche">
                <h3>${coche.marca} ${coche.modelo}</h3>
                <p>Precio: ${coche.precio} €</p>
            </div>
        `;
    });

});