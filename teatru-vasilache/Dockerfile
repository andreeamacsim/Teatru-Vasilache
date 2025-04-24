# Stage 1: Build Angular app
FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build -- --configuration production --project teatru-vasilache

# Stage 2: Serve app with Nginx
FROM nginx:alpine

# Copiem fișierele generate de Angular (din dist) în folderul corespunzător din Nginx
COPY --from=build /app/dist/teatru-vasilache/browser /usr/share/nginx/html

# Copiem un fișier nginx.conf personalizat (dacă ai nevoie)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expunem portul 80 pentru a accesa aplicația
EXPOSE 80

# Nginx va rula în mod "daemon off" pentru a rămâne activ
CMD ["nginx", "-g", "daemon off;"]
