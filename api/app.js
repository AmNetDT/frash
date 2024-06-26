import express from "express";
import authRoute from "./routes/post.route.js"
import postRoute from "./routes/post.route.js"

const app = express();

app.use(express.json)

app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(8800, () =>{
    console.log("Server is running");
})
