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
  const { title, content, authorEmail } = req.body;
  const post = await prisma.post.create({
    data: {
      voucher,
      createdAt,
    },
  });
  res.status(200).json(post);
});
