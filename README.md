# TP3 - UI | 🍽️ Restaurant Frontend
Una aplicación frontend para la gestión de menús y comandas en un restaurante, desarrollada con HTML, CSS y JavaScript, conectada a una API RESTful TP2.

## 📋 Descripción del Proyecto
Esta aplicación permite a los usuarios visualizar el menú del restaurante, acceder a detalles de cada producto, realizar pedidos (comandas), y administrar los datos de mercadería a través de una interfaz intuitiva con una experiencia de usuario optimizada. 
Se trata de una aplicación frontend desarrollada con HTML, CSS y JavaScript, que consume datos de la API REST desarrollada en el Trabajo Práctico 2.

## 🚀 Funcionalidades 
1. **Mostrar el Menú del Restaurante:** Se visualiza una lista completa de todos los productos (platos, bebidas y postres) disponibles en el restaurante.

    `GET /api/v1/Mercaderia?tipo={tipo}&nombre={nombre}&orden={orden}`

3. **Ver Detalles de un Producto:** El usuario puede acceder a la información detallada de cada producto.

    `GET /api/v1/Mercaderia/{id}`

4. **Crear una Comanda:** Permite al usuario armar una comanda seleccionando productos del menú y eligiendo una forma de entrega.

    `POST /api/v1/Comanda`

5. **Buscar, Filtrar y Ordenar Mercadería:** Se puede realizar búsquedas por nombre, filtrar por tipo de producto y ordenar por precio.

    `GET /api/v1/Mercaderia?tipo={tipo}&nombre={nombre}&orden={orden}`

6. **Visualizar Comandas del Día:** Se muestra una lista de todas las comandas realizadas en el día.

    `GET /api/v1/Comanda?fecha={fecha}`

7. **Administrar Mercadería:** Se permite crear, modificar y eliminar productos del menú.

    ```
    POST /api/v1/Mercaderia
    PUT /api/v1/Mercaderia/{id}
    DELETE /api/v1/Mercaderia/{id}
    ```

8. **Ver una Comanda por ID:** Permite buscar una comanda específica por su identificador.

    `GET /api/v1/Comanda/{id}`

## 🖥️ Tecnologías Utilizadas
 * HTML5: Estructura del contenido de la aplicación.
 * CSS3: Diseño y estilos para una interfaz de usuario atractiva.
 * JavaScript (ES6+): Lógica de la aplicación y consumo de la API.
 * API RESTful: Backend desarrollado en .NET Core (Trabajo Práctico 2).
 
## 🎨 UI/UX Consideraciones
### UI (Interfaz de Usuario):
* Diseño limpio y moderno.
* Elementos visuales claros para el menú y detalles de productos.

### UX (Experiencia del Usuario):
* Navegación intuitiva.
* Feedback visual inmediato para acciones (ej.: al agregar productos a la comanda).
