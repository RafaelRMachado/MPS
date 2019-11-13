FROM node:10.16
WORKDIR /mps-microservice

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 4433
EXPOSE 3000
CMD [ "npm", "start" ]
