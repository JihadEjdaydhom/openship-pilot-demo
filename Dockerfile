FROM node:20-alpine
WORKDIR /app
COPY package.json ./
COPY index.js ./
EXPOSE 8080
ENV PORT=8080
ENV APP_VERSION=1.0.0
CMD ["node", "index.js"]
