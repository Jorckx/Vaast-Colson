//import mongo from "./mongo";
//
//async function handleCall(req, res, next) {
//
//  if (req.url !== "/data") {
//    return next;
//  }
//
//  await mongo.connect();
//  await mongo.db("test").collection("text").replaceOne(
//    {
//      _id: "mydoc",
//    },
//    {
//      date: new Date(),
//    },
//    {
//      upsert: true,
//    }
//  );
//
//  res.setHeader('Content-type', 'application/json');
//  res.end(JSON.stringify({date: new Date()}))
//}
//
//export default function (req, res, next) {
//  handleCall(req, res, next).then((n) => {
//    if (n) n();
//  });
//}

// index.js;
import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

/**
 * logic for our api will go here
 */
export default {
  path: "/api",
  handler: app,
};

app.post("/post", async (req, res) => {
  const { voucher, createdAt } = req.body;
  const post = await prisma.post.create({
    data: {
      voucher,
      createdAt,
    },
  });
  res.status(200).json(post);
});
app.get("/post", async (req, res) => {
  res.json(post);
});
