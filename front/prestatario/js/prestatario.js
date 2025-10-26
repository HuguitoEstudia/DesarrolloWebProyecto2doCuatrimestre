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
	const item_id = document.getElementById("prestatario_update_id").value;

	const updatePrestatario = {
		nombre: document.getElementById("prestatario_update_nombre").value,
		apellido: document.getElementById("prestatario_update_apellido").value,
		dni: document.getElementById("prestatario_update_dni").value,
		direccion: document.getElementById("prestatario_update_direccion").value,
		telefono: document.getElementById("prestatario_update_telefono").value,
		email: document.getElementById("prestatario_update_email").value,
		estado_empleo: document.getElementById("prestatario_update_estado_empleo").checked,
        ocupacion: document.getElementById("prestatario_update_ocupacion").value,
		ingreso_anual: document.getElementById("prestatario_update_ingreso_anual").value
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
	const item_id = document.getElementById("prestatario_id_delete").value;

	const response = await fetch(`${BASE_URL}/delete_prestatario/?item_id=${item_id}`, {
		method: "DELETE"
	});

	const items = await response.json();

	const contenedor = document.getElementById("prestatarios_pantalla");

	contenedor.innerHTML = `<p>${JSON.stringify(items)}</p>`;
}

async function find_all_prestatario() {
	const response = await fetch(`${BASE_URL}/find_all_prestatario/`);

	const items = await response.json();

	const contenedor = document.getElementById("prestatarios_pantalla");

	contenedor.innerHTML = items.map((prestatario) => `<p>${JSON.stringify(prestatario)}</p>`).join("");
}

async function find_prestatario_by_id() {
	const item_id = document.getElementById("prestatario_id").value;

	const response = await fetch(`${BASE_URL}/find_prestatario_by_id/?item_id=${item_id}`);

	const items = await response.json();

	const contenedor = document.getElementById("prestatarios_pantalla");

	contenedor.innerHTML = `<p>${JSON.stringify(items)}</p>`;
}

async function find_prestatario_by_dni() {
	const item_dni = document.getElementById("prestatario_dni").value;

	const response = await fetch(`${BASE_URL}/find_prestatario_by_dni/?item_dni=${item_dni}`);

	const items = await response.json();

	const contenedor = document.getElementById("prestatarios_pantalla");

	contenedor.innerHTML = `<p>${JSON.stringify(items)}</p>`;
}

async function find_prestatario_by_nombre_apellido() {
	const item_nombre = document.getElementById("prestatario_nombre").value;

	const item_apellido = document.getElementById("prestatario_apellido").value;

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

