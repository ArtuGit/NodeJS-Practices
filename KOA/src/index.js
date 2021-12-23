import http from 'http'
import https from 'https'
import Koa from "koa";
import cors from "@koa/cors";

const app = new Koa();

// Cors
app.use(cors({origin: "*"}));

// Settings
const HOST = 'localhost';
const HTTP_PORT = 3000;
const HTTPS_PORT = 3001;


// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// response
app.use(async ctx => {
  ctx.body = 'Hello World';
});

// Listen
const httpServer = http.createServer(app.callback())
  .listen(HTTP_PORT, HOST, listeningReporter)
const httpsServer = https.createServer(app.callback())
  .listen(HTTPS_PORT, HOST, listeningReporter)


// A function that runs in the context of the http server
// and reports what type of server listens on which port
function listeningReporter() {
  // `this` refers to the http server here
  const {address, port} = this.address();
  const protocol = this.addContext ? 'https' : 'http';
  console.log(`Listening on ${protocol}://${address}:${port}...`);
}