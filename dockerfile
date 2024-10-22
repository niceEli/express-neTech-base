FROM oven/bun:latest

WORKDIR /usr/src/app

COPY package*.json ./
COPY bun.lockb ./

RUN bun i

COPY . .

RUN bun run bun:build:noCompile

EXPOSE 3000

CMD ["bun","run", "dist/index.js"]