
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

COPY ./public ./public


EXPOSE 3002


CMD ["node", "server.js"]
