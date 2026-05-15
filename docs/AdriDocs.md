Buenas adri,
Le aviso de que la práctica está hecha con un modo offline. El código está preparado para usar la API (con sus endpoints, headers, tipos y manejo de errores), pero al probarla en mi ordenador tuve problemas de CORS y no conseguí que funcionara desde el navegador.
Para poder probar todos los apartados y hacer las capturas, he hecho que el registro y el login guarden los usuarios en AsyncStorage en vez de en la API. El comportamiento de la app es el mismo: validaciones, token, redirecciones y protección de pantallas.
El código original con la API está comentado al final de src/services/authService.ts. Para activarlo solo hay que descomentarlo y poner la IP del servidor en constants.ts.
Disculpe las molestias.

