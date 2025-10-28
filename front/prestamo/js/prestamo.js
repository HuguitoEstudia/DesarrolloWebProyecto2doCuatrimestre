const BASE_URL = "http://127.0.0.1:8000";

async function create_prestamo(event) {
	event.preventDefault();
	const nuevoPrestamo = {
		monto: document.getElementById("monto").value,
		moneda: document.getElementById("moneda").value,
		tasa_interes: document.getElementById("tasa_interes").value,
		cuotas_totales: document.getElementById("cuotas_totales").value,
		fecha_prestamo: document.getElementById("fecha_prestamo").value,
		prestatario_id: document.getElementById("prestatario_id").value,
		garante_id: document.getElementById("garante_id").value,
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

async function update_prestamo(event) {
	event.preventDefault();
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
		garante_id: document.getElementById("prestamo_update_garante_id").value,
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

async function delete_prestamo(event, item_id) {
	event.preventDefault();

	const response = await fetch(`${BASE_URL}/delete_prestamo/?item_id=${item_id}`, {
		method: "DELETE",
	});

	const items = await response.json();

	const contenedor = document.getElementById("prestamos_pantalla");
	
	if (items == false) {
		contenedor.innerHTML = `<div class="items_recuperados">` + `<p>No se pudo eliminar, existen deuda pendiente</p>` + `</div>`;
	} else {
		contenedor.innerHTML = `<p>${JSON.stringify(items)}</p>`;
	}
}

async function find_all_prestamo(event) {
	event.preventDefault();
	const response = await fetch(`${BASE_URL}/find_all_prestamo/`);

	const items = await response.json();

	const contenedor = document.getElementById("prestamos_pantalla");

	if (items == false) {
		contenedor.innerHTML = `<div class="items_recuperados">` + `<p>No se encontraron Prestamos</p>` + `</div>`;
	} else {
		const htmlArray = await Promise.all(items.map((prestamo) => devolverinnerHTML(prestamo)));
		contenedor.innerHTML = htmlArray.join("");
	}
}

async function find_prestamo_by_id(event) {
	event.preventDefault();
	const item_id = document.getElementById("prestamo_id").value;

	const response = await fetch(`${BASE_URL}/find_prestamo_by_id/?item_id=${item_id}`);

	const items = await response.json();

	const contenedor = document.getElementById("prestamos_pantalla");
	if (items == false) {
		contenedor.innerHTML = `<div class="items_recuperados">` + `<p>No se encontraron Prestamos</p>` + `</div>`;
	} else {
		const htmlArray = await Promise.all(items.map((prestamo) => devolverinnerHTML(prestamo)));
		contenedor.innerHTML = htmlArray.join("");
	}
}

async function find_prestamo_by_mayor_que_monto(event) {
	event.preventDefault();
	const item_monto = document.getElementById("prestamo_mayor_que_monto").value;

	const response = await fetch(`${BASE_URL}/find_prestamo_by_mayor_que_monto/?item_monto=${item_monto}`);

	const items = await response.json();

	const contenedor = document.getElementById("prestamos_pantalla");
	if (items == false) {
		contenedor.innerHTML = `<div class="items_recuperados">` + `<p>No se encontraron Prestamos</p>` + `</div>`;
	} else {
		const htmlArray = await Promise.all(items.map((prestamo) => devolverinnerHTML(prestamo)));
		contenedor.innerHTML = htmlArray.join("");
	}
}

async function find_prestamo_by_menor_que_monto(event) {
	event.preventDefault();
	const item_monto = document.getElementById("prestamo_menor_que_monto").value;

	const response = await fetch(`${BASE_URL}/find_prestamo_by_menor_que_monto/?item_monto=${item_monto}`);

	const items = await response.json();

	const contenedor = document.getElementById("prestamos_pantalla");
	if (items == false) {
		contenedor.innerHTML = `<div class="items_recuperados">` + `<p>No se encontraron Prestamos</p>` + `</div>`;
	} else {
		const htmlArray = await Promise.all(items.map((prestamo) => devolverinnerHTML(prestamo)));
		contenedor.innerHTML = htmlArray.join("");
	}
}

async function find_prestamo_by_fecha_prestamo(event) {
	event.preventDefault();
	const item_fecha_prestamo = document.getElementById("prestamo_fecha").value;

	const response = await fetch(
		`${BASE_URL}/find_prestamo_by_fecha_prestamo/?item_fecha_prestamo=${item_fecha_prestamo}`
	);

	const items = await response.json();

	const contenedor = document.getElementById("prestamos_pantalla");
	if (items == false) {
		contenedor.innerHTML = `<div class="items_recuperados">` + `<p>No se encontraron Prestamos</p>` + `</div>`;
	} else {
		const htmlArray = await Promise.all(items.map((prestamo) => devolverinnerHTML(prestamo)));
		contenedor.innerHTML = htmlArray.join("");
	}
}

async function find_prestamo_by_tasa_interes(event) {
	event.preventDefault();
	const item_tasa_interes = document.getElementById("prestamo_tasa_interes").value;

	const response = await fetch(`${BASE_URL}/find_prestamo_by_tasa_interes/?item_tasa_interes=${item_tasa_interes}`);

	const items = await response.json();

	const contenedor = document.getElementById("prestamos_pantalla");
	if (items == false) {
		contenedor.innerHTML = `<div class="items_recuperados">` + `<p>No se encontraron Prestamos</p>` + `</div>`;
	} else {
		const htmlArray = await Promise.all(items.map((prestamo) => devolverinnerHTML(prestamo)));
		contenedor.innerHTML = htmlArray.join("");
	}
}

async function find_prestamo_by_cuotas_totales(event) {
	event.preventDefault();
	const item_cuotas_totales = document.getElementById("prestamo_cuotas_totales").value;

	const response = await fetch(
		`${BASE_URL}/find_prestamo_by_cuotas_totales/?item_cuotas_totales=${item_cuotas_totales}`
	);

	const items = await response.json();

	const contenedor = document.getElementById("prestamos_pantalla");
	if (items == false) {
		contenedor.innerHTML = `<div class="items_recuperados">` + `<p>No se encontraron Prestamos</p>` + `</div>`;
	} else {
		const htmlArray = await Promise.all(items.map((prestamo) => devolverinnerHTML(prestamo)));
		contenedor.innerHTML = htmlArray.join("");
	}
}

async function find_prestamo_by_cuotas_restantes(event) {
	event.preventDefault();
	const item_cuotas_restantes = document.getElementById("prestamo_cuotas_restantes").value;

	const response = await fetch(
		`${BASE_URL}/find_prestamo_by_cuotas_restantes/?item_cuotas_restantes=${item_cuotas_restantes}`
	);

	const items = await response.json();

	const contenedor = document.getElementById("prestamos_pantalla");
	if (items == false) {
		contenedor.innerHTML = `<div class="items_recuperados">` + `<p>No se encontraron Prestamos</p>` + `</div>`;
	} else {
		const htmlArray = await Promise.all(items.map((prestamo) => devolverinnerHTML(prestamo)));
		contenedor.innerHTML = htmlArray.join("");
	}
}

async function find_prestamo_by_prestatario(event) {
	event.preventDefault();
	const item_id = document.getElementById("prestamo_prestatario_id").value;

	const response = await fetch(`${BASE_URL}/find_prestamo_by_prestatario/?item_id=${item_id}`);

	const items = await response.json();

	const contenedor = document.getElementById("prestamos_pantalla");
	if (items == false) {
		contenedor.innerHTML = `<div class="items_recuperados">` + `<p>No se encontraron Prestamos</p>` + `</div>`;
	} else {
		const htmlArray = await Promise.all(items.map((prestamo) => devolverinnerHTML(prestamo)));
		contenedor.innerHTML = htmlArray.join("");
	}
}

async function find_prestamo_by_garante(event) {
	event.preventDefault();
	const item_id = document.getElementById("prestamo_garante_id").value;

	const response = await fetch(`${BASE_URL}/find_prestamo_by_garante/?item_id=${item_id}`);

	const items = await response.json();

	const contenedor = document.getElementById("prestamos_pantalla");
	if (items == false) {
		contenedor.innerHTML = `<div class="items_recuperados">` + `<p>No se encontraron Prestamos</p>` + `</div>`;
	} else {
		const htmlArray = await Promise.all(items.map((prestamo) => devolverinnerHTML(prestamo)));
		contenedor.innerHTML = htmlArray.join("");
	}
}

async function devolverinnerHTML(items) {

	const response_prestatario = await fetch(`${BASE_URL}/find_prestatario_by_id/?item_id=${items.prestatario_id}`);

	const item_prestatario = await response_prestatario.json();

	const response_garante = await fetch(`${BASE_URL}/find_garante_by_id/?item_id=${items.garante_id}`);

	const item_garante = await response_garante.json();	

	return (
		`<div class="items_recuperados">` +
		`<p><strong>ID:</strong> ${items.id}</p>` +
		`<p><strong>Monto:</strong> ${items.monto}</p>` +
		`<p><strong>Moneda:</strong> ${items.moneda}</p>` +
		`<p><strong>Tasa de Interes:</strong> ${items.tasa_interes}</p>` +
		`<p><strong>Cuotas Totales:</strong> ${items.cuotas_totales}</p>` +
		`<p><strong>Cuotas Restantes:</strong> ${items.cuotas_restantes}</p>` +
		`<p><strong>Monto por Cuota:</strong> ${items.monto_cuota}</p>` +
		`<p><strong>Monto Restante:</strong> ${items.monto_restante}</p>` +
		`<p><strong>Fecha del Prestamo:</strong> ${items.fecha_prestamo}</p>` +
		`<p><strong>Prestatario:</strong> ${item_prestatario.nombre} ${item_prestatario.apellido} - <strong>DNI:</strong> ${item_prestatario.dni}</p>` +
		`<p><strong>Garante:</strong> ${item_garante.nombre} ${item_garante.apellido} - <strong>DNI:</strong> ${item_garante.dni}</p>` +
		`<button onclick="completarFormularioUpdate(${items.id})"><strong>Actualizar</strong></button>` +
		`<button onclick="delete_prestamo(event,${items.id})"><strong>Eliminar</strong></button>` +
		`</div>`
	);
}

async function completarFormularioUpdate(item_id) {
	const response = await fetch(`${BASE_URL}/find_prestamo_by_id/?item_id=${item_id}`);

	const items = await response.json();

	// asigna valores al formulario de "actualizar"
	document.getElementById("prestamo_update_id").value = items.id;
	document.getElementById("prestamo_update_monto").value = items.monto;
	document.getElementById("prestamo_update_moneda").value = items.moneda;
	document.getElementById("prestamo_update_tasa_interes").value = items.tasa_interes;
	document.getElementById("prestamo_update_cuotas_totales").value = items.cuotas_totales;
	document.getElementById("prestamo_update_cuotas_restantes").value = items.cuotas_restantes;
	document.getElementById("prestamo_update_monto_cuota").value = items.monto_cuota;
	document.getElementById("prestamo_update_monto_restante").value = items.monto_restante;
	document.getElementById("prestamo_update_fecha_prestamo").value = items.fecha_prestamo;
	document.getElementById("prestamo_update_prestatario_id").value = items.prestatario_id;
	document.getElementById("prestamo_update_garante_id").value = items.garante_id;

	// abrir la pestaña "Actualizar" (simula click en el tab)
	const tab = document.querySelector('.tab-btn[data-target="actualizar"]');
	if (tab) tab.click();

	// opcional: desplazar el panel de actualizar a la vista
	const panel = document.getElementById("actualizar");
	if (panel) panel.scrollIntoView({ behavior: "smooth", block: "center" });
}

async function llenarSelect(selectId, funcion) {
    const select = document.getElementById(selectId);

	const response = await fetch(`${BASE_URL}/${funcion}/`);

	const items = await response.json();
    
    items.forEach(objeto => {
        const option = document.createElement('option');
        option.value = objeto.id; // Valor que se enviará al servidor
        option.textContent = objeto.nombre+" "+objeto.apellido+" - DNI: "+objeto.dni; // Texto que verá el usuario
        select.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    llenarSelect('prestatario_id', "find_all_prestatario");
    llenarSelect('garante_id', "find_all_garante");
	llenarSelect('prestamo_update_prestatario_id', 'find_all_prestatario');
	llenarSelect('prestamo_update_garante_id', 'find_all_garante');
});


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