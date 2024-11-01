// Función para obtener usuarios de la API y mostrarlos en la página
async function obtenerUsuarios() {
          try {
              const response = await fetch('https://api.escuelajs.co/api/v1/users');
              const users = await response.json();
      
              const userList = document.getElementById('user-list');
              userList.innerHTML = ''; // Limpiar el contenido anterior
      
              users.forEach(user => {
                  // Crear un card con los datos del usuario
                  const userCard = document.createElement('div');
                  userCard.className = 'col-md-4 mb-4';
                  userCard.innerHTML = `
                      <div class="card">
                          <img src="${user.avatar}" class="card-img-top" alt="Avatar de ${user.name}">
                          <div class="card-body">
                              <h5 class="card-title">${user.name}</h5>
                              <p class="card-text"><strong>Email:</strong> ${user.email}</p>
                              <p class="card-text"><strong>Password:</strong> ${user.password}</p>
                          </div>
                      </div>
                  `;
                  userList.appendChild(userCard);
              });
          } catch (error) {
              console.error('Error al obtener los usuarios:', error);
              alert('Hubo un error al cargar los usuarios. Intente nuevamente más tarde.');
          }
      }
      
      // Llamar a la función para obtener los usuarios cuando la página se cargue
      window.onload = obtenerUsuarios;
      