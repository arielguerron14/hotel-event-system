# Base Dockerfile para todos los microservicios
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto que usará el microservicio
EXPOSE 3000

# Comando por defecto para iniciar el contenedor
CMD ["npm", "start"]
