FROM node:22

WORKDIR /app

COPY . .

RUN yarn

EXPOSE 3001

CMD ["node", "app.js"]

# docker build -t node-application .