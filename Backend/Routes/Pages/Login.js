// Función para manejar el envío del formulario de login
async function handleLogin(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma convencional
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Validación básica del formulario
    if (!username || !password) {
      alert('Por favor, ingrese usuario y contraseña.');
      return;
    }
  
    try {
      // Realiza una solicitud POST al endpoint de login en tu backend
      const response = await fetch('/Pages/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      const data = await response.json();
  
      // Verifica si la respuesta es exitosa
      if (response.ok) {
        // Almacena el token JWT de manera segura
        localStorage.setItem('token', data.token);
  
        // Redirecciona a la página de inicio o a la página deseada
        const redirectTo = window.localStorage.getItem('redirectTo') || '/';
        window.localStorage.removeItem('redirectTo');
        window.location.href = redirectTo;
      } else {
        // Muestra un mensaje de error si la autenticación falla
        alert(data.message || 'Error en la autenticación. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error en la autenticación:', error);
      alert('Error en la autenticación. Por favor, inténtalo de nuevo.');
    }
  }
  
  // Asocia el evento submit del formulario al manejo de login
  document.getElementById('loginForm').addEventListener('submit', handleLogin);
