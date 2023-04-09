FROM node:18.15.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit

USER node

COPY src/ .

CMD ["node", "index.js"]