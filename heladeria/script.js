const stock = [
    { sabor: "Crema del Cielo", precio: 2500 },
    { sabor: "Chocolate Amargo", precio: 2800 },
    { sabor: "Limón de Pica", precio: 2200 }
];
const contenedor = document.getElementById('app-helados');
stock.forEach(item => {
    contenedor.innerHTML += `
        <div class="card">
            <h3>${item.sabor}</h3>
            <strong>Precio: $${item.precio}</strong>
        </div>`;
});
