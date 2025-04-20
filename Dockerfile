# FROM node:22 or FROM node can use specific version
# POSITION: Dockerfile instructions is matter of order

FROM node

WORKDIR /app

RUN yarn add nodemon

COPY package.json .


RUN yarn install

COPY . .

EXPOSE 8000

CMD ["yarn","run" "dev"]

# docker build -t node-application .