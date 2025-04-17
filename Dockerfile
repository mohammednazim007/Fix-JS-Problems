FROM node:22

WORKDIR /app

COPY . .

RUN yarn add

EXPOSE 3001

CMD ["node", "app.js"]

