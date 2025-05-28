Proyecto creado con [Next.js](https://nextjs.org), [Shadcn](https://ui.shadcn.com/) y [Turso](https://turso.tech/)

## Pasos para replicar el proyecto

1 - Clonar el repositorio

2 - Ejecutar ```npm i``` en la consola de comandos

3 - Crear una base de datos en [Turso](https://turso.tech/)

4 - Renombrar el archivo .template.env a .env y completar con las variables propias

5 - Ejecutar el proyecto en modo de desarrollador ```npm run dev```

6 - Abrir en el navegador [http://localhost:3000](http://localhost:3000)

7 - Para crear las tablas es necesario ir a la ruta ```/api/database/create```

8 - Desde aquí ya se puede utilizar la agenda

9 - Para crear unos campos de ejemmplos es necesario ir a la ruta ```/api/database/populate```


### Sobre el proyecto
Para la confección de la agenda decidí crear 2 tablas, en una guardo datos de los contactos y en la otra guardo las provincias para poder realizar consultas y filtrados más específicos. Además se creé una vista la cual es la que muestra todos los contactos, para simplificar las consultas.