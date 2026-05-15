# Ejercicio Tres


## Objetivo
El drawer (menú lateral) **solo debe estar accesible si hay token guardado**. Si no hay token, el usuario debe ser redirigido al login.

# Cómo se ha implementado
1. La pantalla raíz (`app/index.tsx`) comprueba con `getToken()` si existe un token en `AsyncStorage`:
   - Si **hay token** → redirige a `/bienvenida/portada` (drawer visible).
   - Si **no hay token** → redirige a `/login` (drawer oculto, ya que la pantalla de login no tiene header).
  
2. La pantalla `bienvenida/portada.tsx` también comprueba el token al montarse y redirige al login si falta. Esto evita que se pueda entrar a la pantalla protegida si se navega directamente sin token.

3. En `app/_layout.tsx`, las pantallas de login, register e index están marcadas con `drawerItemStyle: { display: "none" }` para que **no aparezcan como opciones del drawer**. Solo se ven las pantallas protegidas: Bienvenida, Portfolio y Lista de Animes.

[Volver Al Readme](../README.md)