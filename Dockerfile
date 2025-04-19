# FROM node:22 or FROM node can use specific version
# POSITION: Dockerfile instructions is matter of order

FROM node

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .



EXPOSE 8000

CMD ["node", "app.js"]

# docker build -t node-application .