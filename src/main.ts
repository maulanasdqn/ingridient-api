import express from "express";
import type { Express } from "express";

const app: Express = express();

app.route("/api");

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
