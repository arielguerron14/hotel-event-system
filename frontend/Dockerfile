# Usa Node.js como base
FROM node:18

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos necesarios y realiza la instalación de dependencias
COPY package.json package-lock.json ./
RUN npm install && npm install -g serve

# Copia el resto del frontend (incluyendo `public/index.html`)
COPY . .

# Construye el frontend con Vite
RUN npm run build

# Expone el puerto 3000 para el frontend
EXPOSE 80

# Sirve la aplicación con `serve`
CMD ["npx", "serve", "-s", "dist", "-l", "3000"]
