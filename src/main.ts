import type { Express } from "express";
import express from "express";
import { baseRouter } from "@/modules/base";

const app: Express = express();

app.use(express.json());

app.use("/api", baseRouter);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
