import mongo from "./mongo.js";
import httpServer from "./server.js";

mongo.connect();
const port = process.env.PORT || 4000;

httpServer.listen({ port }, () => {
  console.log(`The server is up on port ${port}!`);
});
