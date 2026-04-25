// Configuración de Supabase - Agencia Panadería
const SUPABASE_URL = 'https://kqwrenxhnqtgptklpjoo.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtxd3JlbnhobnF0Z3B0a2xwam9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5OTA3MTgsImV4cCI6MjA5MjU2NjcxOH0.8cFiYiUGZvd3rqDUifroFc8I4ZERNN2M74FhuI8achQ';

async function cargarProductos() {
    const contenedor = document.getElementById('lista-productos');
    
    try {
        const respuesta = await fetch(`${SUPABASE_URL}/rest/v1/productos_panaderia?select=*`, {
            headers: {
                'apikey': SUPABASE_KEY,
                'Authorization': `Bearer ${SUPABASE_KEY}`
            }
        });
        
        if (!respuesta.ok) throw new Error('Error en la respuesta de la red');
        
        const productos = await respuesta.json();
        console.log("Datos de PostgreSQL recibidos:", productos);
        
        // Limpiar el mensaje de carga y mostrar los productos
        contenedor.innerHTML = '';
        
        productos.forEach(p => {
            const div = document.createElement('div');
            div.style.padding = '10px';
            div.style.borderBottom = '1px solid #eee';
            div.innerHTML = `
                <strong>🍞 ${p.nombre}</strong> <br>
                Precio: $${p.precio.toLocaleString('es-CL')} | Stock: ${p.stock} unidades
            `;
            contenedor.appendChild(div);
        });
        
    } catch (error) {
        console.error("Error al conectar con Supabase:", error);
        contenedor.innerHTML = 'Error al cargar los productos. Revisa la consola.';
    }
}

// Iniciar la carga
cargarProductos();
