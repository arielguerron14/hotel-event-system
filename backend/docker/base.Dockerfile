# Use la imagen base oficial de Node.js
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia las dependencias del proyecto (package.json y package-lock.json)
COPY package*.json ./

# Instala las dependencias en el contenedor
RUN npm install --production

# Copia el código fuente del servicio
COPY . .

# Establece las variables de entorno comunes
ENV NODE_ENV=production

# Exponer un puerto común (puede ser cambiado por cada servicio específico)
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "index.js"]
