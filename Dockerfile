FROM node:19.1.0-slim

WORKDIR /app/bot

COPY package*.json ./
RUN npm ci
COPY . .

CMD [ "npm", "start" ]
