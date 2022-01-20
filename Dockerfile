# Stage 1
FROM node:16-alpine as build-step

RUN mkdir -p /app
WORKDIR /app
COPY package.json /app

RUN npm install

COPY . /app
RUN npm run build --prod
# Stage 2

FROM nginx:1.20.2-alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-step /app/dist/exchange-app /usr/share/nginx/html

EXPOSE 80

