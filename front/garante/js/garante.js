const BASE_URL = "http://127.0.0.1:8000";

async function create_garante(event) {
	event.preventDefault();
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

async function update_garante(event) {
	event.preventDefault();
	const item_id = document.getElementById("garante_update_id").value;

	const updateGarante = {
		nombre: document.getElementById("garante_update_nombre").value,
		apellido: document.getElementById("garante_update_apellido").value,
		dni: document.getElementById("garante_update_dni").value,
		direccion: document.getElementById("garante_update_direccion").value,
		telefono: document.getElementById("garante_update_telefono").value,
		email: document.getElementById("garante_update_email").value,
		ingreso_anual: document.getElementById("garante_update_ingreso_anual").value,
		garante_descripcion: document.getElementById("garante_update_garante_descripcion").value,
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

async function delete_garante(event,item_id) {
	event.preventDefault();

	const response = await fetch(`${BASE_URL}/delete_garante/?item_id=${item_id}`, {
		method: "DELETE"
	});

	const items = await response.json();

	const contenedor = document.getElementById("garantes_pantalla");

	contenedor.innerHTML = `<p>${JSON.stringify(items)}</p>`;
}

async function find_all_garante(event) {
	event.preventDefault();
	const response = await fetch(`${BASE_URL}/find_all_garante/`);

	const items = await response.json();

	const contenedor = document.getElementById("garantes_pantalla");

	contenedor.innerHTML = items.map((garante) => devolverinnerHTML(garante)).join("");
}

async function find_garante_by_id(event) {
	event.preventDefault();
	const item_id = document.getElementById("garante_id").value;

	const response = await fetch(`${BASE_URL}/find_garante_by_id/?item_id=${item_id}`);

	const items = await response.json();

	const contenedor = document.getElementById("garantes_pantalla");

	contenedor.innerHTML = devolverinnerHTML(items);
}

async function find_garante_by_dni(event) {
	event.preventDefault();
	const item_dni = document.getElementById("garante_dni").value;

	const response = await fetch(`${BASE_URL}/find_garante_by_dni/?item_dni=${item_dni}`);

	const items = await response.json();

	const contenedor = document.getElementById("garantes_pantalla");

	contenedor.innerHTML = devolverinnerHTML(items);
}

async function find_garante_by_nombre_apellido(event) {
	event.preventDefault();
	const item_nombre = document.getElementById("garante_nombre").value;

	const item_apellido = document.getElementById("garante_apellido").value;

	const response = await fetch(
		`${BASE_URL}/find_garante_by_nombre_apellido/?item_nombre=${item_nombre}&item_apellido=${item_apellido}`
	);

	const items = await response.json();

	const contenedor = document.getElementById("garantes_pantalla");

	contenedor.innerHTML = items.map((garante) => devolverinnerHTML(garante)).join("");
}

async function find_garante_by_prestamo(event) {
	event.preventDefault();
	const prestamo_id = document.getElementById("prestamo_id").value;
	
	const response = await fetch(`${BASE_URL}/find_garante_by_prestamo/?prestamo_id=${prestamo_id}`);

	const items = await response.json();

	const contenedor = document.getElementById("garantes_pantalla");

	contenedor.innerHTML = devolverinnerHTML(items);
}

function devolverinnerHTML(items){
	return (
		`<div class="items_recuperados">` +
		`<p><strong>ID:</strong> ${items.id}</p>` +
		`<p><strong>Nombre:</strong> ${items.nombre}</p>` +
		`<p><strong>Apellido:</strong> ${items.apellido}</p>` +
		`<p><strong>Dni:</strong> ${items.dni}</p>` +
		`<p><strong>Direccion:</strong> ${items.direccion}</p>` +
		`<p><strong>Telefono:</strong> ${items.telefono}</p>` +
		`<p><strong>Email:</strong> ${items.email}</p>` +
		`<p><strong>Ingreso Anual:</strong> ${items.ingreso_anual}</p>` +
		`<p><strong>Descripcion:</strong> ${items.garante_descripcion}</p>` +
		`<button onclick="completarFormularioUpdate(${items.id})">Actualizar</button>` +
        `<button onclick="delete_garante(event,${items.id})">Eliminar</button>` +
		`</div>`
	);
}

async function completarFormularioUpdate(item_id) {
	const response = await fetch(`${BASE_URL}/find_garante_by_id/?item_id=${item_id}`);

	const items = await response.json();

	// asigna valores al formulario de "actualizar"
	document.getElementById("garante_update_id").value = items.id;
	document.getElementById("garante_update_nombre").value = items.nombre;
	document.getElementById("garante_update_apellido").value = items.apellido;
	document.getElementById("garante_update_dni").value = items.dni;
	document.getElementById("garante_update_direccion").value = items.direccion;
	document.getElementById("garante_update_telefono").value = items.telefono;
	document.getElementById("garante_update_email").value = items.email;
	document.getElementById("garante_update_ingreso_anual").value = items.ingreso_anual;
	document.getElementById("garante_update_garante_descripcion").value = items.garante_descripcion;

	// abrir la pestaña "Actualizar" (simula click en el tab)
	const tab = document.querySelector('.tab-btn[data-target="actualizar"]');
	if (tab) tab.click();

	// opcional: desplazar el panel de actualizar a la vista
	const panel = document.getElementById("actualizar");
	if (panel) panel.scrollIntoView({ behavior: "smooth", block: "center" });
}