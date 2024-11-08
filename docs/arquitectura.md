#### `arquitectura.md`
```markdown
# Arquitectura del Proyecto

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```plaintext
amedplus-landing-page/
├── css/
│   ├── main.css
│   └── ...
├── js/
│   ├── main.js
│   └── ...
├── images/
│   └── ...
├── index.html
└── README.md
```

## Descripción de Carpetas y Archivos

- **css/**: Contiene los archivos de estilos CSS.
  - `main.css`: Archivo principal de estilos.
- **js/**: Contiene los archivos JavaScript.
  - `main.js`: Archivo principal de scripts.
- **images/**: Contiene las imágenes utilizadas en la página.
- **index.html**: Archivo HTML principal de la landing page.
- **README.md**: Archivo README con la descripción del proyecto.

## Tecnologías Utilizadas

- **HTML5**: Para la estructura de la página.
- **CSS3**: Para los estilos y diseño.
- **Bootstrap**: Para un diseño responsivo y componentes predefinidos.
- **JavaScript**: Para la interactividad y funcionalidad de la página.

## Flujo de Trabajo

1. **Desarrollo Local**: Los desarrolladores trabajan en sus ramas locales y realizan commits de sus cambios.
2. **Integración Continua**: Se realizan pull requests a la rama `develop` para integrar los cambios.
3. **Revisión de Código**: Los pull requests son revisados y aprobados antes de ser fusionados.
4. **Despliegue**: Una vez que la rama `develop` está estable, se fusiona con la rama `main` para el despliegue.
