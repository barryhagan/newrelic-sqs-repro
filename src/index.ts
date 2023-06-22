import express from "express";
import newrelic from "newrelic";
import http from "http";
import { QueueConsumer, QueueProducer } from "./queue/index.js";

const appStart = async () => {
  const queueConsumer = new QueueConsumer();
  const queueProducer = new QueueProducer();

  const app = express();

  app.get("/hello", (req, res) => {
    newrelic.getTransaction().ignore();
    res.setHeader("Content-Type", "application/json");
    res.end("hello");
  });

  app.get("*", (req, res) => {
    res.sendStatus(404);
  });

  const httpServer = http.createServer(app);
  httpServer.listen({ port: 44044 }, () => {});
};

appStart().catch((err) => console.log(err));
