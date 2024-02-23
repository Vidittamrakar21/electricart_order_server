FROM node:18 as builder

WORKDIR /build

COPY package*.json .
RUN npm install

COPY controller/ controller/
COPY routes/ routes/
COPY index.ts index.ts
COPY tsconfig.json tsconfig.json

RUN npm run build

FROM node:18 as runner

WORKDIR /app

COPY --from=builder build/package*.json .
COPY --from=builder build/node_modules node_modules
COPY --from=builder build/dist dist/

CMD [ "npm", "start" ]