# 📱 PGL-LOGIN

# Introducción
Este proyecto consiste en una aplicación móvil desarrollada con React Native y Expo Router, conectada a un backend hecho en Visual Studio (.NET).

# La aplicación permite al usuario:
* Registrarse
* Iniciar sesión
* Acceder a un mensaje de bienvenida usando un token JWT
* Navegar por pantallas como Portada, Portfolio y Lista de Animes

# Objetivos
* Implementar un flujo de autenticación con registro y login. 
* Guardar y recuperar el token JWT en el almacenamiento local. 
*  Mostrar un mensaje de bienvenida protegido por autenticación. 
*  Diseñar una estructura de navegación clara con Drawer y pantallas principales. 
*  Crear una interfaz amigable con Portada, Portfolio y Lista de Animes.

# Estructura del Proyecto
![ESTRUCTURA](./docs/image/estructura.png)

# Descripción de las Pantallas
* Login (index.tsx): formulario de inicio de sesión, guarda token y redirige a Bienvenida.
* Registro (register.tsx): formulario de registro, tras éxito redirige a Portfolio.
* Bienvenida (bienvenida/index.tsx): muestra mensaje del backend usando token, incluye botón de cerrar sesión.
* Portada (portada.tsx): pantalla con imagen de fondo y bienvenida.
* Portfolio (tabs/index.tsx): pantalla con hobbies o proyectos.
* Lista de Animes (list.tsx): listado de animes.

# Servicios
* apiService.ts: configura la URL base del backend y gestiona llamadas HTTP.
* authService.ts: funciones para registro, login y bienvenida.
* storageService.ts: guarda, recupera y elimina el token JWT en AsyncStorage.

# Flujo de la Aplicación
* El usuario abre la app → se muestra Login. 
* Puede registrarse en Registro → tras éxito entra a Portfolio. 
* Si inicia sesión → se guarda token y se redirige a Bienvenida. 
* En Bienvenida se muestra mensaje del backend. s
* El Drawer permite navegar entre Portada, Portfolio y Lista de Animes. 
* Al cerrar sesión se borra el token y se vuelve a Login.

# Contenido extra
[EjercicioUno](./docs/EjercicioUno.md)
[EjercicioDos](./docs/EjercicioDos.md)
