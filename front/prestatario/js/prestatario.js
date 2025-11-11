const BASE_URL = "http://127.0.0.1:8000";

async function create_prestatario(event) {
	event.preventDefault();
	const nuevoPrestatario = {
		nombre: document.getElementById("nombre").value,
		apellido: document.getElementById("apellido").value,
		dni: document.getElementById("dni").value,
		direccion: document.getElementById("direccion").value,
		telefono: document.getElementById("telefono").value,
		email: document.getElementById("email").value,
		estado_empleo: document.getElementById("estado_empleo").checked,
		ocupacion: document.getElementById("ocupacion").value,
		ingreso_anual: document.getElementById("ingreso_anual").value,
	};

	const response = await fetch(`${BASE_URL}/create_prestatario/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(nuevoPrestatario),
	});

	// const resultado = await response.json();

	// const contenedor = document.getElementById("prestatarios_pantalla");
	// contenedor.innerHTML = `<p>${JSON.stringify(resultado)}</p>`;
}

async function update_prestatario(event) {
	event.preventDefault();
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
		ingreso_anual: document.getElementById("prestatario_update_ingreso_anual").value,
	};

	const response = await fetch(`${BASE_URL}/update_prestatario/?item_id=${item_id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(updatePrestatario),
	});

	// const items = await response.json();

	// const contenedor = document.getElementById("prestatarios_pantalla");

	// contenedor.innerHTML = `<p>${JSON.stringify(items)}</p>`;
}

async function delete_prestatario(event, item_id) {
	event.preventDefault();

	const response = await fetch(`${BASE_URL}/delete_prestatario/?item_id=${item_id}`, {
		method: "DELETE",
	});

	const items = await response.json();

	const contenedor = document.getElementById("prestatarios_pantalla");

	if (items == false) {
		contenedor.innerHTML = `<div class="items_recuperados">` + `<p>No se pudo eliminar, existen prestamos asociados al Prestatario</p>` + `</div>`;
	} else {
		contenedor.innerHTML = `<p>${JSON.stringify(items)}</p>`;
	}
}

async function find_all_prestatario(event) {
	event.preventDefault();
	const response = await fetch(`${BASE_URL}/find_all_prestatario/`);

	const items = await response.json();

	const contenedor = document.getElementById("prestatarios_pantalla");

	if (items == false) {
		contenedor.innerHTML = `<div class="items_recuperados">` + `<p>No se encontraron Prestatarios</p>` + `</div>`;
	} else {
		contenedor.innerHTML = items.map((prestatario) => devolverinnerHTML(prestatario)).join("");
	}
}

async function find_prestatario_by_id(event) {
	event.preventDefault();
	const item_id = document.getElementById("prestatario_id").value;

	const response = await fetch(`${BASE_URL}/find_prestatario_by_id/?item_id=${item_id}`);

	const items = await response.json();

	const contenedor = document.getElementById("prestatarios_pantalla");

	if (items == false) {
		contenedor.innerHTML = `<div class="items_recuperados">` + `<p>No se encontraron Prestatarios</p>` + `</div>`;
	} else {
		contenedor.innerHTML = devolverinnerHTML(items);
	}
}

async function find_prestatario_by_dni(event) {
	event.preventDefault();
	const item_dni = document.getElementById("prestatario_dni").value;

	const response = await fetch(`${BASE_URL}/find_prestatario_by_dni/?item_dni=${item_dni}`);

	const items = await response.json();

	const contenedor = document.getElementById("prestatarios_pantalla");

	if (items == false) {
		contenedor.innerHTML = `<div class="items_recuperados">` + `<p>No se encontraron Prestatarios</p>` + `</div>`;
	} else {
		contenedor.innerHTML = devolverinnerHTML(items);
	}
}

