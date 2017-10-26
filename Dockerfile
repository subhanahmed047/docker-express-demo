FROM node:6.5.0

WORKDIR /app

RUN npm install nodemon -g

COPY ./package.json /app/package.json
RUN npm install

COPY app.js /app/app.js

EXPOSE 3001
