# Folosim o imagine de bază Node.js
FROM node:18-alpine

# Setăm directorul de lucru în container
WORKDIR /app

# Copiem fișierele de configurație (package.json și package-lock.json) și instalăm dependențele
COPY package*.json ./
RUN npm install

# Copiem restul fișierelor aplicației (inclusiv folderul public)
COPY . .

# Copiem folderul public (dacă nu a fost deja inclus cu COPY . .)
# În mod normal, acest pas ar trebui să nu fie necesar dacă `public` este deja parte din sursa ta de cod
COPY ./public ./public

# Expunem portul 3000 pentru a fi accesibil din exterior
EXPOSE 3001

# Comanda pentru a lansa aplicația Express
CMD ["node", "server.js"]
