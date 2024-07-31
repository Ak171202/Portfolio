FROM node:lts-slim

WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","deamon off;"]
