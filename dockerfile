# build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN  npm audit fix --force
COPY . .
RUN npm run build -- --configuration=production

# run stage
FROM nginx:stable-alpine
COPY --from=builder /app/dist/CrudApp /usr/share/nginx/html
# optional: copy custom nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
