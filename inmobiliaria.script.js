const SUPABASE_URL = 'https://kqwrenxhnqtgptklpjoo.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtxd3JlbnhobnF0Z3B0a2xwam9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5OTA3MTgsImV4cCI6MjA5MjU2NjcxOH0.8cFiYiUGZvd3rqDUifroFc8I4ZERNN2M74FhuI8achQ';

async function cargarPropiedades() {
    const tipo = document.getElementById('filtroTipo').value;
    const contenedor = document.getElementById('lista-propiedades');
    
    let url = `${SUPABASE_URL}/rest/v1/Tabla%20para%20inmobiliaria?select=*`;
    if (tipo) url += `&tipo=eq.${tipo}`;

    const res = await fetch(url, {
        headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
    });
    const datos = await res.json();
    
    contenedor.innerHTML = datos.map(p => `
        <div class="card">
            <img src="${p.imagen_url}">
            <div class="info">
                <h3>${p.titulo}</h3>
                <p>${p.ubicacion}</p>
                <p class="precio">$${p.precio.toLocaleString()}</p>
            </div>
        </div>
    `).join('');
}
cargarPropiedades();
