# admin-portafolio

Aplicación web desarrollada con Angular 21 que implementa autenticación basada en JWT y arquitectura modular escalable.
El proyecto sigue buenas prácticas modernas como standalone components, interceptores HTTP y guards para control de acceso.

## Arquitectura

El proyecto sigue una arquitectura basada en features con separación de responsabilidades inspirada en Clean Architecture.

Estructura principal:

- `core/`: servicios globales (auth, interceptors, guards)
- `shared/`: componentes reutilizables
- `features/`: módulos funcionales (auth, dashboard)

Esto permite escalabilidad, mantenibilidad y bajo acoplamiento.

## Tecnologías

- Angular 21
- TypeScript
- SCSS
- Angular Router
- HttpClient

## Instalación

```bash
npm install
ng serve