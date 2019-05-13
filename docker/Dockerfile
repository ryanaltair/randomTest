FROM node:10.15-alpine
WORKDIR /home/app/
COPY package.json package-lock.json ./
RUN npm install --registry=https://registry.npm.taobao.org
COPY index.js list.js ./
CMD [ "bash" ]