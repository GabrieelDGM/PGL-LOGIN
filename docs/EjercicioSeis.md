# Ejercicio Seis

# Servicios y organización del código

## ¿Cómo está organizado el código?

Hay una carpeta `src/services/` con **cinco archivos**, cada uno con una responsabilidad clara:

```
src/services/
├── constants.ts        → URL del servidor y rutas de los endpoints
├── apiService.ts       → Función base para hablar con el servidor
├── authService.ts      → Registro, login y bienvenida
├── storageService.ts   → Guardar/borrar el token en el móvil
└── validation.ts       → Validar emails y contraseñas
```


## Ventajas de tener todo organizado así

1. **No se repite código**: la lógica de hacer fetch, poner headers, manejar errores, está en un solo sitio.
2. **Es fácil de cambiar**: si la API cambia, no hay que ir tocando 20 sitios — solo se toca el servicio.
3. **El código es más legible**: las pantallas se centran en la interfaz, no en cómo se habla con el servidor.
4. **Es testeable**: las funciones de validación son puras (no dependen de nada externo) y se pueden testear fácilmente.
5. **Tipos fuertes**: TypeScript me obliga a declarar qué tipo devuelve cada función, así que si llamo mal a algo, el editor me lo dice antes de ejecutar el código.

[Volver al README](../README.md)
