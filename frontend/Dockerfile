FROM node:16 as builder

WORKDIR /usr/src/app
COPY package.json .

RUN npm install --force
COPY . .
RUN npm run build

FROM nginx:alpine
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/build /usr/share/nginx/html








