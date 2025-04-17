FROM node:22

WORKDIR /app

COPY . .

RUN yarn install

EXPOSE 8000

CMD ["node", "app.js"]

# docker build -t node-application .