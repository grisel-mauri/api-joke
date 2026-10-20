# API REST de Chistes Aleatorios - Trabajo Práctico de Git y Docker

Esta es una API REST construida con Node.js y Express que sirve chistes aleatorios en formato JSON. El proyecto fue desarrollado como parte de un trabajo práctico de la materia Ingenieria de Software.

### 🛠️ Tecnologías

Node.js: Entorno de ejecución para JavaScript en el servidor.

Express: Framework web minimalista para la creación de la API REST.

Git: Sistema de control de versiones distribuido.

Docker: Plataforma de contenedorización.

WSL 2: Subsistema de Windows para Linux (entorno de ejecución para Docker Desktop en Windows).

### Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes en tu sistema:
Git
Docker Desktop (con soporte para WSL 2 activo)


### 🐳 Construcción y Ejecución con Docker

Para correr la aplicación aislada dentro de un contenedor Docker:
1- Abre la terminal
2- Clona el repositorio: Descargas el proyecto desde GitHub a tu PC usando el enlace público con el comando: 
    ```bash
    git clone https://github.com/grisel-mauri/api-joke 
    ```
3- Ubicate en la carpeta raiz del proyecto con el comando: 
    ```bash
    cd api-joke
    ```
4- Ejecuta el siguiente comando para que Docker empaquete tu aplicación:
    ```bash
    docker build -t api-joke .
    ```
5- Ejecuta el contenedor
    ```bash
    docker run -p 3000:3000 api-joke
    ```
6- Para verificar el resultado abre tu navegador e ingresa a:
    ```bash
    http://localhost:3000/joke
    ```


