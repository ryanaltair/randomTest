FROM node:10.15-alpine
WORKDIR /home/app/
COPY package.json package-lock.json ./
RUN npm install --registry=https://registry.npmmirror.com
COPY index.js list.js talk.js 100time.js test.js ./
CMD [ "bash" ]