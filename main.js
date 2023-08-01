//tarjetas de felicitación
const tarjetas = [
    {
      titulo: 'Feliz Cumpleaños',
      imagen: './img/birthday.jpg',
      mensaje: '¡Feliz cumpleaños! Espero que te la pases chido :)',
    },
    {
      titulo: 'Feliz Aniversario',
      imagen: './img/anniversary.jpg',
      mensaje: '¡Feliz aniversario! Gracias por estar este tiempo en mi vida :)',
    },
  ];
  
  function generateCard() {
    // Obtener el índice de la tarjeta seleccionada
    const selectedIndex = document.getElementById('cardSelect').value;
  
    // Obtener el nombre y mensaje ingresados por el usuario
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
  
    //Crear tarjeta
    const greetingCard = document.getElementById('greetingCard');
    greetingCard.innerHTML = `
      <h2>${tarjetas[selectedIndex].titulo}</h2>
      <img src="${tarjetas[selectedIndex].imagen}" alt="Tarjeta de felicitación">
      <p>${tarjetas[selectedIndex].mensaje}</p>
      <p>¡Querid@, ${name}!</p>
      <p>${message}</p>
    `;
    greetingCard.style.display = 'block';
  }