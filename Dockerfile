# use node/npm image at 16.11.x
FROM node:16.11.1

# directory within image where our code lives
WORKDIR /usr/src/app

# copy dependencies (and lockfile) from source code into image
COPY package*.json ./

# install dependencies
RUN npm install

# copy source code into image
COPY . .

# compile TS => JS
RUN npm run build

# run on port 3030
EXPOSE 3030

# run app
CMD ["node", "dist/server.js"]