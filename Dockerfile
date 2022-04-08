FROM node:alpine3.14

WORKDIR /code

COPY server/package.json /code

RUN npm install

ADD ./server /code

#RUN npm run typeorm migration:run