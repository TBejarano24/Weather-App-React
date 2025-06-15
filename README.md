# Weather App!!

Me costó muchas lágrimas pero logré hacer algo medianamente decente

## Funcionalidades y cositas a tener en cuenta

El proyecto sigue fielmente el estilo original requerido, aunque me tomé algunas libertades con ciertas áreas grises, como la animación de algunos botones y otros elementos clickeables.
~~El proyecto está desplegado en github pages a través de github actions; sufrí bastante para acceder a las rutas del proyecto ahora que la base de la url era otra, pero encontré una manera de hacerlo con import.meta.env.BASE_URL.~~ Al final me costó mucho desplegar en github pages, así que lo hice en vercel y funciona bien.
Se añadieron estados de carga y de error que se mezclan con el resto del diseño, de modo que el usuario puede enterarse cuando los datos están cargando, o si algo está mal.
La barra de búsqueda muestra algunas ciudades principales predeterminadas como recomendación, pero una vez que se empieza a escribir, empieza a recomendar las ciudades que coinciden con lo que el usuario está escribiendo.
Otra funcionalidad muy útil de las recomendaciones de búsqueda, es que también considera el código de país y lo pasa como prop al hook encargado de traer los datos del clima, para que, a pesar de que haya varias ciudades con el mismo nombre, sólo traiga los datos de la que el usuario desea.
Teniendo en cuenta que la zona horaria podría ser un problema, también se añadió un pequeño sistema que usa los datos devueltos por la API para aproximar la hora a la que corresponde a la ciudad seleccionada (Ya que normalmente lo hace en hora local), así que si en alguna parte es el día que para nosotros sería mañana, eso debería reflejarse en la fecha.
Finalmente, se añadió un archivo .env con la clave de la API, y se ocultó exitosamente por medio del archiv .gitignore, para evitar fallas de seguridad básicas.
