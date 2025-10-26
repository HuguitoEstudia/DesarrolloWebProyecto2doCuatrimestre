const BASE_URL = "http://127.0.0.1:8000";

async function create_prestatario() {
	const nuevoPrestatario = {
		nombre: document.getElementById("nombre").value,
		apellido: document.getElementById("apellido").value,
		dni: document.getElementById("dni").value,
		direccion: document.getElementById("direccion").value,
		telefono: document.getElementById("telefono").value,
		email: document.getElementById("email").value,
        estado_empleo: document.getElementById("estado_empleo").checked,
        ocupacion: document.getElementById("ocupacion").value,
		ingreso_anual: document.getElementById("ingreso_anual").value
	};

	const response = await fetch(`${BASE_URL}/create_prestatario/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(nuevoPrestatario),
	});

	const resultado = await response.json();

	const contenedor = document.getElementById("prestatarios_pantalla");
	contenedor.innerHTML = `<p>${JSON.stringify(resultado)}</p>`;
}

async function update_prestatario() {
	const item_id = document.getElementById("update_id").value;

	const updatePrestatario = {
		nombre: document.getElementById("update_nombre").value,
		apellido: document.getElementById("update_apellido").value,
		dni: document.getElementById("update_dni").value,
		direccion: document.getElementById("update_direccion").value,
		telefono: document.getElementById("update_telefono").value,
		email: document.getElementById("update_email").value,
		estado_empleo: document.getElementById("update_estado_empleo").checked,
        ocupacion: document.getElementById("update_ocupacion").value,
		ingreso_anual: document.getElementById("update_ingreso_anual").value
	};

	const response = await fetch(`${BASE_URL}/update_prestatario/?item_id=${item_id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(updatePrestatario),
	});

	const items = await response.json();

	const contenedor = document.getElementById("prestatarios_pantalla");

	contenedor.innerHTML = `<p>${JSON.stringify(items)}</p>`;
}

async function delete_prestatario() {
	const item_id = document.getElementById("item_id_delete").value;

	const response = await fetch(`${BASE_URL}/delete_prestatario/?item_id=${item_id}`, {
		method: "DELETE"
	});

	const items = await response.json();

	const contenedor = document.getElementById("prestatarios_pantalla");

	contenedor.innerHTML = `<p>${JSON.stringify(items)}</p>`;
}

async function find_all_prestamo() {
	const response = await fetch(`${BASE_URL}/find_all_prestamo/`);

	const items = await response.json();

	const contenedor = document.getElementById("prestamos_pantalla");

	contenedor.innerHTML = items.map((prestamo) => `<p>${JSON.stringify(prestamo)}</p>`).join("");
}

async function find_prestamo_by_id() {
	const item_id = document.getElementById("item_id").value;

	const response = await fetch(`${BASE_URL}/find_prestamo_by_id/?item_id=${item_id}`);

	const items = await response.json();

	const contenedor = document.getElementById("prestamos_pantalla");

	contenedor.innerHTML = `<p>${JSON.stringify(items)}</p>`;
}

async function find_prestamo_by_mayo_que_monto() {
	const item_monto = document.getElementById("mayo_que_monto").value;

	const response = await fetch(`${BASE_URL}/find_prestamo_by_mayo_que_monto/?item_monto=${item_monto}`);

	const items = await response.json();

	const contenedor = document.getElementById("prestamos_pantalla");

	contenedor.innerHTML = `<p>${JSON.stringify(items)}</p>`;
}

async function find_prestamo_by_menor_que_monto() {
	const item_monto = document.getElementById("menor_que_monto").value;

	const response = await fetch(`${BASE_URL}/find_prestamo_by_menor_que_monto/?item_monto=${item_monto}`);

	const items = await response.json();

	const contenedor = document.getElementById("prestamos_pantalla");

	contenedor.innerHTML = `<p>${JSON.stringify(items)}</p>`;
}

async function find_prestatario_by_nombre_apellido() {
	const item_nombre = document.getElementById("item_nombre").value;

	const item_apellido = document.getElementById("item_apellido").value;

	const response = await fetch(
		`${BASE_URL}/find_prestatario_by_nombre_apellido/?item_nombre=${item_nombre}&item_apellido=${item_apellido}`
	);

	const items = await response.json();

	const contenedor = document.getElementById("prestatarios_pantalla");

	contenedor.innerHTML = `<p>${JSON.stringify(items)}</p>`;
}

async function find_prestatario_by_prestamo() {
	const prestamo_id = document.getElementById("prestamo_id").value;
	
	const response = await fetch(`${BASE_URL}/find_prestatario_by_prestamo/?prestamo_id=${prestamo_id}`);

	const items = await response.json();

	const contenedor = document.getElementById("prestatarios_pantalla");

	contenedor.innerHTML = `<p>${JSON.stringify(items)}</p>`;
}

