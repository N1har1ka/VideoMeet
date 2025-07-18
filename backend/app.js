import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose, { mongo } from "mongoose";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import connectToSocket from "./controllers/socketManager.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ extended: true, limit: "40kb" }));

app.use("/api/v1/users", userRoutes);

const start = async () => {
  const connectionDb = await mongoose.connect(
    "mongodb+srv://niharika202310:ClHpLAE6lvJG80YH@cluster0.idqgek4.mongodb.net/videocall"
  );
  console.log(`Connected to MongoDB : ${connectionDb.connection.host}`);
  server.listen(app.get("port"), () => {
    console.log("Server is running on port 8000");
  });
};

start();
