FROM node:lts-slim

WORKDIR /app

COPY . .
RUN npm install
ENTRYPOINT ["npm"]
CMD ["run","start"]
