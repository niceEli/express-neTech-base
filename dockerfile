FROM oven/bun:latest

WORKDIR /usr/src/app

COPY package*.json ./
COPY bun.lockb ./

RUN bun i

COPY . .

RUN bun run bun:build

EXPOSE 3000

CMD ["./dist/build"]