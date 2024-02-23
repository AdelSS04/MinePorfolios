FROM node:18-bullseye AS build
WORKDIR /app

COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build
# Serve Application using Nginx Server
FROM nginx:alpine
COPY --from=build /app/dist/personal-portfoli-angular/ /usr/share/nginx/html
EXPOSE 80
