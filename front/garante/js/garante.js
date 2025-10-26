const BASE_URL = "http://127.0.0.1:8000";

async function create_garante() {
	const nuevoGarante = {
		nombre: document.getElementById("nombre").value,
		apellido: document.getElementById("apellido").value,
		dni: document.getElementById("dni").value,
		direccion: document.getElementById("direccion").value,
		telefono: document.getElementById("telefono").value,
		email: document.getElementById("email").value,
		ingreso_anual: document.getElementById("ingreso_anual").value,
		garante_descripcion: document.getElementById("garante_descripcion").value,
	};

	const response = await fetch(`${BASE_URL}/create_garante/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(nuevoGarante),
	});

	const resultado = await response.json();

	const contenedor = document.getElementById("garantes_pantalla");
	contenedor.innerHTML = `<p>${JSON.stringify(resultado)}</p>`;
}

async function update_garante() {
	const item_id = document.getElementById("update_id").value;

	const updateGarante = {
		nombre: document.getElementById("update_nombre").value,
		apellido: document.getElementById("update_apellido").value,
		dni: document.getElementById("update_dni").value,
		direccion: document.getElementById("update_direccion").value,
		telefono: document.getElementById("update_telefono").value,
		email: document.getElementById("update_email").value,
		ingreso_anual: document.getElementById("update_ingreso_anual").value,
		garante_descripcion: document.getElementById("update_garante_descripcion").value,
	};

	const response = await fetch(`${BASE_URL}/update_garante/?item_id=${item_id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(updateGarante),
	});

	const items = await response.json();

	const contenedor = document.getElementById("garantes_pantalla");

	contenedor.innerHTML = `<p>${JSON.stringify(items)}</p>`;
}

async function find_all_garante() {
	const response = await fetch(`${BASE_URL}/find_all_garante/`);

	const items = await response.json();

	const contenedor = document.getElementById("garantes_pantalla");

	contenedor.innerHTML = items.map((garante) => `<p>${JSON.stringify(garante)}</p>`).join("");
}

async function find_garante_by_id() {
	const item_id = document.getElementById("item_id").value;

	const response = await fetch(`${BASE_URL}/find_garante_by_id/?item_id=${item_id}`);

	const items = await response.json();

	const contenedor = document.getElementById("garantes_pantalla");

	contenedor.innerHTML = `<p>${JSON.stringify(items)}</p>`;
}

async function find_garante_by_dni() {
	const item_dni = document.getElementById("item_dni").value;

	const response = await fetch(`${BASE_URL}/find_garante_by_dni/?item_dni=${item_dni}`);

	const items = await response.json();

	const contenedor = document.getElementById("garantes_pantalla");

	contenedor.innerHTML = `<p>${JSON.stringify(items)}</p>`;
}

async function find_garante_by_nombre_apellido() {
	const item_nombre = document.getElementById("item_nombre").value;

	const item_apellido = document.getElementById("item_apellido").value;

	const response = await fetch(
		`${BASE_URL}/find_garante_by_nombre_apellido/?item_nombre=${item_nombre}&item_apellido=${item_apellido}`
	);

	const items = await response.json();

	const contenedor = document.getElementById("garantes_pantalla");

	contenedor.innerHTML = `<p>${JSON.stringify(items)}</p>`;
}

async function find_garante_by_prestamo(prestamo_id) {
	const response = await fetch(`${BASE_URL}/find_garante_by_prestamo/?prestamo_id=${prestamo_id}`);

	const garantes = await response.json();

	const contenedor = document.getElementById("garantes_pantalla");

	contenedor.innerHTML = garantes.map((garante) => `<p>${JSON.stringify(garante)}</p>`).join("");
}
