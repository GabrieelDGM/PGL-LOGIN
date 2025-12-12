# 📱 PGL-LOGIN

1. Introducción
Este proyecto consiste en una aplicación móvil desarrollada con React Native y Expo Router, conectada a un backend hecho en Visual Studio (.NET).

# La aplicación permite al usuario:
* Registrarse
* Iniciar sesión
* Acceder a un mensaje de bienvenida usando un token JWT
* Navegar por pantallas como Portada, Portfolio y Lista de Animes

1. Objetivos
* 2.1 Implementar un flujo de autenticación con registro y login. 
* 2.2 Guardar y recuperar el token JWT en el almacenamiento local. 
* 2.3 Mostrar un mensaje de bienvenida protegido por autenticación. 
* 2.4 Diseñar una estructura de navegación clara con Drawer y pantallas principales. 
* 2.5 Crear una interfaz amigable con Portada, Portfolio y Lista de Animes.

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
*5.1* apiService.ts: configura la URL base del backend y gestiona llamadas HTTP.
*5.2* authService.ts: funciones para registro, login y bienvenida.
*5.3 *storageService.ts: guarda, recupera y elimina el token JWT en AsyncStorage.

# Flujo de la Aplicación
*6.1* El usuario abre la app → se muestra Login. 
*6.2* Puede registrarse en Registro → tras éxito entra a Portfolio. 
*6.3* Si inicia sesión → se guarda token y se redirige a Bienvenida. 
*6.4* En Bienvenida se muestra mensaje del backend. s
*6.5* El Drawer permite navegar entre Portada, Portfolio y Lista de Animes. 
*6.6* Al cerrar sesión se borra el token y se vuelve a Login.

# Contenido extra
[EjercicioUno](./docs/EjercicioUno.md)
[EjercicioDos](./docs/EjercicioDos.md)
