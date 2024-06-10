```markdown
# Mimabel - Tienda Web de Ropa y Gafas

Mimabel es una tienda web diseñada para la venta de ropa y gafas, creada para digitalizar y expandir un pequeño comercio local. Este proyecto utiliza tecnologías modernas como Vue 3, JavaScript, CSS y Tailwind CSS para proporcionar una experiencia de usuario fluida y atractiva.

## Descripción del Proyecto

El objetivo principal de Mimabel es facilitar la compra de productos a través de internet, mejorando significativamente la experiencia del cliente y ayudando a un pequeño comercio a llegar a un público más amplio. La tienda web incluye funcionalidades clave como la gestión de productos, carrito de compras, sistema de cupones, y una interfaz de administración.

## Tecnologías Utilizadas

- **Vue 3**: Framework de JavaScript utilizado para construir la interfaz de usuario.
- **JavaScript (JS)**: Lenguaje de programación utilizado para la lógica de la aplicación.
- **CSS**: Utilizado para el diseño y la estilización básica de la aplicación.
- **Tailwind CSS**: Framework de CSS utility-first utilizado para crear diseños modernos y responsivos.

## Funcionalidades Principales

- **Gestión de Productos**: Añadir, editar y eliminar productos del catálogo.
- **Carrito de Compras**: Añadir y eliminar productos del carrito, y gestionar la cantidad de productos.
- **Sistema de Cupones**: Aplicar cupones de descuento en el carrito de compras.
- **Autenticación de Usuarios**: Registro e inicio de sesión de usuarios.
- **Interfaz de Administración**: Panel para administradores con herramientas para gestionar productos y ventas.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- **components**: Contiene componentes reutilizables de Vue.js.
- **composables**: Hooks reutilizables para encapsular y reutilizar lógica compartida.
- **config**: Configuraciones para la base de datos (Firebase).
- **data**: Datos de los productos que se agregarán.
- **helpers**: Funciones utilitarias comunes.
- **router**: Manejo de rutas de la aplicación.
- **stores**: Estado global de la aplicación usando Vuex.
- **views**: Vistas de la aplicación (páginas completas).
- **public**: Archivos públicos accesibles desde el navegador.
- **src**: Código fuente principal de la aplicación.
- **tests**: Pruebas unitarias e integración.

## Instalación y Configuración

1. **Clonar el repositorio**:
   ```sh
   git clone https://github.com/tuusuario/mimabel-web.git
   cd mimabel-web
   ```

2. **Instalar las dependencias**:
   ```sh
   npm install
   ```

3. **Configurar Firebase**:
   - Crear un proyecto en Firebase y configurar Firestore y Firebase Storage.
   - Copiar la configuración de Firebase en el archivo `config/firebaseConfig.js`.

4. **Correr la aplicación**:
   ```sh
   npm run serve
   ```

## Despliegue

Para desplegar la aplicación en GitHub Pages:

1. **Construir la aplicación**:
   ```sh
   npm run build
   ```

2. **Desplegar**:
   ```sh
   npm run deploy
   ```


## Contacto

Para cualquier pregunta o sugerencia, puedes contactar a:

- **Autor**: Daniel Cadenas Dominguez
- **Correo Electrónico**: danielcadenas1331@gmail.com
