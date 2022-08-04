FROM node:16

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
RUN npm install -g serve
# add app
COPY . ./
RUN npm run build
RUN cp -r package.json build/package.json
# start app
CMD ["serve", "-s", "build"]
