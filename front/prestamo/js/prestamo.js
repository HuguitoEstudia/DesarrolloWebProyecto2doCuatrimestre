const BASE_URL = "http://127.0.0.1:8000";

async function create_prestamo() {
	const nuevoPrestamo = {
		monto: document.getElementById("monto").value,
		moneda: document.getElementById("moneda").value,
		tasa_interes: document.getElementById("tasa_interes").value,
		cuotas_totales: document.getElementById("cuotas_totales").value,
		fecha_prestamo: document.getElementById("fecha_prestamo").value,
		prestatario_id: document.getElementById("prestatario_id").value,
        garante_id: document.getElementById("garante_id").value
	};

	const response = await fetch(`${BASE_URL}/create_prestamo/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(nuevoPrestamo),
	});

	const resultado = await response.json();

	const contenedor = document.getElementById("prestamos_pantalla");
	contenedor.innerHTML = `<p>${JSON.stringify(resultado)}</p>`;
}

async function update_prestamo() {
	const item_id = document.getElementById("prestamo_update_id").value;

	const updatePrestamo = {
		monto: document.getElementById("prestamo_update_monto").value,
		moneda: document.getElementById("prestamo_update_moneda").value,
		tasa_interes: document.getElementById("prestamo_update_tasa_interes").value,
		cuotas_totales: document.getElementById("prestamo_update_cuotas_totales").value,
        cuotas_restantes: document.getElementById("prestamo_update_cuotas_restantes").value,
        monto_cuota: document.getElementById("prestamo_update_monto_cuota").value,
        monto_restante: document.getElementById("prestamo_update_monto_restante").value,
		fecha_prestamo: document.getElementById("prestamo_update_fecha_prestamo").value,
		prestatario_id: document.getElementById("prestamo_update_prestatario_id").value,
        garante_id: document.getElementById("prestamo_update_garante_id").value
	};

	const response = await fetch(`${BASE_URL}/update_prestamo/?item_id=${item_id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(updatePrestamo),
	});

	const items = await response.json();

	const contenedor = document.getElementById("prestamos_pantalla");

	contenedor.innerHTML = `<p>${JSON.stringify(items)}</p>`;
}

async function delete_prestamo() {
	const item_id = document.getElementById("item_id_delete").value;

	const response = await fetch(`${BASE_URL}/delete_prestamo/?item_id=${item_id}`, {
		method: "DELETE"
	});

	const items = await response.json();

	const contenedor = document.getElementById("prestamos_pantalla");

	contenedor.innerHTML = `<p>${JSON.stringify(items)}</p>`;
}

async function find_all_prestamo() {
	const response = await fetch(`${BASE_URL}/find_all_prestamo/`);

	const items = await response.json();

	const contenedor = document.getElementById("prestamos_pantalla");

	contenedor.innerHTML = items.map((prestamo) => `<p>${JSON.stringify(prestamo)}</p>`).join("");
}

async function find_prestamo_by_id() {
	const item_id = document.getElementById("prestamo_id").value;

	const response = await fetch(`${BASE_URL}/find_prestamo_by_id/?item_id=${item_id}`);

	const items = await response.json();

	const contenedor = document.getElementById("prestamos_pantalla");

	contenedor.innerHTML = `<p>${JSON.stringify(items)}</p>`;
}

async function find_prestamo_by_mayor_que_monto() {
	const item_monto = document.getElementById("prestamo_mayor_que_monto").value;

	const response = await fetch(`${BASE_URL}/find_prestamo_by_mayor_que_monto/?item_monto=${item_monto}`);

	const items = await response.json();

	const contenedor = document.getElementById("prestamos_pantalla");

	contenedor.innerHTML = `<p>${JSON.stringify(items)}</p>`;
}

async function find_prestamo_by_menor_que_monto() {
	const item_monto = document.getElementById("prestamo_menor_que_monto").value;

	const response = await fetch(`${BASE_URL}/find_prestamo_by_menor_que_monto/?item_monto=${item_monto}`);

	const items = await response.json();

	const contenedor = document.getElementById("prestamos_pantalla");

	contenedor.innerHTML = `<p>${JSON.stringify(items)}</p>`;
}

async function find_prestamo_by_fecha_prestamo() {
	const item_fecha_prestamo = document.getElementById("prestamo_fecha").value;

	const response = await fetch(`${BASE_URL}/find_prestamo_by_fecha_prestamo/?item_fecha_prestamo=${item_fecha_prestamo}`);

	const items = await response.json();

	const contenedor = document.getElementById("prestamos_pantalla");

	contenedor.innerHTML = `<p>${JSON.stringify(items)}</p>`;
}

async function find_prestamo_by_tasa_interes() {
	const item_tasa_interes = document.getElementById("prestamo_tasa_interes").value;

	const response = await fetch(`${BASE_URL}/find_prestamo_by_tasa_interes/?item_tasa_interes=${item_tasa_interes}`);

	const items = await response.json();

	const contenedor = document.getElementById("prestamos_pantalla");

	contenedor.innerHTML = `<p>${JSON.stringify(items)}</p>`;
}

async function find_prestamo_by_cuotas_totales() {
	const item_cuotas_totales = document.getElementById("prestamo_cuotas_totales").value;

	const response = await fetch(`${BASE_URL}/find_prestamo_by_cuotas_totales/?item_cuotas_totales=${item_cuotas_totales}`);

	const items = await response.json();

	const contenedor = document.getElementById("prestamos_pantalla");

	contenedor.innerHTML = `<p>${JSON.stringify(items)}</p>`;
}

async function find_prestamo_by_cuotas_restantes() {
	const item_cuotas_restantes = document.getElementById("prestamo_cuotas_restantes").value;

	const response = await fetch(`${BASE_URL}/find_prestamo_by_cuotas_restantes/?item_cuotas_restantes=${item_cuotas_restantes}`);

	const items = await response.json();

	const contenedor = document.getElementById("prestamos_pantalla");

	contenedor.innerHTML = `<p>${JSON.stringify(items)}</p>`;
}

async function find_prestamo_by_prestatario() {
	const item_id = document.getElementById("prestamo_prestatario_id").value;

	const response = await fetch(`${BASE_URL}/find_prestamo_by_prestatario/?item_id=${item_id}`);

	const items = await response.json();

	const contenedor = document.getElementById("prestamos_pantalla");

	contenedor.innerHTML = `<p>${JSON.stringify(items)}</p>`;
}

async function find_prestamo_by_garante() {
	const item_id = document.getElementById("prestamo_garante_id").value;

	const response = await fetch(`${BASE_URL}/find_prestamo_by_garante/?item_id=${item_id}`);

	const items = await response.json();

	const contenedor = document.getElementById("prestamos_pantalla");

	contenedor.innerHTML = `<p>${JSON.stringify(items)}</p>`;
}