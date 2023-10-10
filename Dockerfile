FROM node:16-alpine AS build
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build:prod
# Serve Application using Nginx Server
FROM nginx:alpine
COPY --from=build /app/dist/weather-angular-app/ /usr/share/nginx/html
CMD sed -i -e 's/$PORT/'"$PORT"'/' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'