async function find_prestatario_by_nombre_apellido(event) {
	event.preventDefault();
	const item_nombre = document.getElementById("prestatario_nombre").value;

	const item_apellido = document.getElementById("prestatario_apellido").value;

	const response = await fetch(`${BASE_URL}/find_prestatario_by_nombre_apellido/?item_nombre=${item_nombre}&item_apellido=${item_apellido}`);

	const items = await response.json();

	const contenedor = document.getElementById("prestatarios_pantalla");

	if (items == false) {
		contenedor.innerHTML = `<div class="items_recuperados">` + `<p>No se encontraron Prestatarios</p>` + `</div>`;
	} else {
		contenedor.innerHTML = items.map((prestatario) => devolverinnerHTML(prestatario)).join("");
	}
}

async function find_prestatario_by_prestamo(event) {
	event.preventDefault();
	const prestamo_id = document.getElementById("prestamo_id").value;

	const response = await fetch(`${BASE_URL}/find_prestatario_by_prestamo/?prestamo_id=${prestamo_id}`);

	const items = await response.json();

	const contenedor = document.getElementById("prestatarios_pantalla");

	if (items == false) {
		contenedor.innerHTML = `<div class="items_recuperados">` + `<p>No se encontraron Prestatarios</p>` + `</div>`;
	} else {
		contenedor.innerHTML = devolverinnerHTML(items);
	}
}

function devolverinnerHTML(items) {
	return (
		`<div class="items_recuperados">` +
		`<p><strong>ID:</strong> ${items.id}</p>` +
		`<p><strong>Nombre:</strong> ${items.nombre}</p>` +
		`<p><strong>Apellido:</strong> ${items.apellido}</p>` +
		`<p><strong>Dni:</strong> ${items.dni}</p>` +
		`<p><strong>Direccion:</strong> ${items.direccion}</p>` +
		`<p><strong>Telefono:</strong> ${items.telefono}</p>` +
		`<p><strong>Email:</strong> ${items.email}</p>` +
		`<p><strong>Estado Empleo:</strong> ${items.estado_empleo ? "Empleado" : "Desempleado"}</p>` +
		`<p><strong>Ocupacion:</strong> ${items.ocupacion}</p>` +
		`<p><strong>Ingreso Anual:</strong> ${items.ingreso_anual}</p>` +
		`<button onclick="completarFormularioUpdate(${items.id})"><strong>Actualizar</strong></button>` +
		`<button onclick="delete_prestatario(event,${items.id})"><strong>Eliminar</strong></button>` +
		`</div>`
	);
}

async function completarFormularioUpdate(item_id) {
	const response = await fetch(`${BASE_URL}/find_prestatario_by_id/?item_id=${item_id}`);

	const items = await response.json();

	// asigna valores al formulario de "actualizar"
	document.getElementById("prestatario_update_id").value = items.id;
	document.getElementById("prestatario_update_nombre").value = items.nombre;
	document.getElementById("prestatario_update_apellido").value = items.apellido;
	document.getElementById("prestatario_update_dni").value = items.dni;
	document.getElementById("prestatario_update_direccion").value = items.direccion;
	document.getElementById("prestatario_update_telefono").value = items.telefono;
	document.getElementById("prestatario_update_email").value = items.email;
	document.getElementById("prestatario_update_estado_empleo").checked = items.estado_empleo;
	document.getElementById("prestatario_update_ocupacion").value = items.ocupacion;
	document.getElementById("prestatario_update_ingreso_anual").value = items.ingreso_anual;

	// abrir la pestaña "Actualizar" (simula click en el tab)
	const tab = document.querySelector('.tab-btn[data-target="actualizar"]');
	if (tab) tab.click();

	// opcional: desplazar el panel de actualizar a la vista
	const panel = document.getElementById("actualizar");
	if (panel) panel.scrollIntoView({ behavior: "smooth", block: "center" });
}

(function () {
	const tabs = document.querySelectorAll(".tab-btn");
	tabs.forEach((btn) => {
		btn.addEventListener("click", () => {
			document.querySelectorAll(".tab-btn").forEach((b) => {
				b.classList.remove("active");
				b.setAttribute("aria-selected", "false");
			});
			document.querySelectorAll(".panel").forEach((p) => p.classList.remove("active"));
			btn.classList.add("active");
			btn.setAttribute("aria-selected", "true");
			const target = document.getElementById(btn.dataset.target);
			if (target) target.classList.add("active");
		});
	});
})();
