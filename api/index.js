// index.js
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
  const { id } = req.params;
  const post = await prisma.post.findUnique({
    where: {
      id: Number(id),
    },
  });
  res.json(post);
});
