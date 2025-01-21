# hotel-event-system
Archivo README.md
Proporciona documentación básica sobre el uso de la carpeta shared-libraries.


# Shared Libraries

Esta carpeta contiene utilidades reutilizables para todos los microservicios. Incluye:

- **Logger:** Herramienta para manejo de logs.
- **Config:** Manejo centralizado de variables de entorno.

## Uso

1. **Logger**
   Para usar el logger en cualquier microservicio:
   ```javascript
   const logger = require('../shared-libraries/logger/logger');
   logger.info('Información de prueba');
   logger.error('Error de prueba');

Config Para usar las variables de entorno centralizadas:

const env = require('../shared-libraries/config/env');
console.log(env.mongoUri);

Requisitos
Winston: npm install winston
Dotenv: npm install dotenv

yaml

---

### **Cómo Integrar `shared-libraries` en los Microservicios**

1. **Asegúrate de tener las dependencias instaladas:**
   - `winston` para el logger.
   - `dotenv` para la configuración de entorno.
   ```bash
   npm install winston dotenv

Incluye las utilidades en los microservicios:

Logger: Para logs estructurados en consola y archivos.
Config: Para acceder a las variables de entorno centralizadas.

Ejemplo de Uso en un Microservicio (auth-service):

javascript

const logger = require('../shared-libraries/logger/logger');
const env = require('../shared-libraries/config/env');

logger.info('Servicio de autenticación iniciado');
console.log(`Conectando a MongoDB en ${env.mongoUri}`);
