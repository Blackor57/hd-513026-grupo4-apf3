const tarjetas = [
    {
        imagen: "https://wallpapercave.com/wp/wp14769882.jpg",
        titulo: "Explora el Mundo Jurásico",
        descripcion: "Vive una aventura única entre dinosaurios reales en nuestro parque temático. ¡No te lo pierdas!",
        actualizado: "Descubre más ->"
    },
    {
        imagen: "https://i.redd.it/p1w9dt7oplsd1.jpeg",
        titulo: "Dinosaurios Marinos",
        descripcion: "Sumérgete en el océano prehistórico y conoce a los reptiles más grandes que jamás existieron.",
        actualizado: "Descubre más ->"
    },
    {
        imagen: "https://s0.smartresize.com/wallpaper/447/873/HD-wallpaper-logo-movie-jurassic-park-jurassic-world-jurassic-world-dominion.jpg",
        titulo: "Entrada Jurassic Gold",
        descripcion: "Ahorra un 30% en tu pase especial y accede a zonas exclusivas, espectáculos y encuentros cercanos.",
        actualizado: "Descubre más ->"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const contenedor = document.getElementById('cards-container');

    tarjetas.forEach(tarjeta => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4'; // Cada tarjeta ocupa 1/3 de fila

        const card = document.createElement('div');
        card.className = 'card';
        card.style.minHeight = '300px';
        card.style.height = '300px';

        const row = document.createElement('div');
        row.className = 'row g-0 h-100';

        const colImg = document.createElement('div');
        colImg.className = 'col-md-4 h-100';

        const img = document.createElement('img');
        img.src = tarjeta.imagen;
        img.className = 'img-fluid rounded-start h-100 object-fit-cover';
        img.alt = tarjeta.titulo;

        colImg.appendChild(img);

        const colContent = document.createElement('div');
        colContent.className = 'col-md-8 h-100';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body d-flex flex-column justify-content-center h-100';

        const titulo = document.createElement('h5');
        titulo.className = 'card-title';
        titulo.textContent = tarjeta.titulo;

        const descripcion = document.createElement('p');
        descripcion.className = 'card-text';
        descripcion.textContent = tarjeta.descripcion;

        const lastUpdated = document.createElement('p');
        lastUpdated.className = 'card-text';
        lastUpdated.innerHTML = `<small class="text-muted">${tarjeta.actualizado}</small>`;

        cardBody.appendChild(titulo);
        cardBody.appendChild(descripcion);
        cardBody.appendChild(lastUpdated);

        colContent.appendChild(cardBody);

        row.appendChild(colImg);
        row.appendChild(colContent);
        card.appendChild(row);
        col.appendChild(card);
        contenedor.appendChild(col);
    });
});