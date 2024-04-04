# Examen Sistemas Distribuidos

### By [C4ncino](https://github.com/C4ncino) & [JuanPabloGHC](https://github.com/JuanPabloGHC)

## Instalación 

El exmane se realizó con un api en flask que interactua con una base de datos en postgresql, una segunda api que recupera estadisticas de la primera api igual en flask y un desarrollo web en react con vite

Para ejecutar los servicios se debe tener [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado

Después se deben descargar el repositorio y colocarse en la carpeta

Por último se debe ejecutar el comando de docker para crear los contenedores e imagenes mediante el docker compose

Todo lo anterior se puede realizar con los siguientes comandos

```bash
git clone https://github.com/C4ncino/Examen_docker.git

cd Examen_docker

docker compose up
```

## Deploy

Por otro lado todos los servicios fueron desplegados y se pueden encontrar bajo las siguientes URLs

[Front End](https://examen-docker.vercel.app/)

[API general](https://examen-docker-api.onrender.com/)

[API de estadísticas](https://examen-docker-stats.onrender.com)

La base de datos se encuentra en Render
