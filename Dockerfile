FROM node:14.17.0 as build
WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY .docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["/bin/bash", "-c", "nginx -g \"daemon off;\""]