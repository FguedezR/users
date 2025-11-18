//usuario.address.street, usuario.address.suite, usuario.address.city
const listaUsuarios = document.getElementById("listaUsuarios");

function getUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      //users
      const users = data
        .map((user) => {
          const { id, address } = user;
          return {
            ...user,
            age: ramdomAge(18, 65),
            img: `./assets/img/${id}.jpeg`,
            address: `${address.street}, ${address.suite}, ${address.city}`,
          };
        })
        .map((user) => {
          const { name, age, username, img, phone, email, company: {companyName}, address } = user;
          const template = `
        <li>
            <div class="user-content">
                <div class="user-info">
                    <h2><strong>Nombre:</strong> ${name}</h2>
                    <p><strong>Edad:</strong> ${age}</p>
                    <p><strong>Usuario:</strong> ${username}</p>
                    <p><strong>Teléfono:</strong> ${phone}</p>
                    <p><strong>Correo:</strong> ${email}</p>
                        <div class="user-image">
                            <img src="${img}" alt="${name}">
                        </div>
                </div>
            </div>
            <div class="user-company">
                <p><strong>Empresa:</strong> ${companyName}</p>
                <p><strong>Ciudad:</strong> ${address}</p>
            </div>
        </li>
        `;
          return template;
        });
      listaUsuarios.innerHTML = users.join("");
    });
}

//podemos guardar el numero aleatorio en una funcion
function ramdomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getUsers();