# Fear-Flicks App

## Descripción

Esta aplicación de películas de terror permite a los usuarios explorar y disfrutar de una amplia variedad de películas de este género. La aplicación ofrece la posibilidad de seleccionar favoritas y hasta jugar a la ruleta para descubrir una película al azar de las seleccionadas.

## Tecnologías Utilizadas

- React
- Vite
- Firebase
- API de TMDb (The Movie Database)
- SweetAlert2
- React Custom Roulette
- React Infinite Scroll Component
- @fortawesome/react-fontawesome
- React Router

## Funcionalidades

1. **Crear Usuario:**
   - Los usuarios pueden crear una cuenta en la aplicación para acceder a funciones personalizadas.

2. **Seleccionar Favoritas:**
   - Los usuarios pueden marcar sus películas favoritas y acceder fácilmente a ellas.

3. **Explorar Películas por Categorías:**
   - Años
   - Estrenos
   - Preferidas

4. **Juego de la Ruleta:**
   - Seleccionar hasta 6 películas.
   - La ruleta elige aleatoriamente una película para ver.

## Instalación

### Para instalar y ejecutar la aplicación en tu máquina local, sigue los siguientes pasos:
 
1. Clona el repositorio a tu máquina local.
2. Abre una terminal en el directorio del proyecto.
3. Ejecuta el comando npm install para instalar las dependencias.
4. Crea el archivo .env con las variables de entorno.
4. Ejecuta el comando npm run dev para iniciar la aplicación.
5. Abre tu navegador y navega a http://localhost:5173 para ver la aplicación en acción.

## Configuración de Firebase

### Para utilizar Firebase en esta aplicación, debes seguir los siguientes pasos:

1. Crea una cuenta en Firebase y crea un nuevo proyecto.
2. En la sección "Authentication" de Firebase, habilita el proveedor de autenticación de correo electrónico y contraseña.
3. En la sección "Firestore" de Firebase, crea una nueva base de datos y configura las reglas de seguridad para permitir lectura/escritura solamente a usuarios autenticados.
4. En la seccion "Storage" de Firebase, crea un nuevo almacenamiento y configura las reglas de seguridad.
5. En la sección "Project settings" de Firebase, haz clic en "Add app" y sigue las instrucciones para agregar una nueva aplicación web.
6. Copia las credenciales de Firebase y configura las variables de entorno en el archivo .env de tu proyecto.

## Configuración de la API de TMDb (The Movie Database)

### Para utilizar la API de TMDb (The Movie Database) en esta aplicacion, debes seguir los siguientes pasos:

1. Crea una cuenta en TMDB
2. Copia el Acces token auth y configura las variables de entorno en el archivo .env de tu proyecto

## Para visualizar el proyecto

1. https://fear-flicks-app.vercel.app
2. https://fearflicks.netlify.app

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más información.
