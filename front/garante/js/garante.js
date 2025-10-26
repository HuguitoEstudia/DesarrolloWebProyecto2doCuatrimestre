const BASE_URL = "http://127.0.0.1:8000";

async function find_all_garante() {
	const response = await fetch(`${BASE_URL}/find_all_garante/`);

	const garantes = await response.json();

	const contenedor = document.getElementById("garantes_pantalla");

	contenedor.innerHTML = garantes
		.map((garante) => `<p>${JSON.stringify(garante)}</p>`)
		.join("");
}

async function find_garante_by_id() {
	const response = await fetch(`${BASE_URL}/find_garante_by_id/`);

	const garantes = await response.json();

	const contenedor = document.getElementById("garantes_pantalla");

	contenedor.innerHTML = garantes
		.map((garante) => `<p>${JSON.stringify(garante)}</p>`)
		.join("");
}

async function find_garante_by_dni() {
	const response = await fetch(`${BASE_URL}/find_garante_by_dni/`);

	const garantes = await response.json();

	const contenedor = document.getElementById("garantes_pantalla");

	contenedor.innerHTML = garantes
		.map((garante) => `<p>${JSON.stringify(garante)}</p>`)
		.join("");
}

async function find_garante_by_nombre_apellido() {
	const response = await fetch(`${BASE_URL}/find_garante_by_nombre_apellido/`);

	const garantes = await response.json();

	const contenedor = document.getElementById("garantes_pantalla");

	contenedor.innerHTML = garantes
		.map((garante) => `<p>${JSON.stringify(garante)}</p>`)
		.join("");
}

async function find_garante_by_prestamo() {
	const response = await fetch(`${BASE_URL}/find_garante_by_prestamo/`);

	const garantes = await response.json();

	const contenedor = document.getElementById("garantes_pantalla");

	contenedor.innerHTML = garantes
		.map((garante) => `<p>${JSON.stringify(garante)}</p>`)
		.join("");
}
