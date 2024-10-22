FROM oven/bun:latest

WORKDIR /usr/src/app

COPY package*.json ./
COPY bun.lockb ./

RUN bun i

COPY . .

RUN bun run build

EXPOSE 3000

CMD ["bun", "dist/index.js"]